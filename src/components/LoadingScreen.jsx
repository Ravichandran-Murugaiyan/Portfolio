import React, { useEffect, useState } from "react";
import { Terminal, Cpu, Shield, Database, Cloud, Code2, Server } from "lucide-react";
import "./style.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing system...");
  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarProgress, setAvatarProgress] = useState(0);

  useEffect(() => {
    const statusMessages = [
      "Initializing system...",
      "Loading core protocols...",
      "Decrypting data streams...",
      "Establishing connection...",
      "Verifying security...",
      "Loading user profile...",
      "Rendering interface...",
      "System ready..."
    ];

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        
        // Show avatar at 60% progress
        if (prev >= 60 && !showAvatar) {
          setShowAvatar(true);
          startAvatarRender();
        }
        
        return prev + 2;
      });
    }, 50);

    const statusInterval = setInterval(() => {
      setStatus(current => {
        const currentIndex = statusMessages.indexOf(current);
        const nextIndex = currentIndex === statusMessages.length - 1 ? 0 : currentIndex + 1;
        return statusMessages[nextIndex];
      });
    }, 400);

    const startAvatarRender = () => {
      const avatarInterval = setInterval(() => {
        setAvatarProgress(prev => {
          if (prev >= 100) {
            clearInterval(avatarInterval);
            return 100;
          }
          return prev + 5;
        });
      }, 30);
    };

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, [showAvatar]);

  if (!loading) return null;

  return (
    <div className="loading-overlay">
      {/* Enhanced Matrix Background */}
      <div className="matrix-bg">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="matrix-digit"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${12 + Math.random() * 8}px`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </div>
        ))}
      </div>

      <div className="loading-container">
        {/* Header */}
        <div className="loading-header">
          <div className="traffic-lights">
            <div className="traffic-light red"></div>
            <div className="traffic-light yellow"></div>
            <div className="traffic-light green"></div>
          </div>
          <div className="header-title">
            <Terminal size={18} />
            SYSTEM_BOOT.exe
          </div>
          <div className="system-time">
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Main Content */}
        <div className="loading-content">
          {/* Left Panel - System Status */}
          <div className="status-panel">
            <div className="panel-title">
              <Cpu size={16} />
              SYSTEM_STATUS
            </div>
            
            <div className="progress-section">
              <div className="progress-info">
                <span className="status-text">{status}</span>
                <span className="progress-percent">{progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="system-status">
              <div className="status-item">
                <Shield size={16} />
                <span>Security Protocols</span>
                <span className={`status-indicator ${progress > 20 ? 'active' : ''}`}>
                  {progress > 20 ? '✓' : '...'}
                </span>
              </div>
              <div className="status-item">
                <Database size={16} />
                <span>Database Systems</span>
                <span className={`status-indicator ${progress > 40 ? 'active' : ''}`}>
                  {progress > 40 ? '✓' : '...'}
                </span>
              </div>
              <div className="status-item">
                <Cloud size={16} />
                <span>Cloud Services</span>
                <span className={`status-indicator ${progress > 60 ? 'active' : ''}`}>
                  {progress > 60 ? '✓' : '...'}
                </span>
              </div>
              <div className="status-item">
                <Code2 size={16} />
                <span>UI Framework</span>
                <span className={`status-indicator ${progress > 80 ? 'active' : ''}`}>
                  {progress > 80 ? '✓' : '...'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel - Avatar Render */}
          <div className="avatar-panel">
            <div className="panel-title">
              <Server size={16} />
              USER_PROFILE_RENDER
            </div>
            
            <div className="avatar-container">
              {showAvatar && (
                <>
                  {/* Avatar with Hacker-style Render Effect */}
                  <div className="avatar-render-area">
                    <div className="avatar-frame">
                      <div className="avatar-image">
                        {/* Your avatar image */}
                        <img 
                          src="./images/robot-icon.jpg" 
                          alt="User Avatar" 
                          className="profile-avatar-img"
                          style={{
                            opacity: avatarProgress / 100,
                            filter: `blur(${10 - (avatarProgress / 10)}px)`
                          }}
                        />
                        
                        {/* Render Progress Overlay */}
                        <div 
                          className="render-overlay"
                          style={{ height: `${100 - avatarProgress}%` }}
                        />
                      </div>
                      
                      {/* Scan Lines */}
                      <div className="scan-lines"></div>
                      
                      {/* Render Progress Indicator */}
                      <div className="render-progress">
                        <div className="render-text">
                          RENDERING: {avatarProgress}%
                        </div>
                        <div className="render-bar">
                          <div 
                            className="render-fill"
                            style={{ width: `${avatarProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="user-info">
                    <div className="user-name">RAVICHANDRAN</div>
                    <div className="user-title">Aspiring Full Stack Developer</div>
                    <div className="user-status">
                      <div className="status-online"></div>
                      SYSTEM_ACCESS_GRANTED
                    </div>
                  </div>
                </>
              )}
              
              {!showAvatar && (
                <div className="avatar-placeholder">
                  <div className="placeholder-text">
                    PROFILE_LOADING_PENDING...
                  </div>
                  <div className="placeholder-animation">
                    <div className="pulse-dot"></div>
                    <div className="pulse-dot"></div>
                    <div className="pulse-dot"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="loading-footer">
          <div className="binary-stream">
            {Array.from({ length: 32 }, (_, i) => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </div>
          <div className="system-info">
            PORTFOLIO_OS v2.0.4 | SECURE_CONNECTION_ESTABLISHED
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;