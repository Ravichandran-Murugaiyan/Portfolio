import React from "react";
import { Code, Heart } from "lucide-react";
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Background Effects */}
      <div className="footer-matrix">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="matrix-digit"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </div>
        ))}
      </div>

      <div className="scan-line"></div>

      <div className="footer-container">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            <div className="copyright-content">
              <Code size={16} />
              <span>
                &copy; {currentYear} RAVICHANDRAN_M. DEVELOPED_WITH <Heart size={14} /> USING_REACT.js
              </span>
            </div>
          </div>
          
          <div className="binary-stream">
            {Array.from({ length: 16 }, (_, i) => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;