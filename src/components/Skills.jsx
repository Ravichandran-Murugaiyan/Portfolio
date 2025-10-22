import React from "react";
import { Cpu, Code2, Database, Cloud, Server, Terminal } from "lucide-react";
import "./style.css";

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-red-500" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-yellow-500" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
    ],
    "Backend": [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-green-600" },
     { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-white-200 to-gray-400" }, // Changed to lighter gray
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "from-white-700 to-green-900" },
    ],
    "Languages": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-400 to-yellow-400" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-blue-600 to-blue-700" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-red-500 to-orange-500" },
    ],
    "Databases": [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-400 to-blue-600" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500 to-green-600" },
    ],
    "Cloud & Tools": [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "from-orange-400 to-orange-600" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-400 to-blue-500" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-500 to-red-500" },
    ]
  };

  const categoryIcons = {
    "Frontend": <Code2 size={24} />,
    "Backend": <Server size={24} />,
    "Languages": <Terminal size={24} />,
    "Databases": <Database size={24} />,
    "Cloud & Tools": <Cloud size={24} />
  };

  return (
    <section id="skills" className="skills-section">
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

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="command-prompt">
            <Cpu size={24} />
            <span>SYSTEM_TOOLS</span>
            <div className="status-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <h2 className="section-title">TECHNICAL_ARSENAL</h2>
          <p className="section-subtitle">
            Advanced proficiency in modern development technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="skill-category"
            >
              <div className="category-header">
                <div className="category-icon">
                  {categoryIcons[category]}
                </div>
                <div className="category-info">
                  <div className="category-path">
                    [DIR] /skills/{category.toLowerCase().replace(/\s+/g, '_')}/
                  </div>
                  <h3 className="category-title">{category}</h3>
                </div>
              </div>

              <div className="skills-list">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    data-tooltip={skill.name}
                  >
                    <div className="skill-icon-container">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="skill-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="skill-fallback" style={{display: 'none'}}>
                        {skill.name.charAt(0)}
                      </div>
                      <div className="skill-glow"></div>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Status */}
        <div className="skills-footer">
          <div className="status-item">
            <div className="status-indicator active"></div>
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
          <div className="binary-stream">
            {Array.from({ length: 32 }, (_, i) => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;