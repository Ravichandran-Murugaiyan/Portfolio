import React from "react";
import { ExternalLink, Github, Code2, Server, Zap } from "lucide-react";
import "./style.css";

const Projects = () => {
  const projects = [
    {
      title: "RC Shirts",
      description: "RC-Shirts is a full-stack Django eCommerce platform offering a curated shirt collection with size-based stock management and seamless checkout. It features user accounts, order tracking, and a responsive, interactive UI for a smooth shopping experience.",
      tech: ["Python", "Django", "Sqlite3", "HTML,CSS,JS"], 
      liveDemo: "https://rc-shirts-k9kl.onrender.com",
      github: "https://github.com/Ravichandran-Murugaiyan/RC-Shirts.git",
      status: "ACTIVE",
      icon: <Server size={20} />
    },
    {
      title: "Movie Recommendations",
      description: "Movie Recommender is a full-stack Django application that fetches movie data from the TMDB API and provides personalized recommendations based on user preferences. It features user accounts, watchlists, and a responsive, interactive UI for an engaging movie discovery experience.",
      tech: ["Python", "Django", "TMDB API", "HTML,CSS,JS"],
      liveDemo: "https://movies-recommendations-4.onrender.com",
      github: "https://github.com/Ravichandran-Murugaiyan/Movie_Recommendation.git",
      status: "DEPLOYED",
      icon: <Zap size={20} />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="command-prompt">
            <Code2 size={24} />
            <span>PROJECTS_SYSTEM</span>
            <div className="status-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <h2 className="section-title">MISSION_PROJECTS</h2>
          <p className="section-subtitle">
            Innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <div className="project-title-section">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <ExternalLink size={18} />
                  LIVE_DEMO
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-link"
                >
                  <Github size={18} />
                  SOURCE_CODE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;