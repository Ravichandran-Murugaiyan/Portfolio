import React from "react";
import { Award, BookOpen, Cloud, Database, Code2, Shield, ExternalLink } from "lucide-react";
import "./style.css";

const Certifications = () => {
  const certifications = [
    {
      name: "Google Cloud Engineering Certificate",
      org: "Google Cloud",
      icon: "/google.png",
      description: "Thorough understanding of cloud infrastructure and services on Google Cloud Platform",
      status: "COMPLETED",
      link: "https://credly.com/earner/earned/badge/ef7e40a0-fec9-4a71-9874-3e0df93ca6bd"
    },
    {
      name: "The Complete Full-stack Web Development Bootcamp",
      org: "Udemy",
      icon: "/udemy.png",
      description: "Comprehensive full-stack development training covering modern web technologies and frameworks",
      status: "CERTIFIED",
      link: "https://www.udemy.com/certificate/UC-966d7eac-0f46-45a5-b3ea-04784e2933cc/"
    },
    {
      name: "Google Cloud Data Analytics Certificate",
      org: "Google Cloud",
      icon: "/google.png",
      description: "In-depth knowledge of data analytics and big data solutions on Google Cloud Platform",
      status: "COMPLETED",
      link: "https://credly.com/earner/earned/badge/0e290499-bbd1-4af3-a05f-9c39e057867c"
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

  const handleViewCertificate = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <img 
                    src={cert.icon} 
                    alt={`${cert.org} logo`}
                    className="certification-logo"
                  />
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

              {/* View Certificate Button */}
              <button 
                className="view-certificate-btn"
                onClick={() => handleViewCertificate(cert.link)}
              >
                <ExternalLink size={16} />
                VIEW_CERTIFICATE
              </button>

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