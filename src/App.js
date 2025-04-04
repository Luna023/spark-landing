import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="spark-landing">
      <nav className="navbar">
        <div className="logo">✨ Spark</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Unleash Your Creative Potential</h1>
          <p>AI-Powered Creativity Companion</p>
          <form onSubmit={handleSubmit} className="email-form">
            {!submitted ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Get Early Access</button>
              </>
            ) : (
              <div className="success-message">
                🎉 Welcome to the future of creativity!
                <br />
                We'll notify you soon.
              </div>
            )}
          </form>
        </div>
        <div className="hero-graphic">
          <div className="creativity-blob"></div>
        </div>
      </header>

      <section id="features" className="features">
        <div className="feature">
          <div className="feature-icon">🧠</div>
          <h3>AI-Powered Ideas</h3>
          <p>Generate breakthrough ideas instantly</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚀</div>
          <h3>Rapid Prototyping</h3>
          <p>Transform concepts into actionable plans</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🌈</div>
          <h3>Unlimited Inspiration</h3>
          <p>Break through creative blocks</p>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How Spark Works</h2>
        <div className="workflow">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <h4>Input Your Vision</h4>
            <p>Share your initial creative spark</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <h4>AI Expansion</h4>
            <p>Our AI amplifies your ideas</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <h4>Refined Concept</h4>
            <p>Polished, actionable creativity</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Tshiamo Sehoole. Creativity Reimagined.</p>
        <div className="social-links">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
