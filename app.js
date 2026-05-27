// ── STATE ──
const PASSWORD = 'H135.SCL';
const LS_KEY = 'h135_progress';

let state = {
  currentChapter: null,
  currentTab: 'overview',
  quizChapter: null,
  quizIndex: 0,
  quizAnswers: [],
  quizDone: false,
  sidebarOpen: false,
  sidebarCollapsed: false,
  bankChapter: 'all',
  bankDiff: 'm',
  examQuestions: [],
  examIndex: 0,
  examAnswers: [],
  examDone: false
};

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || { completed: [], scores: {} }; }
  catch { return { completed: [], scores: {} }; }
}
function saveProgress(p) { localStorage.setItem(LS_KEY, JSON.stringify(p)); }

// ── LOGIN ──
function initLogin() {
  const form = document.getElementById('loginForm');
  const input = document.getElementById('pwInput');
  const err = document.getElementById('loginErr');
  const eye = document.getElementById('eyeBtn');

  eye.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    eye.innerHTML = show
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value === PASSWORD) {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('app').classList.add('visible');
      renderDashboard();
      renderSidebar();
      showView('dashboard');
    } else {
      err.classList.add('show');
      input.value = '';
      input.focus();
      setTimeout(() => err.classList.remove('show'), 3000);
    }
  });
}

// ── SIDEBAR ──
function renderSidebar() {
  const p = loadProgress();
  const ul = document.getElementById('sidebarList');
  ul.innerHTML = CHAPTERS.map(ch => {
    const done = p.completed.includes(ch.id);
    const active = state.currentChapter === ch.id;
    return `<div class="sb-item ${active?'active':''} ${done?'done':''}" onclick="openChapter(${ch.id})">
      <div class="sb-num">${ch.num}</div>
      <div class="sb-title">${ch.title}</div>
      <div class="sb-check">✓</div>
    </div>`;
  }).join('');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sbOverlay');
  state.sidebarOpen = !state.sidebarOpen;
  sb.classList.toggle('open', state.sidebarOpen);
  ov.classList.toggle('show', state.sidebarOpen);
}
function closeSidebar() {
  state.sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbOverlay').classList.remove('show');
}

// ── VIEWS ──
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id + 'View');
  if (el) { el.classList.add('active'); el.classList.add('fade-in'); }
  closeSidebar();
}

// ── PROGRESS ──
function updateHeaderProgress() {
  const p = loadProgress();
  const pct = Math.round((p.completed.length / CHAPTERS.length) * 100);
  document.getElementById('headerProg').textContent = `${p.completed.length}/${CHAPTERS.length} Completed`;
}

// ── DASHBOARD ──
function renderDashboard() {
  const p = loadProgress();
  const total = CHAPTERS.length;
  const done = p.completed.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById('overallPct').textContent = pct + '%';
  document.getElementById('overallBar').style.width = pct + '%';
  document.getElementById('chipDone').textContent = `✓ ${done} Completed`;
  document.getElementById('chipTodo').textContent = `◯ ${total - done} Remaining`;
  document.getElementById('chipScore').textContent = `📝 ${Object.keys(p.scores).length} Quizzes Done`;
  updateHeaderProgress();

  const grid = document.getElementById('chapterGrid');
  grid.innerHTML = CHAPTERS.map(ch => {
    const isDone = p.completed.includes(ch.id);
    const score = p.scores[ch.id];
    const progPct = isDone ? 100 : (score !== undefined ? 50 : 0);
    return `<div class="ch-card ${isDone?'done':''}" onclick="openChapter(${ch.id})">
      <div class="ch-status ${isDone?'done-s':'todo-s'}">${isDone?'✓':'○'}</div>
      <div class="ch-card-top">
        <div class="ch-icon" style="background:${ch.bg}">${ch.icon}</div>
        <div class="ch-meta">
          <div class="ch-num">Chapter ${ch.num}</div>
          <h3>${ch.title}</h3>
          <p>${ch.sub}</p>
        </div>
      </div>
      <p style="font-size:12px;color:var(--txt3);margin-bottom:0;line-height:1.5">${ch.desc.substring(0,90)}…</p>
      <div class="ch-footer">
        <div class="ch-mini-bar"><div class="ch-mini-fill" style="width:${progPct}%;background:${isDone?'var(--ok)':ch.color}"></div></div>
        <button class="ch-btn ${isDone?'ch-btn-review':'ch-btn-start'}">${isDone?'Review':'Start'}</button>
      </div>
    </div>`;
  }).join('');
}

// ── CHAPTER VIEW ──
function openChapter(id) {
  state.currentChapter = id;
  const ch = CHAPTERS[id];
  const p = loadProgress();
  const isDone = p.completed.includes(id);

  // Breadcrumb
  document.getElementById('chBreadNum').textContent = `Chapter ${ch.num}`;
  document.getElementById('chBreadTitle').textContent = ch.title;

  // Hero
  document.getElementById('chHeroTag').style.background = ch.bg;
  document.getElementById('chHeroTag').style.color = ch.color;
  document.getElementById('chHeroTagText').textContent = `Chapter ${ch.num} · ${ch.sub}`;
  document.getElementById('chHeroBgNum').textContent = ch.num;
  document.getElementById('chHeroTitle').textContent = ch.title;
  document.getElementById('chHeroDesc').textContent = ch.desc;
  document.getElementById('chHeroIcon').textContent = ch.icon;

  // Objectives
  document.getElementById('chObjList').innerHTML = ch.obj.map(o => `<div class="obj-chip">${o}</div>`).join('');

  // Content sections
  document.getElementById('chSections').innerHTML = ch.sections.map(s => `
    <div class="cs">
      <h3><span>${s.i}</span> ${s.t}</h3>
      ${s.h}
    </div>`).join('');

  // Key Data
  document.getElementById('chKeyData').innerHTML = `
    <div class="cs">
      <h3><span>📊</span> Key Data & Specifications</h3>
      <table class="dt"><thead><tr><th>Parameter</th><th>Value</th></tr></thead>
      <tbody>${ch.kd.map(r=>`<tr><td>${r.l}</td><td>${r.v}</td></tr>`).join('')}</tbody></table>
    </div>`;

  // Nav buttons
  const prevBtn = document.getElementById('prevChBtn');
  const nextBtn = document.getElementById('nextChBtn');
  prevBtn.style.display = id > 0 ? '' : 'none';
  nextBtn.style.display = id < CHAPTERS.length - 1 ? '' : 'none';
  if (id > 0) prevBtn.onclick = () => openChapter(id - 1);
  if (id < CHAPTERS.length - 1) nextBtn.onclick = () => openChapter(id + 1);

  // Complete button
  const cBtn = document.getElementById('completeBtn');
  if (isDone) {
    cBtn.textContent = '✓ Completed';
    cBtn.className = 'complete-btn done-btn';
    cBtn.onclick = null;
  } else {
    cBtn.textContent = '✓ Mark Complete';
    cBtn.className = 'complete-btn';
    cBtn.onclick = () => markComplete(id);
  }

  // Reset tabs
  switchTab('overview');
  renderSidebar();
  updateHeaderProgress();
  showView('chapter');

  // Scroll to top
  document.querySelector('.main-content').scrollTop = 0;
}

function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === 'tab_' + tab));
}

function markComplete(id) {
  const p = loadProgress();
  if (!p.completed.includes(id)) p.completed.push(id);
  saveProgress(p);
  renderSidebar();
  renderDashboard();
  openChapter(id); // refresh complete btn
}

// ── QUIZ ──
function startQuiz(id) {
  state.quizChapter = id !== undefined ? id : state.currentChapter;
  state.quizIndex = 0;
  state.quizAnswers = [];
  state.quizDone = false;
  const ch = CHAPTERS[state.quizChapter];

  document.getElementById('qzTitle').textContent = `Chapter ${ch.num} — Quiz`;
  document.getElementById('qzSubtitle').textContent = `${ch.quiz.length} questions · ${ch.title}`;

  renderQuestion();
  showView('quiz');
  document.querySelector('.main-content').scrollTop = 0;
}

function renderQuestion() {
  const ch = CHAPTERS[state.quizChapter];
  const q = ch.quiz[state.quizIndex];
  const total = ch.quiz.length;
  const pct = (state.quizIndex / total) * 100;

  document.getElementById('qzProgFill').style.width = pct + '%';
  document.getElementById('qzCtrl').style.display = '';

  const optLetters = ['A','B','C','D'];
  document.getElementById('qzQCard').innerHTML = `
    <div class="q-num" id="qzQNum">Question ${state.quizIndex + 1} of ${total}</div>
    <div class="q-text" id="qzQText">${q.q}</div>
    <div class="opts" id="qzOpts">${q.o.map((opt, i) =>
      `<button class="opt-btn" onclick="selectAnswer(${i})">
        <span class="opt-ltr">${optLetters[i]}</span>
        <span>${opt}</span>
      </button>`).join('')}
    </div>
    <div class="exp" id="qzExp"></div>`;

  document.getElementById('qzNextBtn').style.display = 'none';
}

function selectAnswer(idx) {
  if (state.quizAnswers[state.quizIndex] !== undefined) return;
  const ch = CHAPTERS[state.quizChapter];
  const q = ch.quiz[state.quizIndex];
  state.quizAnswers[state.quizIndex] = idx;

  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.a) b.classList.add('corr');
    else if (i === idx && idx !== q.a) b.classList.add('wrong');
  });

  const exp = document.getElementById('qzExp');
  if (exp) { exp.textContent = q.e; exp.classList.add('show'); }

  const nextBtn = document.getElementById('qzNextBtn');
  nextBtn.style.display = '';
  const isLast = state.quizIndex === ch.quiz.length - 1;
  nextBtn.textContent = isLast ? 'See Results' : 'Next Question';
  nextBtn.onclick = isLast ? showQuizResult : nextQuestion;
}

function nextQuestion() {
  state.quizIndex++;
  renderQuestion();
  document.querySelector('.main-content').scrollTop = 0;
}

function showQuizResult() {
  const ch = CHAPTERS[state.quizChapter];
  const correct = state.quizAnswers.filter((a, i) => a === ch.quiz[i].a).length;
  const total = ch.quiz.length;
  const pct = Math.round((correct / total) * 100);

  // Save score
  const p = loadProgress();
  p.scores[state.quizChapter] = pct;
  if (pct >= 60 && !p.completed.includes(state.quizChapter)) {
    p.completed.push(state.quizChapter);
  }
  saveProgress(p);
  renderSidebar();
  renderDashboard();

  const msg = pct >= 80 ? '🎉 Excellent!' : pct >= 60 ? '👍 Good Job!' : '📚 Keep Studying';
  const sub = pct >= 80 ? 'Outstanding knowledge of this system.' : pct >= 60 ? 'You passed — review the content to improve.' : 'Review the chapter content and try again.';

  document.getElementById('qzProgFill').style.width = '100%';
  document.getElementById('qzQCard').innerHTML = `
    <div class="qz-result">
      <div class="score-num">${correct}/${total}</div>
      <div style="font-size:14px;color:var(--txt2);margin:6px 0 16px">${pct}% Correct</div>
      <div class="result-msg">${msg}</div>
      <div class="result-sub">${sub}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="qz-btn qz-pri" onclick="openChapter(${state.quizChapter})">Back to Chapter</button>
        <button class="qz-btn qz-sec" onclick="startQuiz(${state.quizChapter})">Retry Quiz</button>
        <button class="qz-btn qz-sec" onclick="renderDashboard();showView('dashboard')">Dashboard</button>
      </div>
    </div>`;
  document.getElementById('qzCtrl').style.display = 'none';
  document.querySelector('.main-content').scrollTop = 0;
}

// ── SIDEBAR COLLAPSE (desktop) ──
function toggleSidebarCollapse() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  const sb = document.getElementById('sidebar');
  const btn = document.getElementById('sbCollapseBtn');
  sb.classList.toggle('collapsed', state.sidebarCollapsed);
  btn.textContent = state.sidebarCollapsed ? '›' : '‹';
  btn.title = state.sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
}

// ── QUESTION BANK ──
let _bankSelInit = false;
function initBankChapterSelect() {
  const sel = document.getElementById('bankChSel');
  if (!_bankSelInit) {
    sel.innerHTML = '<option value="all">All Chapters (20)</option>' +
      CHAPTERS.map(ch => `<option value="${ch.id}">Ch ${ch.num} — ${ch.title}</option>`).join('');
    sel.onchange = () => { state.bankChapter = sel.value; renderBank(); };
    _bankSelInit = true;
  }
  sel.value = state.bankChapter;
}

function setBankDiff(d) {
  state.bankDiff = d;
  document.getElementById('diffMed').classList.toggle('active', d === 'm');
  document.getElementById('diffHard').classList.toggle('active', d === 'h');
  renderBank();
}

function renderBank() {
  // guard — QBANK may not be loaded yet
  if (typeof QBANK === 'undefined') return;

  const chFilter = state.bankChapter;
  const diff = state.bankDiff;
  let questions = []; // { chId, idx, q }

  const addCh = (ch) => {
    if (!QBANK[ch.id]) return;
    const qs = QBANK[ch.id][diff] || [];
    qs.forEach((q, i) => questions.push({ chId: ch.id, chNum: ch.num, chTitle: ch.title, idx: i, q }));
  };

  if (chFilter === 'all') CHAPTERS.forEach(addCh);
  else addCh(CHAPTERS[parseInt(chFilter)]);

  document.getElementById('bankCount').textContent = `${questions.length} questions`;

  const letters = ['A','B','C','D'];
  const diffLabel = diff === 'm' ? '<span class="qb-badge badge-med">ปานกลาง</span>' : '<span class="qb-badge badge-hard">ยาก</span>';

  document.getElementById('qBankList').innerHTML = questions.map((item, i) => {
    const q = item.q;
    return `<div class="qb-card" id="qbc${i}">
      <div class="qb-header" onclick="toggleQB(${i})">
        <div class="qb-num">${i+1}.</div>
        <div class="qb-q">${q.q}</div>
        ${diffLabel}
        <div class="qb-toggle">⌄</div>
      </div>
      <div class="qb-body">
        <div style="font-size:10px;color:var(--txt3);margin-bottom:8px">Ch ${item.chNum} — ${item.chTitle} · ${q.ref||''}</div>
        <div class="qb-opts">${q.o.map((opt,j)=>`
          <div class="qb-opt${j===q.a?' correct':''}">
            <div class="qb-opt-ltr">${letters[j]}</div>
            <span>${opt}</span>
            ${j===q.a?'<span style="margin-left:auto;font-size:10px;color:var(--ok)">✓ Correct</span>':''}
          </div>`).join('')}
        </div>
        <div class="qb-exp">${q.e||''}</div>
        ${q.ref?`<div class="qb-ref">📎 ${q.ref}</div>`:''}
      </div>
    </div>`;
  }).join('') || '<div style="text-align:center;color:var(--txt3);padding:40px">No questions found.</div>';
}

function toggleQB(i) {
  const card = document.getElementById('qbc'+i);
  if (card) card.classList.toggle('open');
}

// ── EXAM ──
function openExam() {
  state.examDone = false;
  state.examAnswers = [];
  state.examIndex = 0;
  state.examQuestions = [];
  showView('exam');
  renderExamSetup();
  document.querySelector('.main-content').scrollTop = 0;
}

function renderExamSetup() {
  document.getElementById('examContent').innerHTML = `
    <div class="exam-setup">
      <div class="exam-info-grid">
        <div class="exam-info-box"><div class="exam-info-val">100</div><div class="exam-info-lbl">Total Questions</div></div>
        <div class="exam-info-box"><div class="exam-info-val">20</div><div class="exam-info-lbl">Chapters Covered</div></div>
        <div class="exam-info-box"><div class="exam-info-val">60%</div><div class="exam-info-lbl">Pass Score</div></div>
        <div class="exam-info-box"><div class="exam-info-val">MCQ</div><div class="exam-info-lbl">4 Options Each</div></div>
      </div>
      <p style="color:var(--txt2);font-size:13px;text-align:center;max-width:440px;line-height:1.7">
        สุ่ม 100 ข้อจากคลังข้อสอบทั้ง 20 บท · ตอบครบแล้วกด <strong style="color:#a78bfa">ส่งคำตอบ</strong><br>
        สามารถแก้ไขคำตอบได้อิสระก่อนส่ง · เฉลยจะแสดงพร้อมกันทันที
      </p>
      <button class="exam-start-btn" onclick="startExam()">🚀 เริ่มทำข้อสอบ</button>
    </div>`;
}

function startExam() {
  if (typeof QBANK === 'undefined') { alert('Question bank not loaded.'); return; }
  let pool = [];
  CHAPTERS.forEach(ch => {
    if (!QBANK[ch.id]) return;
    const m = (QBANK[ch.id].m || []).map(q => ({...q, _ch: ch}));
    const h = (QBANK[ch.id].h || []).map(q => ({...q, _ch: ch}));
    pool = pool.concat(m, h);
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  state.examQuestions = pool.slice(0, 100);
  state.examAnswers = new Array(state.examQuestions.length).fill(undefined);
  state.examDone = false;
  renderAllExamQuestions();
}

function renderAllExamQuestions() {
  const qs = state.examQuestions;
  const total = qs.length;
  const L = ['A','B','C','D'];

  const cards = qs.map((q, i) => `
    <div class="q-card exam-q-item" id="eq-${i}">
      <div class="exam-q-header">
        <span class="exam-q-counter">Q${i+1} / ${total}</span>
        <span class="exam-ch-tag">Ch ${q._ch.num} — ${q._ch.title}</span>
      </div>
      <div class="q-text">${q.q}</div>
      <div class="opts" id="eq-opts-${i}">${q.o.map((opt,j)=>`
        <button class="opt-btn" id="eq-opt-${i}-${j}" onclick="selectExamOpt(${i},${j})">
          <span class="opt-ltr">${L[j]}</span><span>${opt}</span>
        </button>`).join('')}
      </div>
      <div class="exp" id="eq-exp-${i}"></div>
    </div>`).join('');

  document.getElementById('examContent').innerHTML = `
    <div class="exam-topbar">
      <button class="exam-export-btn" onclick="exportExamPDF()">📄 Export PDF</button>
    </div>
    <div id="examResultBanner"></div>
    <div class="exam-prog-area">
      <div class="exam-prog-bar"><div class="exam-prog-fill" id="examProgFill" style="width:0%"></div></div>
      <div class="exam-answered-status">
        <span id="examAnsweredTxt"><strong>0</strong> / ${total} ตอบแล้ว</span>
        <span id="examRemainTxt" style="color:var(--warn)">${total} ข้อที่ยังไม่ได้ตอบ</span>
      </div>
    </div>
    <div id="examWarnBanner" class="exam-warn" style="display:none">
      <span class="exam-warn-icon">⚠️</span>
      <span id="examWarnTxt"></span>
    </div>
    <div id="examQList">${cards}</div>
    <div class="exam-bottom-bar">
      <button class="exam-submit-btn" id="examSubmitBtn" onclick="submitExam()">
        ✅ ส่งคำตอบ &nbsp;<span id="examSubmitCount">(0/${total})</span>
      </button>
    </div>`;
  document.querySelector('.main-content').scrollTop = 0;
}

function selectExamOpt(qIdx, optIdx) {
  if (state.examDone) return;
  const wasNew = state.examAnswers[qIdx] === undefined;
  state.examAnswers[qIdx] = optIdx;

  // Update button highlight
  state.examQuestions[qIdx].o.forEach((_, j) => {
    const btn = document.getElementById(`eq-opt-${qIdx}-${j}`);
    if (btn) btn.classList.toggle('sel', j === optIdx);
  });

  // Mark card as answered + remove warning
  const card = document.getElementById(`eq-${qIdx}`);
  if (card) { card.classList.add('eq-answered'); card.classList.remove('unanswered-warn'); }

  updateExamProgress();
}

function updateExamProgress() {
  const answered = state.examAnswers.filter(a => a !== undefined).length;
  const total = state.examQuestions.length;
  const remain = total - answered;

  const fill = document.getElementById('examProgFill');
  const txt = document.getElementById('examAnsweredTxt');
  const rem = document.getElementById('examRemainTxt');
  const cnt = document.getElementById('examSubmitCount');

  if (fill) fill.style.width = (answered / total * 100) + '%';
  if (txt)  txt.innerHTML = `<strong>${answered}</strong> / ${total} ตอบแล้ว`;
  if (rem)  { rem.textContent = remain > 0 ? `${remain} ข้อที่ยังไม่ได้ตอบ` : '✓ ครบทุกข้อ'; rem.style.color = remain > 0 ? 'var(--warn)' : 'var(--ok)'; }
  if (cnt)  cnt.textContent = `(${answered}/${total})`;
}

function submitExam() {
  const qs   = state.examQuestions;
  const ans  = state.examAnswers;
  const unanswered = ans.reduce((a, v, i) => { if (v === undefined) a.push(i); return a; }, []);

  if (unanswered.length > 0) {
    // Show warning & highlight
    const preview = unanswered.slice(0, 25).map(i => `Q${i+1}`).join(', ');
    const more    = unanswered.length > 25 ? ` … และอีก ${unanswered.length - 25} ข้อ` : '';
    const warn    = document.getElementById('examWarnBanner');
    const warnTxt = document.getElementById('examWarnTxt');
    if (warnTxt) warnTxt.innerHTML = `ยังตอบไม่ครบ — เหลือ <strong>${unanswered.length} ข้อ</strong>: ${preview}${more}`;
    if (warn)    warn.style.display = 'flex';

    unanswered.forEach(i => {
      const card = document.getElementById(`eq-${i}`);
      if (card) { card.classList.add('unanswered-warn'); card.classList.remove('eq-answered'); }
    });
    const firstCard = document.getElementById(`eq-${unanswered[0]}`);
    if (firstCard) firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // ── All answered — grade ──
  const warn = document.getElementById('examWarnBanner');
  if (warn) warn.style.display = 'none';
  state.examDone = true;

  const L = ['A','B','C','D'];
  let correct = 0;

  qs.forEach((q, i) => {
    const userAns = ans[i];
    const isOk   = userAns === q.a;
    if (isOk) correct++;

    q.o.forEach((_, j) => {
      const btn = document.getElementById(`eq-opt-${i}-${j}`);
      if (!btn) return;
      btn.disabled = true;
      btn.classList.remove('sel');
      if (j === q.a)                   btn.classList.add('corr');
      else if (j === userAns && !isOk) btn.classList.add('wrong');
    });

    const exp = document.getElementById(`eq-exp-${i}`);
    if (exp && q.e) {
      exp.innerHTML = `<strong style="color:var(--ok)">เฉลย:</strong> ${q.e}${q.ref ? ` <em style="color:var(--txt3);font-size:11px">· ${q.ref}</em>` : ''}`;
      exp.classList.add('show');
    }

    const card = document.getElementById(`eq-${i}`);
    if (card) card.classList.add(isOk ? 'eq-correct' : 'eq-wrong');
  });

  const total = qs.length;
  const pct   = Math.round((correct / total) * 100);
  const pass  = pct >= 60;

  // Result banner
  const banner = document.getElementById('examResultBanner');
  if (banner) banner.innerHTML = `
    <div class="exam-result-banner ${pass ? 'pass' : 'fail'}">
      <div class="erb-score">${pct}%</div>
      <div class="erb-info">
        <div class="erb-msg">${pass ? '🎉 ผ่านการทดสอบ!' : '📚 ยังไม่ผ่าน'}</div>
        <div class="erb-sub">${pass ? 'คะแนนผ่านเกณฑ์ 60%' : 'คะแนนต่ำกว่าเกณฑ์ 60% — ทบทวนเพิ่มเติม'}</div>
        <div class="erb-stats">
          <div class="erb-stat"><div class="erb-stat-val" style="color:var(--ok)">${correct}</div><div class="erb-stat-lbl">ถูก</div></div>
          <div class="erb-stat"><div class="erb-stat-val" style="color:var(--err)">${total-correct}</div><div class="erb-stat-lbl">ผิด</div></div>
          <div class="erb-stat"><div class="erb-stat-val" style="color:${pass?'var(--ok)':'var(--err)'}">${pass?'PASS':'FAIL'}</div><div class="erb-stat-lbl">ผล</div></div>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button class="exam-export-btn" onclick="exportExamPDF()">📄 Export PDF</button>
        <button class="exam-start-btn" style="font-size:13px;padding:10px 22px" onclick="startExam()">🔄 ทำใหม่</button>
        <button class="qz-btn qz-sec" style="padding:10px 16px" onclick="renderDashboard();showView('dashboard')">🏠 หน้าหลัก</button>
      </div>
    </div>`;

  // Disable submit button
  const sb = document.getElementById('examSubmitBtn');
  if (sb) { sb.textContent = '✅ ส่งแล้ว'; sb.disabled = true; }

  // Update progress display
  updateExamProgress();
  document.querySelector('.main-content').scrollTop = 0;
}

async function exportExamPDF() {
  if (!state.examQuestions || state.examQuestions.length === 0) {
    alert('กรุณาเริ่มทำข้อสอบก่อน Export PDF'); return;
  }
  if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    alert('กำลังโหลด Library กรุณารอสักครู่แล้วลองอีกครั้ง'); return;
  }

  const allBtns = document.querySelectorAll('.exam-export-btn');
  allBtns.forEach(b => { b.disabled = true; b.innerHTML = '⏳ กำลังสร้าง...'; });

  const qs   = state.examQuestions;
  const ans  = state.examAnswers;
  const L    = ['A','B','C','D'];
  const done = state.examDone;
  const date = new Date().toLocaleDateString('th-TH', {year:'numeric',month:'long',day:'numeric'});
  const correct = done ? ans.filter((a,i) => a !== undefined && a === qs[i].a).length : 0;
  const pct     = done ? Math.round(correct / qs.length * 100) : 0;

  // ── Build 100 question cards ──
  const qCards = qs.map((q, i) => {
    const uIdx  = ans[i];
    const isOk  = done && uIdx === q.a;
    const isBad = done && uIdx !== undefined && uIdx !== q.a;
    const border = done ? (isOk ? '#2e7d32' : '#c62828') : '#cccccc';
    const bg     = done ? (isOk ? '#f1faf3' : '#fff5f5') : '#ffffff';

    const opts = q.o.map((opt, k) => {
      let s = 'display:flex;gap:6px;align-items:flex-start;padding:3px 6px;border-radius:3px;font-size:11px;margin-bottom:2px;';
      if (done && k === q.a)                    s += 'background:#d4edda;';
      else if (done && k === uIdx && k !== q.a) s += 'background:#f8d7da;text-decoration:line-through;';
      const mark = done ? (k === q.a ? ' <b style="color:#155724">✓</b>' : (k === uIdx ? ' <b style="color:#721c24">✗</b>' : '')) : '';
      return `<div style="${s}"><span style="min-width:16px;font-weight:700;color:#1a237e;flex-shrink:0">${L[k]}.</span><span>${opt}${mark}</span></div>`;
    }).join('');

    const expHtml = (done && q.e)
      ? `<div style="margin-top:5px;padding:4px 8px;background:#e8f4fd;border-left:3px solid #1565c0;font-size:10px;color:#333;line-height:1.4;border-radius:2px">💡 ${q.e}${q.ref ? ` <i style="color:#777"> · ${q.ref}</i>` : ''}</div>`
      : '';

    const label = done ? (isOk ? ' <b style="color:#155724">✓ ถูก</b>' : ' <b style="color:#721c24">✗ ผิด</b>') : '';

    return `<div style="border:1px solid ${border};border-left:4px solid ${border};border-radius:4px;padding:9px 11px;margin-bottom:8px;background:${bg};">
      <div style="font-size:9px;color:#666;margin-bottom:2px">Q${i+1} · Ch ${q._ch.num} — ${q._ch.title}${label}</div>
      <div style="font-size:12px;font-weight:600;color:#111;margin-bottom:6px;line-height:1.4">${q.q}</div>
      ${opts}${expHtml}
    </div>`;
  }).join('');

  // ── Build answer key (flex wrap — avoids CSS grid issues) ──
  const keyGrid = qs.map((q, i) => {
    const uIdx  = ans[i];
    const isOk  = done && uIdx === q.a;
    const isBad = done && uIdx !== undefined && uIdx !== q.a;
    const bg     = isOk ? '#d4edda' : isBad ? '#f8d7da' : '#f8f9fa';
    const border = isOk ? '#2e7d32' : isBad ? '#c62828' : '#ddd';
    return `<div style="border:1px solid ${border};border-radius:3px;padding:3px 2px;text-align:center;background:${bg};width:60px;box-sizing:border-box;flex-shrink:0;">
      <div style="font-size:8px;color:#888;">Q${i+1}</div>
      <div style="font-size:11px;font-weight:700;color:#1a237e;">${L[q.a]}</div>
      ${done && uIdx !== undefined ? `<div style="font-size:8px;color:${isOk?'#155724':'#721c24'};font-weight:700;">${L[uIdx]}</div>` : '<div style="font-size:8px;color:#ccc;">—</div>'}
    </div>`;
  }).join('');

  // ── Score badge ──
  const scoreBadge = done
    ? `<span style="display:inline-block;margin-left:10px;padding:3px 14px;border-radius:20px;background:${pct>=60?'#d4edda':'#f8d7da'};border:1px solid ${pct>=60?'#2e7d32':'#c62828'};font-size:12px;font-weight:700;color:${pct>=60?'#155724':'#721c24'};">${correct}/${qs.length} (${pct}%) — ${pct>=60?'PASS ✓':'FAIL ✗'}</span>`
    : '';

  // ── Assemble PDF element (all inline styles — no external CSS) ──
  const el = document.createElement('div');
  el.innerHTML =
    `<div style="text-align:center;padding-bottom:10px;margin-bottom:12px;border-bottom:2px solid #1a237e;">
       <div style="font-size:7px;font-weight:700;color:#1a237e;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px;">Airbus Helicopters Deutschland GmbH · For Instruction Only</div>
       <div style="font-size:17px;font-weight:900;color:#1a237e;margin:0 0 2px;">H135 Type Training — แบบทดสอบ 100 ข้อ</div>
       <div style="font-size:10px;color:#555;margin:0;">EC135 P3H/T3H · Pilot Type Course · ${date}</div>
       <div style="margin-top:6px;">${scoreBadge}</div>
     </div>
     <div style="display:flex;justify-content:space-between;font-size:9px;color:#777;margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid #eee;">
       <span>ทั้งหมด ${qs.length} ข้อ · 20 บท · Mixed Level</span>
       <span>Name: _________________________  Score: _____ / ${qs.length}</span>
     </div>
     ${qCards}
     <div style="margin-top:16px;padding-top:12px;border-top:2px solid #1a237e;">
       <div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:3px;">Answer Key — ตารางเฉลย</div>
       <div style="font-size:9px;color:#555;margin-bottom:8px;">${done ? 'สีเขียว=ถูก · สีแดง=ผิด · บน=เฉลย · ล่าง=คำตอบของคุณ' : 'แสดงเฉพาะเฉลย (ยังไม่ได้ส่งคำตอบ)'}</div>
       <div style="display:flex;flex-wrap:wrap;gap:3px;">${keyGrid}</div>
     </div>`;

  // ── Loading overlay ──
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(7,13,26,0.95);z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;';
  overlay.innerHTML = `
    <div style="font-size:38px;">📄</div>
    <div style="color:#a78bfa;font-size:15px;font-weight:700;">กำลังสร้าง PDF…</div>
    <div style="color:#94a3b8;font-size:12px;">ทั้ง 100 ข้อ · กรุณารอสักครู่</div>
    <div style="color:#64748b;font-size:11px;">อาจใช้เวลา 30–60 วินาที</div>`;
  document.body.appendChild(overlay);

  // ── Append el at document origin so html2canvas can find it ──
  // position:absolute top:0 left:0 = document coordinate (0,0), behind overlay
  el.style.cssText = 'position:absolute;top:0;left:0;width:800px;background:#ffffff;color:#000000;font-family:Arial,Helvetica,sans-serif;padding:24px;box-sizing:border-box;z-index:1;';
  document.body.appendChild(el);

  // Give browser time to fully lay out the element
  await new Promise(r => setTimeout(r, 600));

  try {
    const elW = el.offsetWidth  || 800;
    const elH = el.scrollHeight || el.offsetHeight;

    if (elH === 0) throw new Error('Element height is 0 — layout failed');

    // ── Capture with html2canvas ──
    const canvas = await html2canvas(el, {
      scale:           1.5,
      useCORS:         true,
      backgroundColor: '#ffffff',
      logging:         false,
      scrollX:         0,
      scrollY:         0,
      x:               0,
      y:               0,
      width:           elW,
      height:          elH,
      windowWidth:     elW,
      windowHeight:    elH
    });

    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      throw new Error(`Canvas ว่างเปล่า (${canvas?.width ?? 0}×${canvas?.height ?? 0})`);
    }

    // ── Slice canvas into A4 pages ──
    const { jsPDF } = window.jspdf;
    const pdf    = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
    const margin = 8;                                             // mm
    const cW     = pdf.internal.pageSize.getWidth()  - margin*2; // printable width  mm
    const cH     = pdf.internal.pageSize.getHeight() - margin*2; // printable height mm
    const pxPerMm  = canvas.width / cW;   // canvas px per mm
    const pageHpx  = cH * pxPerMm;        // canvas px per PDF page

    let yPx  = 0;
    let page = 0;

    while (yPx < canvas.height) {
      if (page > 0) pdf.addPage();

      const sliceHpx = Math.min(pageHpx, canvas.height - yPx);
      const sc = document.createElement('canvas');
      sc.width  = canvas.width;
      sc.height = Math.ceil(sliceHpx);
      const ctx = sc.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, sc.width, sc.height);
      ctx.drawImage(canvas, 0, yPx, canvas.width, sliceHpx, 0, 0, canvas.width, sliceHpx);

      pdf.addImage(sc.toDataURL('image/jpeg', 0.93), 'JPEG', margin, margin, cW, sliceHpx / pxPerMm);
      yPx += sliceHpx;
      page++;
    }

    pdf.save(`H135_Exam_${new Date().toISOString().slice(0, 10)}.pdf`);

  } catch (err) {
    console.error('PDF export error:', err);
    alert('Export PDF ไม่สำเร็จ: ' + err.message);
  } finally {
    if (document.body.contains(el))      document.body.removeChild(el);
    if (document.body.contains(overlay)) document.body.removeChild(overlay);
    allBtns.forEach(b => { b.disabled = false; b.innerHTML = '📄 Export PDF'; });
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initLogin();

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', toggleSidebar);
  document.getElementById('sbOverlay').addEventListener('click', closeSidebar);

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('app').classList.remove('visible');
    document.getElementById('loginPage').style.display = '';
    document.getElementById('pwInput').value = '';
    state.currentChapter = null;
    closeSidebar();
  });

  // Logo → dashboard
  document.getElementById('appLogo').addEventListener('click', () => {
    renderDashboard();
    showView('dashboard');
  });

  // Sidebar collapse (desktop)
  document.getElementById('sbCollapseBtn').addEventListener('click', toggleSidebarCollapse);

  // Sidebar nav: Bank
  document.getElementById('sbBankBtn').addEventListener('click', () => {
    initBankChapterSelect();
    renderBank();
    showView('bank');
    setSbNavActive('bank');
  });

  // Sidebar nav: Exam
  document.getElementById('sbExamBtn').addEventListener('click', () => {
    openExam();
    setSbNavActive('exam');
  });

  // Header nav buttons
  document.getElementById('bankNavBtn').addEventListener('click', () => {
    initBankChapterSelect();
    renderBank();
    showView('bank');
    setSbNavActive('bank');
  });
  document.getElementById('examNavBtn').addEventListener('click', () => {
    openExam();
    setSbNavActive('exam');
  });
});

function setSbNavActive(which) {
  const bankBtn = document.getElementById('sbBankBtn');
  const examBtn = document.getElementById('sbExamBtn');
  if (bankBtn) bankBtn.classList.toggle('active', which === 'bank');
  if (examBtn) examBtn.classList.toggle('active', which === 'exam');
  closeSidebar();
}
