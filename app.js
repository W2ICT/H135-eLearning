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
function initBankChapterSelect() {
  const sel = document.getElementById('bankChSel');
  sel.innerHTML = '<option value="all">All Chapters (20)</option>' +
    CHAPTERS.map(ch => `<option value="${ch.id}">Ch ${ch.num} — ${ch.title}</option>`).join('');
  sel.value = state.bankChapter;
  sel.addEventListener('change', () => { state.bankChapter = sel.value; renderBank(); });
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
      <p style="color:var(--txt2);font-size:13px;text-align:center;max-width:420px">
        สุ่มข้อสอบจากคลังข้อสอบทั้ง 20 บท (รวม Mixed ระดับ ปานกลาง + ยาก)<br>
        เมื่อทำเสร็จสามารถ Export ข้อสอบและเฉลยเป็น PDF ได้
      </p>
      <button class="exam-start-btn" onclick="startExam()">🚀 เริ่มทำข้อสอบ</button>
    </div>`;
}

function startExam() {
  if (typeof QBANK === 'undefined') { alert('Question bank not loaded.'); return; }
  // collect all questions, shuffle, take 100
  let pool = [];
  CHAPTERS.forEach(ch => {
    const m = (QBANK[ch.id].m || []).map(q => ({...q, _ch: ch}));
    const h = (QBANK[ch.id].h || []).map(q => ({...q, _ch: ch}));
    pool = pool.concat(m, h);
  });
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  state.examQuestions = pool.slice(0, 100);
  state.examIndex = 0;
  state.examAnswers = new Array(100).fill(undefined);
  state.examDone = false;
  renderExamQuestion();
}

function renderExamQuestion() {
  const total = state.examQuestions.length;
  const i = state.examIndex;
  const q = state.examQuestions[i];
  const pct = (i / total) * 100;
  const letters = ['A','B','C','D'];

  document.getElementById('examContent').innerHTML = `
    <div class="exam-prog-bar"><div class="exam-prog-fill" style="width:${pct}%"></div></div>
    <div class="exam-q-header">
      <span class="exam-q-counter">Question ${i+1} / ${total}</span>
      <span class="exam-ch-tag">Ch ${q._ch.num} — ${q._ch.title}</span>
    </div>
    <div class="q-card">
      <div class="q-num">Q${i+1}</div>
      <div class="q-text">${q.q}</div>
      <div class="opts" id="examOpts">${q.o.map((opt,j)=>`
        <button class="opt-btn" onclick="selectExamAnswer(${j})">
          <span class="opt-ltr">${letters[j]}</span><span>${opt}</span>
        </button>`).join('')}
      </div>
      <div class="exp" id="examExp"></div>
    </div>
    <div class="qz-ctrl" id="examCtrl">
      <button class="qz-btn qz-sec" onclick="openExam()">✕ ยกเลิก</button>
      <button class="qz-btn qz-pri" id="examNextBtn" style="display:none"></button>
    </div>`;
  document.querySelector('.main-content').scrollTop = 0;
}

function selectExamAnswer(idx) {
  const i = state.examIndex;
  if (state.examAnswers[i] !== undefined) return;
  state.examAnswers[i] = idx;
  const q = state.examQuestions[i];
  const letters = ['A','B','C','D'];

  document.querySelectorAll('#examOpts .opt-btn').forEach((b,j) => {
    b.disabled = true;
    if (j === q.a) b.classList.add('corr');
    else if (j === idx && idx !== q.a) b.classList.add('wrong');
  });

  const exp = document.getElementById('examExp');
  if (exp && q.e) { exp.textContent = q.e; exp.classList.add('show'); }

  const nextBtn = document.getElementById('examNextBtn');
  const isLast = i === state.examQuestions.length - 1;
  nextBtn.style.display = '';
  nextBtn.textContent = isLast ? '📊 ดูผลสอบ' : 'Next →';
  nextBtn.onclick = isLast ? showExamResult : () => { state.examIndex++; renderExamQuestion(); };
}

function showExamResult() {
  state.examDone = true;
  const qs = state.examQuestions;
  const ans = state.examAnswers;
  const correct = ans.filter((a,i) => a === qs[i].a).length;
  const total = qs.length;
  const pct = Math.round((correct / total) * 100);
  const pass = pct >= 60;
  const letters = ['A','B','C','D'];

  const reviewItems = qs.map((q,i) => {
    const isOk = ans[i] === q.a;
    return `<div class="er-q-item ${isOk?'er-correct':'er-wrong'}">
      <div class="er-q-num">Q${i+1} · Ch ${q._ch.num} ${q._ch.title}</div>
      <div class="er-q-text">${q.q}</div>
      <div class="er-q-ans">
        ${isOk
          ? `<span class="ok">✓ ${letters[q.a]}. ${q.o[q.a]}</span>`
          : `<span class="bad">✗ คุณตอบ: ${ans[i]!==undefined?letters[ans[i]]+'. '+q.o[ans[i]]:'ไม่ได้ตอบ'}</span>
             &nbsp;·&nbsp;<span class="ok">✓ ${letters[q.a]}. ${q.o[q.a]}</span>`}
      </div>
    </div>`;
  }).join('');

  document.getElementById('examContent').innerHTML = `
    <div class="exam-result">
      <div class="exam-score-big">${pct}%</div>
      <div style="font-size:15px;color:var(--txt2);margin:6px 0">${correct} / ${total} Correct</div>
      <div class="result-msg">${pass?'🎉 ผ่านการทดสอบ!':'📚 ยังไม่ผ่าน — ทบทวนเพิ่มเติม'}</div>
      <div style="color:var(--txt2);font-size:13px;margin-bottom:20px">${pass?'คะแนนผ่านเกณฑ์ 60%':'คะแนนต่ำกว่าเกณฑ์ 60%'}</div>
      <div class="exam-result-bars">
        <div class="er-box"><div class="er-val" style="color:var(--ok)">${correct}</div><div class="er-lbl">ถูก</div></div>
        <div class="er-box"><div class="er-val" style="color:var(--err)">${total-correct}</div><div class="er-lbl">ผิด</div></div>
        <div class="er-box"><div class="er-val" style="color:#a78bfa">${pct}%</div><div class="er-lbl">คะแนน</div></div>
        <div class="er-box"><div class="er-val" style="color:${pass?'var(--ok)':'var(--err)'}">${pass?'PASS':'FAIL'}</div><div class="er-lbl">ผล</div></div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:22px">
        <button class="exam-start-btn" style="font-size:13px;padding:10px 20px" onclick="startExam()">🔄 ทำใหม่</button>
        <button class="exam-export-btn" onclick="exportExamPDF()">📄 Export PDF</button>
        <button class="qz-btn qz-sec" style="padding:10px 18px" onclick="renderDashboard();showView('dashboard')">🏠 หน้าหลัก</button>
      </div>
    </div>
    <div class="exam-review">
      <div class="sec-title" style="margin-bottom:14px">📋 ตรวจสอบคำตอบทั้งหมด</div>
      ${reviewItems}
    </div>`;
  document.querySelector('.main-content').scrollTop = 0;
}

function exportExamPDF() {
  const qs = state.examQuestions;
  const ans = state.examAnswers;
  const letters = ['A','B','C','D'];
  const date = new Date().toLocaleDateString('th-TH', {year:'numeric',month:'long',day:'numeric'});

  // Build question pages (10 per page)
  let qPages = '';
  for (let p = 0; p < Math.ceil(qs.length / 10); p++) {
    const chunk = qs.slice(p*10, p*10+10);
    qPages += `<div class="print-page">
      <div class="print-header">
        <h1>H135 Type Training — แบบทดสอบ 100 ข้อ</h1>
        <p>EC135 P3H/T3H · Pilot Type Course · ${date}</p>
      </div>
      <div class="print-meta"><span>หน้า ${p+1}</span><span>Name: ___________________________________  Score: _______ / 100</span></div>
      ${chunk.map((q,j)=>{
        const n = p*10+j+1;
        return `<div class="print-q">
          <div class="print-q-num">Q${n}. [Ch ${q._ch.num}]</div>
          <div class="print-q-text">${q.q}</div>
          ${q.o.map((opt,k)=>`<div class="print-opt"><span class="print-opt-ltr">${letters[k]}.</span> ${opt}</div>`).join('')}
        </div>`;
      }).join('')}
    </div>`;
  }

  // Build answer key
  const keyRows = qs.map((q,i) =>
    `<div class="print-key-item"><span>${letters[q.a]}</span>Q${i+1}</div>`
  ).join('');

  const answerPage = `<div class="print-page">
    <div class="print-header">
      <h1>H135 Type Training — เฉลยข้อสอบ</h1>
      <p>EC135 P3H/T3H · Pilot Type Course · ${date}</p>
    </div>
    <div class="print-key-section">
      <h3>Answer Key — ตารางเฉลย</h3>
      <div class="print-key-grid">${keyRows}</div>
    </div>
    <div style="margin-top:16px">
      <h3 style="font-size:13px;font-weight:700;color:#1d4ed8;margin-bottom:10px">คำเฉลยพร้อมคำอธิบาย</h3>
      ${qs.map((q,i)=>`
        <div class="print-q">
          <div class="print-q-num">Q${i+1}. ${q.q}</div>
          ${q.o.map((opt,k)=>`<div class="print-opt${k===q.a?' answer':''}">
            <span class="print-opt-ltr">${letters[k]}.</span> ${opt}${k===q.a?' ✓':''}
          </div>`).join('')}
          ${q.e?`<div style="margin-left:14px;font-size:11px;color:#555;margin-top:3px">💡 ${q.e}</div>`:''}
        </div>`).join('')}
    </div>
  </div>`;

  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) { alert('Please allow pop-ups to export PDF'); return; }
  win.document.write(`<!DOCTYPE html><html><head>
    <meta charset="UTF-8"><title>H135 Exam</title>
    <link rel="stylesheet" href="${location.href.replace(/[^/]*$/, '')}style.css">
    <style>body{background:#fff!important;color:#000!important;font-family:'Segoe UI',sans-serif;padding:20px 30px}</style>
  </head><body>${qPages}${answerPage}</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 800);
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
