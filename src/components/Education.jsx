import React from "react";
import { BookOpen, MapPin, Calendar, Award, GraduationCap } from "lucide-react";
import "./style.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Background Effects */}
      <div className="matrix-container">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="matrix-char"
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

      <div className="education-container">
        {/* Header */}
        <div className="education-header">
          <div className="command-prompt">
            <GraduationCap size={24} />
            <span>EDUCATION_SYSTEM</span>
            <div className="status-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-subtitle">
            Advanced education in computer science and engineering fundamentals
          </p>
        </div>

        {/* Education Card */}
        <div className="education-card">
          <div className="education-content">
            <div className="education-icon-main">
              <BookOpen size={36} />
            </div>
            
            <div className="education-details">
              <div className="education-path">
                [DEGREE] EDUCATION_RECORD
              </div>
              
              <h3 className="education-degree">
                Bachelor of Engineering
              </h3>
              
              <p className="education-field">
                Computer Science And Engineering
              </p>
              
              <p className="education-institution">
                E.S College Of Engineering And Technology, Villupuram
              </p>

              <div className="education-meta">
                <div className="meta-item">
                  <Calendar size={18} />
                  <span>2022 - 2026</span>
                </div>
                
                <div className="meta-item">
                  <Award size={18} />
                  <span>CGPA: 8.8/10</span>
                </div>
                
                <div className="meta-item">
                  <MapPin size={18} />
                  <span>Villupuram, India</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="education-status">
                <div className="status-indicator active"></div>
                <span>EDUCATION_IN_PROGRESS</span>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="education-glow"></div>
        </div>

        {/* Footer Status */}
        <div className="education-footer">
          <div className="status-item">
            <div className="status-indicator online"></div>
            <span>SYSTEM_ACTIVE_LEARNING_MODE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;