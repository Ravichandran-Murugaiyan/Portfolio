import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, Code2, User, FolderOpen, GraduationCap, Mail, Shield, Volume2, VolumeX } from "lucide-react";
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  const navItems = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { name: "Projects", href: "#projects", icon: <FolderOpen size={18} /> },
    { name: "Certifications", href: "#certifications", icon: <Shield size={18} /> },
    { name: "Education", href: "#education", icon: <GraduationCap size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> }
  ];

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/theme.mp3'); // Make sure to add this file to your public folder
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });

    audioRef.current.addEventListener('error', (e) => {
      console.log('Audio loading error:', e);
      setAudioLoaded(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioLoaded) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', ...navItems.map(item => item.href.substring(1))];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setActiveSection(href.substring(1));
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo/Brand */}
          <div className="nav-brand">
            <div className="logo-icon">
              <Terminal size={24} />
            </div>
            <span className="logo-text">
              RAVICHANDRAN
            </span>
            
            {/* Music Beats */}
            <div className="music-beats-container">
              <button 
                className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                disabled={!audioLoaded}
                aria-label={isPlaying ? "Stop music" : "Play music"}
              >
                {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                
                {/* Animated Beats */}
                <div className="music-beats">
                  <div className={`beat-bar ${isPlaying ? 'animate' : ''}`} style={{ animationDelay: '0s' }}></div>
                  <div className={`beat-bar ${isPlaying ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}></div>
                  <div className={`beat-bar ${isPlaying ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}></div>
                  <div className={`beat-bar ${isPlaying ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}></div>
                </div>
              </button>
              
              {!audioLoaded && (
                <div className="audio-loading">LOADING...</div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
                <div className="nav-underline"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <Terminal size={28} />
                <span>NAVIGATION</span>
              </div>
              
              {/* Mobile Music Control */}
              <div className="mobile-music-control">
                <button 
                  className={`music-toggle-btn mobile ${isPlaying ? 'playing' : ''}`}
                  onClick={toggleMusic}
                  disabled={!audioLoaded}
                >
                  {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              </div>
              
              <button 
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mobile-nav-items">
              <a
                href="#home"
                className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
              >
                <span className="mobile-nav-icon"><Terminal size={18} /></span>
                <span className="mobile-nav-text">Home</span>
                <div className="mobile-nav-indicator"></div>
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span className="mobile-nav-text">{item.name}</span>
                  <div className="mobile-nav-indicator"></div>
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="binary-stream">
                {Array.from({ length: 16 }, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;