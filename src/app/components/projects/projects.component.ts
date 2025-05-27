import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <div class="header-section animate-fadeInUp">
        <h1 class="page-title text-gradient-primary">Featured Projects</h1>
        <p class="page-subtitle">Showcasing my technical expertise through innovative solutions</p>
      </div>

      <div class="projects-grid">
        <div class="project-card card shadow-glow animate-fadeInUp" style="animation-delay: 0.2s">
          <div class="project-header">
            <div class="project-icon">
              <i class="fas fa-trophy"></i>
            </div>
            <div class="project-meta">
              <h3 class="project-title text-gradient-primary">ChallengeX</h3>
              <span class="project-type">AI Platform</span>
            </div>
          </div>
          <div class="project-description">
            <p>An innovative AI-powered platform for competitive programming and skill assessment with real-time evaluation and personalized feedback.</p>
            <div class="project-features">
              <span class="feature-tag"><i class="fas fa-check"></i> Real-time Code Evaluation</span>
              <span class="feature-tag"><i class="fas fa-check"></i> AI-Powered Feedback</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Firebase Integration</span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Flask</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">AI/ML</span>
          </div>
          <div class="project-actions">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              Source Code
            </a>
          </div>
        </div>

        <div class="project-card card shadow-glow-secondary animate-fadeInUp" style="animation-delay: 0.4s">
          <div class="project-header">
            <div class="project-icon">
              <i class="fas fa-search"></i>
            </div>
            <div class="project-meta">
              <h3 class="project-title text-gradient-secondary">Godrej AI</h3>
              <span class="project-type">AI Search Platform</span>
            </div>
          </div>
          <div class="project-description">
            <p>Advanced AI-powered search and summarization platform built with Python, featuring intelligent content analysis and automated insights.</p>
            <div class="project-features">
              <span class="feature-tag"><i class="fas fa-check"></i> Intelligent Search</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Content Summarization</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Machine Learning</span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">AI/ML</span>
            <span class="tech-tag">NLP</span>
            <span class="tech-tag">Flask</span>
          </div>
          <div class="project-actions">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              Source Code
            </a>
          </div>
        </div>

        <div class="project-card card shadow-glow-accent animate-fadeInUp" style="animation-delay: 0.6s">
          <div class="project-header">
            <div class="project-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="project-meta">
              <h3 class="project-title text-gradient-accent">Event Management System</h3>
              <span class="project-type">Full Stack Web App</span>
              </div>
              </div>
          <div class="project-description">
            <p>Comprehensive event management platform with QR code integration, real-time updates, and seamless user experience.</p>
            <div class="project-features">
              <span class="feature-tag"><i class="fas fa-check"></i> QR Code Integration</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Real-time Updates</span>
              <span class="feature-tag"><i class="fas fa-check"></i> User Management</span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Flask</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">QR Codes</span>
          </div>
          <div class="project-actions">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              Source Code
            </a>
          </div>
        </div>

        <div class="project-card card shadow-glow animate-fadeInUp" style="animation-delay: 0.8s">
          <div class="project-header">
            <div class="project-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="project-meta">
              <h3 class="project-title text-gradient-primary">CrimeDekho</h3>
              <span class="project-type">Data Analytics Platform</span>
              </div>
              </div>
          <div class="project-description">
            <p>Crime analysis and visualization platform using CCTNS data with Django backend and interactive dashboards.</p>
            <div class="project-features">
              <span class="feature-tag"><i class="fas fa-check"></i> Data Visualization</span>
              <span class="feature-tag"><i class="fas fa-check"></i> CCTNS Integration</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Analytics Dashboard</span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Django</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Data Analytics</span>
            <span class="tech-tag">Visualization</span>
          </div>
          <div class="project-actions">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              Source Code
            </a>
          </div>
        </div>

        <div class="project-card card shadow-glow-secondary animate-fadeInUp" style="animation-delay: 1.0s">
          <div class="project-header">
            <div class="project-icon">
              <i class="fas fa-heartbeat"></i>
            </div>
            <div class="project-meta">
              <h3 class="project-title text-gradient-secondary">HealthX</h3>
              <span class="project-type">Health Management System</span>
              </div>
              </div>
          <div class="project-description">
            <p>Comprehensive health management platform built with Django, featuring patient records, appointment scheduling, and health analytics.</p>
            <div class="project-features">
              <span class="feature-tag"><i class="fas fa-check"></i> Patient Management</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Appointment System</span>
              <span class="feature-tag"><i class="fas fa-check"></i> Health Analytics</span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Django</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Healthcare</span>
          </div>
          <div class="project-actions">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="#" class="btn btn-secondary">
              <i class="fab fa-github"></i>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      padding: 2rem 0;
    }

    .header-section {
      text-align: center;
      margin-bottom: 4rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .page-title {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .page-subtitle {
      font-size: 1.3rem;
      color: var(--gray-300);
      margin: 0;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .project-card {
      padding: 2.5rem;
      transition: var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .project-card:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .project-card:nth-child(3)::before {
      background: var(--gradient-accent);
    }

    .project-card:nth-child(4)::before {
      background: var(--gradient-primary);
    }

    .project-card:nth-child(5)::before {
      background: var(--gradient-secondary);
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .project-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .project-icon {
      width: 80px;
      height: 80px;
      border-radius: var(--radius-xl);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 2rem;
      box-shadow: var(--shadow-lg);
      flex-shrink: 0;
    }

    .project-card:nth-child(2) .project-icon {
      background: var(--gradient-secondary);
    }

    .project-card:nth-child(3) .project-icon {
      background: var(--gradient-accent);
    }

    .project-card:nth-child(4) .project-icon {
      background: var(--gradient-primary);
    }

    .project-card:nth-child(5) .project-icon {
      background: var(--gradient-secondary);
    }

    .project-meta {
      flex: 1;
    }

    .project-title {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    .project-type {
      background: rgba(255, 255, 255, 0.1);
      color: var(--gray-300);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .project-description {
      margin-bottom: 2rem;
    }

    .project-description p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--gray-200);
      margin-bottom: 1.5rem;
    }

    .project-features {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .feature-tag {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray-300);
      font-size: 0.95rem;
    }

    .feature-tag i {
      color: var(--success-color);
      font-size: 0.8rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .tech-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.85rem;
      font-weight: 500;
      box-shadow: var(--shadow-md);
      transition: var(--transition-normal);
    }

    .tech-tag:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .project-card:nth-child(2) .tech-tag {
      background: var(--gradient-secondary);
    }

    .project-card:nth-child(3) .tech-tag {
      background: var(--gradient-accent);
    }

    .project-card:nth-child(4) .tech-tag {
      background: var(--gradient-primary);
    }

    .project-card:nth-child(5) .tech-tag {
      background: var(--gradient-secondary);
    }

    .project-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      flex: 1;
      min-width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-card {
        padding: 2rem;
      }

      .project-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .project-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .project-actions {
        flex-direction: column;
      }

      .btn {
        min-width: auto;
      }
    }

    @media (max-width: 480px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {}
