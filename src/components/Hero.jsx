import React, { useState, useEffect, useRef } from "react";
import { Download, Terminal, Mail } from "lucide-react";
import "./style.css";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [downloadClicked, setDownloadClicked] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = ["Full Stack Developer..", "Data Science Enthusiast..", "Team Lead..", "Trainer.."];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Enhanced Matrix effect with 200 characters for more density
    const chars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.3 + Math.random() * 4,
      char: Math.random() > 0.5 ? '0' : '1',
      size: 10 + Math.random() * 12,
      opacity: 0.1 + Math.random() * 0.5
    }));
    setMatrixChars(chars);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];
    setTypewriterText('');
    
    const interval = setInterval(() => {
      if (index < currentText.length) {
        setTypewriterText(currentText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentRole]);

  const handleDownload = () => {
    setDownloadClicked(true);
    
    // Create download link
    const link = document.createElement('a');
    link.href = '/Ravichandran_M_Resume.pdf';
    link.download = 'Ravichandran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setDownloadClicked(false);
    }, 2000);
  };

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Enhanced Matrix Background */}
      <div className="matrix-container">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="matrix-char"
            style={{
              position: 'absolute',
              left: `${char.x}%`,
              top: `${char.y}%`,
              color: `rgba(0, 255, 100, ${char.opacity})`,
              fontSize: `${char.size}px`,
              fontWeight: 'bold',
              textShadow: `0 0 10px rgba(0, 255, 100, ${char.opacity * 2})`,
              animation: `fall ${char.speed * 4}s linear infinite`,
              animationDelay: `${char.id * 0.03}s`,
              fontFamily: 'Courier New, monospace'
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 255, 100, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
          transition: 'all 0.1s ease-out',
          filter: 'blur(50px)'
        }}
      />

      {/* Multiple Scan Lines */}
      <div className="scan-line" style={{
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #00ff64, transparent)',
        animation: 'scan 4s linear infinite',
        opacity: 0.4,
        boxShadow: '0 0 20px #00ff64'
      }} />
      <div className="scan-line" style={{
        position: 'absolute',
        top: '60%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
        animation: 'scan 3s linear infinite 1s',
        opacity: 0.3,
        boxShadow: '0 0 15px #00ff88'
      }} />

      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Centered Content */}
          <div className="hero-main-content">
            {/* Top Spacing for Navbar */}
            <div className="navbar-spacing"></div>
            
            <div className="status-badge">
              <span className="status-content">
                <Terminal size={20} style={{ color: '#00ff64' }} />
                <span className="status-text">SYSTEM_ACTIVE</span>
                <div className="status-dots">
                  <div className="status-dot"></div>
                  <div className="status-dot"></div>
                  <div className="status-dot"></div>
                </div>
              </span>
            </div>
            
            <div className="command-line">
              <span className="command-prefix">{'>'}</span>
              <span className="command-text">initializing_portfolio_system.exe</span>
            </div>
            
            {/* Main Name with Enhanced Visibility */}
            <h1 className="hero-name">
              <span className="name-text">
                RAVICHANDRAN
              </span>
              <div className="name-underline"></div>
            </h1>

            <div className="typewriter-container">
              <span className="typewriter-prefix">{'>'}</span>
              <p className="typewriter-text">
                {typewriterText}
                <span className="terminal-cursor">█</span>
              </p>
            </div>

            {/* Enhanced Description */}
            <div className="description-box">
              <p className="description-text">
                <span className="dollar-sign">$</span> Crafting digital excellence through innovative full-stack solutions. 
                Specializing in MERN stack, AI integration, and cybersecurity-focused development.
              </p>
            </div>

            {/* Enhanced Buttons */}
            <div className="hero-buttons">
              <button
                onClick={handleDownload}
                className="download-btn"
              >
                <span className={`btn-content ${downloadClicked ? 'hidden' : ''}`}>
                  <Download size={24} />
                  DOWNLOAD_RESUME.apk
                </span>
                {downloadClicked && (
                  <span className="download-progress">
                    <div className="progress-text">✓ INSTALLING</div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill"></div>
                    </div>
                  </span>
                )}
                <div className="btn-glow"></div>
              </button>

              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#contact');
                }}
                className="contact-btn"
              >
                <Mail size={24} />
                INITIATE_CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;