// ============================================================
// DEUTSCH TRAINER — LOGIKA APLIKACJI
// ============================================================

(function () {
  "use strict";

  // ---------- STAN ----------
  const STORAGE_KEY = "deutsch_trainer_state_v1";

  let state = {
    known: {},          // id -> true (poprawnie rozwiązane przynajmniej raz)
    correctCount: 0,
    wrongCount: 0,
    history: [],        // { date, type, score, total }
    mistakes: []        // tablica id błędnych zwrotów
  };

  let currentCategory = "all";
  let learnQueue = [];
  let learnIndex = 0;
  let learnAnswered = false;

  let flashQueue = [];
  let flashIndex = 0;

  let examQuestions = [];
  let examIndex = 0;
  let examCorrect = 0;
  let examWrong = 0;
  let examMistakesList = [];
  let examAnswered = false;
  const EXAM_LENGTH = 10;

  let mistakeQueue = [];
  let mistakeIndex = 0;
  let mistakeAnswered = false;

  // ---------- HELPERS ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function normalize(str) {
    return String(str)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.,!?;:„”"']/g, "")
      .trim();
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getPhrasesByCategory(cat) {
    if (cat === "all") return PHRASES.slice();
    return PHRASES.filter((p) => p.cat === cat);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          state = Object.assign(state, parsed);
          if (!state.known) state.known = {};
          if (!Array.isArray(state.mistakes)) state.mistakes = [];
          if (!Array.isArray(state.history)) state.history = [];
        }
      }
    } catch (e) { /* ignore */ }
  }

  function recordAnswer(isCorrect, phraseId) {
    if (isCorrect) {
      state.correctCount++;
      state.known[phraseId] = true;
      // usuń z błędów
      state.mistakes = state.mistakes.filter((id) => id !== phraseId);
    } else {
      state.wrongCount++;
      if (!state.mistakes.includes(phraseId)) {
        state.mistakes.push(phraseId);
      }
    }
    saveState();
    updateGlobalStats();
  }

  function addHistory(type, score, total) {
    const now = new Date();
    state.history.unshift({
      date: now.toISOString(),
      type,
      score,
      total
    });
    if (state.history.length > 50) state.history = state.history.slice(0, 50);
    saveState();
    renderStats();
  }

  function updateGlobalStats() {
    const total = state.correctCount + state.wrongCount;
    const acc = total > 0 ? Math.round((state.correctCount / total) * 100) : 0;
    const el = $("#topAccuracy");
    if (el) el.textContent = acc + "%";
  }

  // ---------- NAWIGACJA ----------
  const viewTitles = {
    learn: "Nauka",
    flashcards: "Fiszki",
    exam: "Egzamin",
    mistakes: "Powtórka błędów",
    stats: "Statystyki"
  };

  function switchView(view) {
    $$(".view").forEach((v) => v.classList.remove("active"));
    const target = $("#view-" + view);
    if (target) target.classList.add("active");

    $$(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    $$(".bn-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === view));

    const titleEl = $("#viewTitle");
    if (titleEl) titleEl.textContent = viewTitles[view] || "";

    // inicjalizuj widok
    if (view === "learn") initLearn();
    if (view === "flashcards") initFlashcards();
    if (view === "exam") initExamView();
    if (view === "mistakes") initMistakesView();
    if (view === "stats") renderStats();

    // scroll do góry
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- NAUKA ----------
  function buildLearnQueue() {
    let list = getPhrasesByCategory(currentCategory);
    learnQueue = shuffle(list);
    learnIndex = 0;
    learnAnswered = false;
  }

  function initLearn() {
    buildLearnQueue();
    if (learnQueue.length === 0) {
      $("#learnQuestion").textContent = "Brak zwrotów w tej kategorii.";
      $("#learnInput").disabled = true;
      return;
    }
    $("#learnInput").disabled = false;
    renderLearnQuestion();
  }

  function renderLearnQuestion() {
    const phrase = learnQueue[learnIndex];
    if (!phrase) return;

    learnAnswered = false;
    $("#learnQuestion").textContent = phrase.pl;
    const input = $("#learnInput");
    input.value = "";
    input.disabled = false;
    input.classList.remove("correct", "wrong");
    input.focus();

    const fb = $("#learnFeedback");
    fb.classList.remove("show", "ok", "bad");
    fb.innerHTML = "";

    const nextBtn = $("#learnNext");
    nextBtn.disabled = true;

    // progress
    const fill = $("#learnProgress");
    const meta = $("#learnProgressMeta");
    const total = learnQueue.length;
    const done = learnIndex;
    fill.style.width = total ? (done / total) * 100 + "%" : "0%";
    meta.textContent = done + " / " + total;
  }

  function checkLearn() {
    if (learnAnswered) return;
    const phrase = learnQueue[learnIndex];
    if (!phrase) return;

    const input = $("#learnInput");
    const val = input.value;
    if (!val.trim()) {
      input.focus();
      return;
    }

    learnAnswered = true;
    const isCorrect = normalize(val) === normalize(phrase.de);

    const fb = $("#learnFeedback");
    fb.classList.add("show");
    input.classList.add(isCorrect ? "correct" : "wrong");
    input.disabled = true;

    if (isCorrect) {
      fb.classList.add("ok");
      fb.innerHTML = "✔ Poprawnie!";
    } else {
      fb.classList.add("bad");
      fb.innerHTML =
        "✘ Błędna odpowiedź.<br><span class='answer-line'>Poprawna odpowiedź: <span class='correct-answer'>" +
        escapeHtml(phrase.de) +
        "</span></span>";
    }

    recordAnswer(isCorrect, phrase.id);

    $("#learnNext").disabled = false;
    scrollToActive();
  }

  function nextLearn() {
    if (!learnAnswered) return;
    learnIndex++;
    if (learnIndex >= learnQueue.length) {
      // koniec kolejki — od nowa
      const acc = state.correctCount + state.wrongCount > 0
        ? Math.round((state.correctCount / (state.correctCount + state.wrongCount)) * 100)
        : 0;
      addHistory("Nauka", acc, 100);
      buildLearnQueue();
    }
    renderLearnQuestion();
    scrollToActive();
  }

  // ---------- FISZKI ----------
  function initFlashcards() {
    flashQueue = shuffle(getPhrasesByCategory(currentCategory));
    flashIndex = 0;
    renderFlashcard();
  }

  function renderFlashcard() {
    const phrase = flashQueue[flashIndex];
    if (!phrase) return;

    const card = $("#flashcard");
    card.classList.remove("flipped");

    $("#fcFront").textContent = phrase.pl;
    $("#fcBack").textContent = phrase.de;
    $("#fcFlip").textContent = "Pokaż odpowiedź";
    $("#fcMeta").textContent = (flashIndex + 1) + " / " + flashQueue.length;
  }

  function flipFlashcard() {
    const card = $("#flashcard");
    card.classList.toggle("flipped");
    $("#fcFlip").textContent = card.classList.contains("flipped")
      ? "Pokaż polski"
      : "Pokaż odpowiedź";
  }

  function flashPrev() {
    if (flashIndex > 0) {
      flashIndex--;
      renderFlashcard();
    }
  }

  function flashNext() {
    if (flashIndex < flashQueue.length - 1) {
      flashIndex++;
      renderFlashcard();
    }
  }

  // ---------- EGZAMIN ----------
  function initExamView() {
    $("#examStartWrap").classList.remove("hidden");
    $("#examQuizWrap").classList.add("hidden");
    $("#examResultWrap").classList.add("hidden");

    const pool = getPhrasesByCategory(currentCategory);
    const n = Math.min(EXAM_LENGTH, pool.length);
    $("#examInfo").textContent =
      "Zostanie wylosowanych " + n + " pytań z kategorii: " +
      (currentCategory === "all" ? "wszystkie zwroty" : currentCategory);
  }

  function startExam() {
    const pool = getPhrasesByCategory(currentCategory);
    if (pool.length === 0) return;

    examQuestions = shuffle(pool).slice(0, Math.min(EXAM_LENGTH, pool.length));
    examIndex = 0;
    examCorrect = 0;
    examWrong = 0;
    examMistakesList = [];
    examAnswered = false;

    $("#examStartWrap").classList.add("hidden");
    $("#examResultWrap").classList.add("hidden");
    $("#examQuizWrap").classList.remove("hidden");

    renderExamQuestion();
  }

  function renderExamQuestion() {
    const phrase = examQuestions[examIndex];
    if (!phrase) return;

    examAnswered = false;
    $("#examIndex").textContent = examIndex + 1;
    $("#examTotal").textContent = examQuestions.length;
    $("#examQuestion").textContent = phrase.pl;

    const input = $("#examInput");
    input.value = "";
    input.disabled = false;
    input.classList.remove("correct", "wrong");

    const fb = $("#examFeedback");
    fb.classList.remove("show", "ok", "bad");
    fb.innerHTML = "";

    $("#examCheck").disabled = false;
    $("#examNext").disabled = true;

    const fill = $("#examProgress");
    fill.style.width = (examIndex / examQuestions.length) * 100 + "%";

    scrollToActive();
    input.focus();
  }

  function checkExam() {
    if (examAnswered) return;
    const phrase = examQuestions[examIndex];
    if (!phrase) return;

    const input = $("#examInput");
    if (!input.value.trim()) { input.focus(); return; }

    examAnswered = true;
    const isCorrect = normalize(input.value) === normalize(phrase.de);

    const fb = $("#examFeedback");
    fb.classList.add("show");
    input.classList.add(isCorrect ? "correct" : "wrong");
    input.disabled = true;

    if (isCorrect) {
      examCorrect++;
      fb.classList.add("ok");
      fb.innerHTML = "✔ Poprawnie!";
      recordAnswer(true, phrase.id);
    } else {
      examWrong++;
      examMistakesList.push({ phrase, userAnswer: input.value });
      fb.classList.add("bad");
      fb.innerHTML =
        "✘ Błędna odpowiedź.<br><span class='answer-line'>Poprawna odpowiedź: <span class='correct-answer'>" +
        escapeHtml(phrase.de) + "</span></span>";
      recordAnswer(false, phrase.id);
    }

    $("#examCheck").disabled = true;
    $("#examNext").disabled = false;
    scrollToActive();
  }

  function nextExam() {
    if (!examAnswered) return;
    examIndex++;
    if (examIndex >= examQuestions.length) {
      finishExam();
    } else {
      renderExamQuestion();
    }
  }

  function finishExam() {
    $("#examQuizWrap").classList.add("hidden");
    $("#examResultWrap").classList.remove("hidden");

    const total = examQuestions.length;
    const score = total > 0 ? Math.round((examCorrect / total) * 100) : 0;

    $("#examScore").textContent = score + "%";
    $("#examCorrect").textContent = examCorrect;
    $("#examWrong").textContent = examWrong;

    const list = $("#examMistakeList");
    list.innerHTML = "";
    if (examMistakesList.length === 0) {
      list.innerHTML = "<div class='empty'>Brak błędów — idealnie! 🎉</div>";
    } else {
      examMistakesList.forEach((m) => {
        const div = document.createElement("div");
        div.className = "mistake-item";
        div.innerHTML =
          "<div class='m-pl'>" + escapeHtml(m.phrase.pl) + "</div>" +
          "<span class='m-correct'>" + escapeHtml(m.phrase.de) + "</span>" +
          (m.userAnswer ? "<span class='m-wrong'>Twoja odpowiedź: " + escapeHtml(m.userAnswer) + "</span>" : "");
        list.appendChild(div);
      });
    }

    addHistory("Egzamin", score, 100);
    updateGlobalStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- POWTÓRKA BŁĘDÓW ----------
  function initMistakesView() {
    const mistakePhrases = PHRASES.filter((p) => state.mistakes.includes(p.id));

    if (mistakePhrases.length === 0) {
      $("#mistakesEmpty").classList.remove("hidden");
      $("#mistakesWrap").classList.add("hidden");
      return;
    }

    $("#mistakesEmpty").classList.add("hidden");
    $("#mistakesWrap").classList.remove("hidden");

    mistakeQueue = shuffle(mistakePhrases);
    mistakeIndex = 0;
    mistakeAnswered = false;
    renderMistakeQuestion();
  }

  function renderMistakeQuestion() {
    if (mistakeQueue.length === 0) {
      initMistakesView();
      return;
    }
    const phrase = mistakeQueue[mistakeIndex];
    if (!phrase) { initMistakesView(); return; }

    mistakeAnswered = false;
    $("#mistakeQuestion").textContent = phrase.pl;

    const input = $("#mistakeInput");
    input.value = "";
    input.disabled = false;
    input.classList.remove("correct", "wrong");

    const fb = $("#mistakeFeedback");
    fb.classList.remove("show", "ok", "bad");
    fb.innerHTML = "";

    $("#mistakeCheck").disabled = false;
    $("#mistakeNext").disabled = true;

    $("#mistakeMeta").textContent = (mistakeIndex + 1) + " / " + mistakeQueue.length;
    scrollToActive();
    input.focus();
  }

  function checkMistake() {
    if (mistakeAnswered) return;
    const phrase = mistakeQueue[mistakeIndex];
    if (!phrase) return;

    const input = $("#mistakeInput");
    if (!input.value.trim()) { input.focus(); return; }

    mistakeAnswered = true;
    const isCorrect = normalize(input.value) === normalize(phrase.de);

    const fb = $("#mistakeFeedback");
    fb.classList.add("show");
    input.classList.add(isCorrect ? "correct" : "wrong");
    input.disabled = true;

    if (isCorrect) {
      fb.classList.add("ok");
      fb.innerHTML = "✔ Poprawnie! Zwrot usunięty z listy błędów.";
      state.mistakes = state.mistakes.filter((id) => id !== phrase.id);
      state.known[phrase.id] = true;
      state.correctCount++;
      saveState();
      updateGlobalStats();
    } else {
      fb.classList.add("bad");
      fb.innerHTML =
        "✘ Błędna odpowiedź.<br><span class='answer-line'>Poprawna odpowiedź: <span class='correct-answer'>" +
        escapeHtml(phrase.de) + "</span></span>";
      state.wrongCount++;
      saveState();
      updateGlobalStats();
    }

    $("#mistakeCheck").disabled = true;
    $("#mistakeNext").disabled = false;
    scrollToActive();
  }

  function nextMistake() {
    if (!mistakeAnswered) return;
    // usuń aktualny z kolejki jeśli był poprawny
    const phrase = mistakeQueue[mistakeIndex];
    if (phrase && !state.mistakes.includes(phrase.id)) {
      mistakeQueue.splice(mistakeIndex, 1);
      if (mistakeIndex >= mistakeQueue.length) mistakeIndex = 0;
    } else {
      mistakeIndex++;
    }

    if (mistakeQueue.length === 0 || mistakeIndex >= mistakeQueue.length) {
      initMistakesView();
    } else {
      renderMistakeQuestion();
    }
  }

  // ---------- STATYSTYKI ----------
  function renderStats() {
    const knownCount = Object.keys(state.known).length;
    const totalAnswers = state.correctCount + state.wrongCount;
    const acc = totalAnswers > 0 ? Math.round((state.correctCount / totalAnswers) * 100) : 0;

    $("#statKnown").textContent = knownCount;
    $("#statCorrect").textContent = state.correctCount;
    $("#statAccuracy").textContent = acc + "%";
    $("#statTotal").textContent = totalAnswers;

    const pct = Math.round((knownCount / PHRASES.length) * 100);
    $("#statsProgress").style.width = pct + "%";
    $("#statsProgressMeta").textContent = knownCount + " / " + PHRASES.length + " zwrotów";

    const histList = $("#historyList");
    histList.innerHTML = "";
    if (state.history.length === 0) {
      histList.innerHTML = "<div class='history-empty'>Brak historii — zacznij naukę!</div>";
    } else {
      state.history.forEach((h) => {
        const div = document.createElement("div");
        div.className = "history-item";
        const d = new Date(h.date);
        const dateStr = d.toLocaleDateString("pl-PL") + " " + d.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
        div.innerHTML =
          "<span class='h-type'>" + escapeHtml(h.type) + " · " + dateStr + "</span>" +
          "<span class='h-score " + (h.score < 50 ? "bad" : "") + "'>" + h.score + "%</span>";
        histList.appendChild(div);
      });
    }

    updateGlobalStats();
  }

  // ---------- POMOCNICZE ----------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function scrollToActive() {
    // delikatne przewinięcie do aktywnej karty na mobile
    if (window.innerWidth <= 760) {
      const active = document.querySelector(".view.active");
      if (active) {
        const card = active.querySelector(".question-card") || active.querySelector(".flashcard-scene");
        if (card) {
          setTimeout(() => {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 80);
        }
      }
    }
  }

  // ---------- RESET ----------
  function resetStats() {
    if (!confirm("Na pewno wyczyścić wszystkie postępy?")) return;
    state = {
      known: {},
      correctCount: 0,
      wrongCount: 0,
      history: [],
      mistakes: []
    };
    saveState();
    updateGlobalStats();
    renderStats();
    initLearn();
    initFlashcards();
    initExamView();
    initMistakesView();
  }

  // ---------- EVENTY ----------
  function bindEvents() {
    // Nawigacja
    $$(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });
    $$(".bn-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    // Kategoria
    const catSel = $("#categorySelect");
    if (catSel) {
      catSel.addEventListener("change", (e) => {
        currentCategory = e.target.value;
        // odśwież aktualny widok
        const activeView = document.querySelector(".view.active");
        if (!activeView) return;
        if (activeView.id === "view-learn") initLearn();
        if (activeView.id === "view-flashcards") initFlashcards();
        if (activeView.id === "view-exam") initExamView();
        if (activeView.id === "view-mistakes") initMistakesView();
      });
    }

    // NAUKA
    const learnCheck = $("#learnCheck");
    const learnInput = $("#learnInput");
    const learnNext = $("#learnNext");
    if (learnCheck) learnCheck.addEventListener("click", checkLearn);
    if (learnNext) learnNext.addEventListener("click", nextLearn);
    if (learnInput) {
      learnInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!learnAnswered) checkLearn();
          else nextLearn();
        }
      });
    }

    // FISZKI
    const flashcard = $("#flashcard");
    const fcFlip = $("#fcFlip");
    const fcPrev = $("#fcPrev");
    const fcNext = $("#fcNext");
    if (flashcard) flashcard.addEventListener("click", flipFlashcard);
    if (fcFlip) fcFlip.addEventListener("click", flipFlashcard);
    if (fcPrev) fcPrev.addEventListener("click", flashPrev);
    if (fcNext) fcNext.addEventListener("click", flashNext);

    // EGZAMIN
    const examStart = $("#examStart");
    const examCheck = $("#examCheck");
    const examNext = $("#examNext");
    const examRestart = $("#examRestart");
    const examInput = $("#examInput");
    if (examStart) examStart.addEventListener("click", startExam);
    if (examCheck) examCheck.addEventListener("click", checkExam);
    if (examNext) examNext.addEventListener("click", nextExam);
    if (examRestart) examRestart.addEventListener("click", startExam);
    if (examInput) {
      examInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!examAnswered) checkExam();
          else nextExam();
        }
      });
    }

    // BŁĘDY
    const mistakeCheck = $("#mistakeCheck");
    const mistakeNext = $("#mistakeNext");
    const mistakeInput = $("#mistakeInput");
    if (mistakeCheck) mistakeCheck.addEventListener("click", checkMistake);
    if (mistakeNext) mistakeNext.addEventListener("click", nextMistake);
    if (mistakeInput) {
      mistakeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!mistakeAnswered) checkMistake();
          else nextMistake();
        }
      });
    }

    // RESET
    const resetBtn = $("#resetStats");
    if (resetBtn) resetBtn.addEventListener("click", resetStats);
  }

  // ---------- START ----------
  function init() {
    loadState();
    updateGlobalStats();
    bindEvents();
    switchView("learn");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();