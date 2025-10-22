import React from "react";
import { Mail, Phone, Github, Linkedin, Code, Cpu } from "lucide-react";
import "./style.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "m.ravichandran.murugaiyan@gmail.com",
      link: "mailto:m.ravichandran.murugaiyan@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 90251 10028",
      link: "tel:+919025110028"
    }
  ];

  const socialProfiles = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com/Ravichandran-Murugaiyan",
      color: "#00ff64"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ravichandran-m-7b2640331/",
      color: "#00ff64"
    },
    {
      icon: <Code size={24} />,
      name: "LeetCode",
      link: "https://leetcode.com/u/Ravichandran_M/",
      color: "#00ff64"
    },
    {
      icon: <Cpu size={24} />,
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/mravichandran760",
      color: "#00ff64"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2>CONNECT_WITH_ME</h2>
          <p>Let's collaborate and build innovative solutions together</p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="contact-item"
            >
              <div className="contact-icon">
                {item.icon}
              </div>
              <div className="contact-details">
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Profiles */}
        <div className="social-profiles">
          <h3>PROFILES</h3>
          <div className="social-grid">
            {socialProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon" style={{ color: profile.color }}>
                  {profile.icon}
                </div>
                <span className="social-name">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;