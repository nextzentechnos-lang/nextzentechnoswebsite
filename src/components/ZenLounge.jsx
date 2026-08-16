import React, { useState } from 'react';
import './ZenLounge.css';

export default function ZenLounge() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('speed'); // 'speed', 'quiz', 'audio'

  // --- 1. CODE SPEED TEST STATE ---
  const codeSnippets = [
    "const nextzen = () => { return 'Learn. Build. Lead.'; };",
    "function solveBug() { return true; }",
    "import React from 'react'; export default App;",
    "const power = (a, b) => Math.pow(a, b);"
  ];
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(100);

  const targetSnippet = codeSnippets[snippetIdx];

  const handleTypingChange = (e) => {
    const val = e.target.value;
    
    // Auto-start timer on first character typed
    let currentStartTime = startTime;
    if (!currentStartTime && val.length > 0) {
      currentStartTime = Date.now();
      setStartTime(currentStartTime);
    }
    
    setInputVal(val);

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === targetSnippet[i]) correctChars++;
    }
    const acc = val.length > 0 ? Math.round((correctChars / val.length) * 100) : 100;
    setAccuracy(acc);

    // Live continuous WPM calculation
    if (currentStartTime && val.length > 3) {
      const elapsedSeconds = (Date.now() - currentStartTime) / 1000;
      if (elapsedSeconds > 0.5) {
        // Standard formula: 1 word = 5 characters
        const wordsTyped = correctChars / 5;
        const liveWpm = Math.round((wordsTyped / elapsedSeconds) * 60);
        setWpm(liveWpm);
      }
    }

    // Check completion
    if (val === targetSnippet) {
      const totalSeconds = Math.max(1, (Date.now() - (currentStartTime || Date.now())) / 1000);
      const finalWords = targetSnippet.length / 5;
      const finalWpm = Math.round((finalWords / totalSeconds) * 60);
      setWpm(finalWpm);
    }
  };

  const resetSpeedTest = () => {
    setSnippetIdx((prev) => (prev + 1) % codeSnippets.length);
    setInputVal('');
    setStartTime(null);
    setWpm(null);
    setAccuracy(100);
  };

  // --- 2. DAILY TECH QUIZ STATE ---
  const quizQuestions = [
    {
      q: "Which keyword in JavaScript declares a block-scoped variable that cannot be reassigned?",
      opts: ["var", "const", "let", "static"],
      ans: 1
    },
    {
      q: "What does HTML stand for?",
      opts: ["Hyper Text Markup Language", "High Tech Main Language", "Hyper Transfer Mode Logic", "Home Tool Markup Level"],
      ans: 0
    },
    {
      q: "Which HTTP status code signifies 'Created'?",
      opts: ["200", "201", "404", "500"],
      ans: 1
    }
  ];
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleQuizAnswer = (optIdx) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(optIdx);
    if (optIdx === quizQuestions[quizIdx].ans) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuizQuestion = () => {
    if (quizIdx + 1 < quizQuestions.length) {
      setQuizIdx((prev) => prev + 1);
      setSelectedOpt(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setQuizFinished(false);
  };

  // --- 3. AMBIENT AUDIO SYNTHESIZER ---
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);
  const [oscillator, setOscillator] = useState(null);

  const toggleSoundscape = () => {
    if (!isPlayingAudio) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(174, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        setAudioCtx(ctx);
        setOscillator(osc);
        setIsPlayingAudio(true);
      } catch (err) {
        console.error("Audio API non-interactive or blocked", err);
      }
    } else {
      if (oscillator) oscillator.stop();
      if (audioCtx) audioCtx.close();
      setIsPlayingAudio(false);
    }
  };

  return (
    <>
      {/* Floating Refreshment Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="zen-lounge-floating-btn pulse-glowing"
        title="Open Developer Refreshment Lounge"
      >
        <span className="zen-btn-icon">⚡</span>
        <span className="zen-btn-text">Zen Lounge</span>
      </button>

      {/* Modal Popup overlay */}
      {isOpen && (
        <div className="zen-modal-overlay">
          <div className="zen-modal-container glass-panel fade-in-up">
            
            {/* Modal Header */}
            <div className="zen-modal-header">
              <div className="zen-header-title">
                <span className="zen-badge">✨ Interactive Lounge</span>
                <h2>Developer Refreshment & Playground</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="zen-close-btn">×</button>
            </div>

            {/* Navigation Tabs */}
            <div className="zen-nav-tabs">
              <button 
                className={`zen-tab ${activeTab === 'speed' ? 'active' : ''}`}
                onClick={() => setActiveTab('speed')}
              >
                ⌨️ Speed Test
              </button>
              <button 
                className={`zen-tab ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                🧠 Tech Trivia
              </button>
              <button 
                className={`zen-tab ${activeTab === 'audio' ? 'active' : ''}`}
                onClick={() => setActiveTab('audio')}
              >
                🎵 Focus Sound
              </button>
            </div>

            {/* TAB CONTENT 1: CODE SPEED TEST */}
            {activeTab === 'speed' && (
              <div className="zen-tab-body">
                <div className="snippet-display-box">
                  <code>
                    {targetSnippet.split('').map((char, index) => {
                      let color = '#80809c';
                      let bg = 'transparent';
                      if (index < inputVal.length) {
                        color = inputVal[index] === char ? '#27c93f' : '#ff5f56';
                      } else if (index === inputVal.length) {
                        color = '#ffffff';
                        bg = 'rgba(255, 122, 0, 0.4)';
                      }
                      return (
                        <span 
                          key={index} 
                          style={{ 
                            color, 
                            background: bg,
                            fontWeight: index < inputVal.length ? '700' : '400',
                            borderRadius: '2px',
                            padding: '0 1px'
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </code>
                </div>

                <textarea
                  autoFocus
                  value={inputVal}
                  onChange={handleTypingChange}
                  placeholder="Type the exact code above here as fast as you can..."
                  className="zen-code-input"
                  rows={2}
                  disabled={inputVal === targetSnippet}
                />

                {inputVal === targetSnippet && (
                  <div className="completion-banner">
                    🎉 Excellent! Completed at <strong>{wpm} WPM</strong> with <strong>{accuracy}%</strong> accuracy.
                  </div>
                )}

                <div className="speed-metrics-row">
                  <div className="metric-badge">
                    <span className="metric-val">{wpm !== null ? `${wpm} WPM` : '--'}</span>
                    <span className="metric-lbl">Speed</span>
                  </div>
                  <div className="metric-badge">
                    <span className="metric-val">{accuracy}%</span>
                    <span className="metric-lbl">Accuracy</span>
                  </div>
                  <button onClick={resetSpeedTest} className="btn-secondary zen-action-btn">
                    🔄 Next Snippet
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: TECH TRIVIA QUIZ */}
            {activeTab === 'quiz' && (
              <div className="zen-tab-body">
                {!quizFinished ? (
                  <div className="quiz-card">
                    <span className="quiz-counter">Question {quizIdx + 1} of {quizQuestions.length}</span>
                    <h3 className="quiz-question">{quizQuestions[quizIdx].q}</h3>

                    <div className="quiz-options-list">
                      {quizQuestions[quizIdx].opts.map((opt, i) => {
                        let btnStateClass = '';
                        if (selectedOpt !== null) {
                          if (i === quizQuestions[quizIdx].ans) btnStateClass = 'correct';
                          else if (i === selectedOpt) btnStateClass = 'wrong';
                        }
                        return (
                          <button
                            key={i}
                            onClick={() => handleQuizAnswer(i)}
                            className={`quiz-opt-btn ${btnStateClass}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedOpt !== null && (
                      <button onClick={nextQuizQuestion} className="btn-primary zen-next-btn">
                        {quizIdx + 1 === quizQuestions.length ? 'View Results' : 'Next Question ➔'}
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="quiz-result-box">
                    <h3>🏆 Quiz Completed!</h3>
                    <p className="result-text">You scored <strong>{score}</strong> out of <strong>{quizQuestions.length}</strong>!</p>
                    <button onClick={resetQuiz} className="btn-primary">Try Again 🔄</button>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 3: FOCUS AMBIENT SOUND GENERATOR */}
            {activeTab === 'audio' && (
              <div className="zen-tab-body audio-tab-body">
                <div className="audio-visualizer-box">
                  <div className={`sound-wave ${isPlayingAudio ? 'animating' : ''}`}>
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                </div>

                <h3>🎧 Solfeggio 174Hz Focus Tone</h3>
                <p className="audio-desc">
                  Designed for developers to reduce stress and maximize focus during coding sessions.
                </p>

                <button 
                  onClick={toggleSoundscape} 
                  className={`btn-primary sound-toggle-btn ${isPlayingAudio ? 'playing' : ''}`}
                >
                  {isPlayingAudio ? '⏸️ Stop Focus Sound' : '▶️ Play Focus Tone'}
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
