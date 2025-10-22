import React from "react";
import { Shield, Terminal, Zap, Cpu, User, Code2 } from "lucide-react";
import "./style.css";

const About = () => {
  const skills = [
    { icon: <Terminal size={20} />, label: "Full Stack Development", level: "Advanced" },
    { icon: <Cpu size={20} />, label: "AI & Machine Learning", level: "Intermediate" },
    { icon: <Shield size={20} />, label: "Cybersecurity", level: "Intermediate" },
    { icon: <Code2 size={20} />, label: "Problem Solving", level: "Expert" }
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Effects */}
      <div className="matrix-container">
        {Array.from({ length: 25 }, (_, i) => (
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

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="command-prompt">
            <User size={24} />
            <span>ABOUT_SYSTEM</span>
            <div className="status-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <h2 className="section-title">SYSTEM_PROFILE</h2>
        </div>

        <div className="about-content">
          {/* Main About Card */}
          <div className="about-card">
            <div className="about-glow"></div>
            
            <div className="about-header-info">
              <div className="profile-icon">
                <Shield size={28} />
              </div>
              <div className="profile-info">
                <div className="profile-path">
                  [USER_PROFILE] bio_data.txt
                </div>
                <div className="profile-status">
                  <div className="status-indicator online"></div>
                  <span>ACTIVE_DEVELOPER</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate developer who blends creativity and logic to build
                interactive, visually engaging web experiences. I specialize in MERN
                stack and enjoy exploring AI-based projects.
              </p>
              <p className="about-paragraph">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or diving into cybersecurity research.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <div className="skill-label">{skill.label}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar"
                    style={{
                      width: skill.level === 'Expert' ? '100%' : 
                             skill.level === 'Advanced' ? '85%' : '70%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Status */}
        <div className="about-footer">
          <div className="status-item">
            <div className="status-indicator secure"></div>
            <span>PROFILE_ENCRYPTED_AND_SECURE</span>
          </div>
          <div className="binary-stream">
            {Array.from({ length: 32 }, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;