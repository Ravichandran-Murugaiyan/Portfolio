import React from "react";
import { Award, BookOpen, Cloud, Database, Code2, Shield } from "lucide-react";
import "./style.css";

const Certifications = () => {
  const certifications = [
    {
      name: "The Complete Full Stack Development Bootcamp 2025",
      org: "Udemy",
      icon: <Code2 size={24} />,
      description: "Comprehensive full-stack development training covering modern web technologies and frameworks",
      status: "COMPLETED"
    },
    {
      name: "A Beginner Data Analytics",
      org: "Google Cloud",
      icon: <Cloud size={24} />,
      description: "Fundamentals of data analysis and visualization using Google Cloud platform",
      status: "CERTIFIED"
    },
    {
      name: "Complete Data Science Bootcamp 2025",
      org: "Udemy",
      icon: <Database size={24} />,
      description: "End-to-end data science and machine learning with practical projects",
      status: "COMPLETED"
    }
  ];

  const getOrgIcon = (org) => {
    switch(org) {
      case "Udemy":
        return <BookOpen size={20} />;
      case "Google Cloud":
        return <Cloud size={20} />;
      default:
        return <Shield size={20} />;
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        {/* Header */}
        <div className="certifications-header">
          <div className="command-prompt">
            <Award size={24} />
            <span>CERTIFICATIONS_SYSTEM</span>
            <div className="status-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <h2 className="section-title">SECURITY_CLEARANCES</h2>
          <p className="section-subtitle">
            Verified credentials and professional certifications in cutting-edge technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <div className="certification-status">
                  {cert.status}
                </div>
              </div>

              <h3 className="certification-title">
                {cert.name}
              </h3>
              
              <p className="certification-description">
                {cert.description}
              </p>

              <div className="certification-footer">
                <div className="organization">
                  <div className="org-icon">
                    {getOrgIcon(cert.org)}
                  </div>
                  <span className="org-name">{cert.org}</span>
                </div>
                <div className="verification-badge">
                  <Shield size={14} />
                  VERIFIED
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="certification-glow"></div>
            </div>
          ))}
        </div>

        {/* Footer Status */}
        <div className="certifications-footer">
          <div className="status-item">
            <div className="status-indicator secure"></div>
            <span>ALL_CREDENTIALS_VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;