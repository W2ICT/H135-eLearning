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
  sidebarOpen: false
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
});
