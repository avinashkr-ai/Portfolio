import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="education-container">
      <div class="header-section animate-fadeInUp">
        <h1 class="page-title text-gradient-primary">Education & Achievements</h1>
        <p class="page-subtitle">My academic journey and professional accomplishments</p>
      </div>

      <div class="education-grid">
        <div class="education-card card shadow-glow animate-fadeInLeft" style="animation-delay: 0.2s">
          <div class="education-header">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-meta">
              <h3 class="degree-title text-gradient-primary">Master of Computer Application</h3>
              <span class="institution">Harcourt Butler Technical University (HBTU)</span>
              <span class="duration">2021 - 2023</span>
            </div>
          </div>
          <div class="education-details">
            <div class="grade-info">
              <span class="grade-label">CGPA:</span>
              <span class="grade-value">7.77</span>
            </div>
            <p class="description">
              Specialized in advanced computer applications with focus on software development, 
              database management, and modern programming paradigms.
            </p>
            <div class="subjects">
              <span class="subject-tag">Software Engineering</span>
              <span class="subject-tag">Database Systems</span>
              <span class="subject-tag">Web Technologies</span>
              <span class="subject-tag">Data Structures</span>
            </div>
          </div>
        </div>

        <div class="education-card card shadow-glow-secondary animate-fadeInRight" style="animation-delay: 0.4s">
          <div class="education-header">
            <div class="education-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="education-meta">
              <h3 class="degree-title text-gradient-secondary">Bachelor of Computer Application</h3>
              <span class="institution">CSJMU UIET</span>
              <span class="duration">2015 - 2018</span>
            </div>
          </div>
          <div class="education-details">
            <div class="grade-info">
              <span class="grade-label">Percentage:</span>
              <span class="grade-value">61%</span>
            </div>
            <p class="description">
              Foundation in computer science fundamentals including programming languages, 
              computer networks, and software development methodologies.
            </p>
            <div class="subjects">
              <span class="subject-tag">Programming</span>
              <span class="subject-tag">Computer Networks</span>
              <span class="subject-tag">Operating Systems</span>
              <span class="subject-tag">Mathematics</span>
            </div>
          </div>
        </div>
      </div>

      <div class="achievements-section animate-fadeInUp" style="animation-delay: 0.6s">
        <div class="card">
          <h2 class="section-title text-gradient-primary">Certifications & Achievements</h2>
          <div class="achievements-grid">
            <div class="achievement-item">
              <div class="achievement-icon">
                <i class="fas fa-trophy"></i>
              </div>
              <div class="achievement-content">
                <h4 class="achievement-title">ROBO QUEST/GAMES</h4>
                <p class="achievement-description">
                  Winner in robotics competition demonstrating technical innovation and problem-solving skills
                </p>
                <span class="achievement-type">Competition Winner</span>
              </div>
            </div>

            <div class="achievement-item">
              <div class="achievement-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="achievement-content">
                <h4 class="achievement-title">Hackathon Participant</h4>
                <p class="achievement-description">
                  Active participation in multiple hackathons, showcasing rapid prototyping and teamwork abilities
                </p>
                <span class="achievement-type">Technical Event</span>
              </div>
            </div>

            <div class="achievement-item">
              <div class="achievement-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="achievement-content">
                <h4 class="achievement-title">Technical Certifications</h4>
                <p class="achievement-description">
                  Completed various online certifications in web development, cloud computing, and modern frameworks
                </p>
                <span class="achievement-type">Professional Development</span>
              </div>
            </div>

            <div class="achievement-item">
              <div class="achievement-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="achievement-content">
                <h4 class="achievement-title">Training & Mentorship</h4>
                <p class="achievement-description">
                  Successfully trained 50+ students in Django and full-stack development technologies
                </p>
                <span class="achievement-type">Teaching Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .education-container {
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

    .education-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .education-card {
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      transition: var(--transition-normal);
    }

    .education-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .education-card:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .education-card:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .education-header {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .education-icon {
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

    .education-card:nth-child(2) .education-icon {
      background: var(--gradient-secondary);
    }

    .education-meta {
      flex: 1;
    }

    .degree-title {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    .institution {
      display: block;
      font-size: 1.1rem;
      color: var(--accent-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .duration {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      color: var(--gray-300);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .education-details {
      margin-top: 1.5rem;
    }

    .grade-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .grade-label {
      font-weight: 600;
      color: var(--gray-300);
    }

    .grade-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--success-color);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .description {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--gray-200);
      margin-bottom: 1.5rem;
    }

    .subjects {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .subject-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.85rem;
      font-weight: 500;
      box-shadow: var(--shadow-md);
      transition: var(--transition-normal);
    }

    .subject-tag:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .education-card:nth-child(2) .subject-tag {
      background: var(--gradient-secondary);
    }

    .achievements-section {
      margin-top: 3rem;
    }

    .achievements-section .card {
      padding: 2.5rem;
    }

    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .achievement-item {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-xl);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .achievement-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--gradient-primary);
    }

    .achievement-item:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .achievement-item:nth-child(3)::before {
      background: var(--gradient-accent);
    }

    .achievement-item:nth-child(4)::before {
      background: var(--gradient-primary);
    }

    .achievement-item:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .achievement-icon {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-lg);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.5rem;
      box-shadow: var(--shadow-lg);
      flex-shrink: 0;
    }

    .achievement-item:nth-child(2) .achievement-icon {
      background: var(--gradient-secondary);
    }

    .achievement-item:nth-child(3) .achievement-icon {
      background: var(--gradient-accent);
    }

    .achievement-item:nth-child(4) .achievement-icon {
      background: var(--gradient-primary);
    }

    .achievement-content {
      flex: 1;
    }

    .achievement-title {
      font-size: 1.3rem;
      color: var(--white-color);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .achievement-description {
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--gray-300);
      margin-bottom: 1rem;
    }

    .achievement-type {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      color: var(--accent-color);
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius-md);
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .education-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .education-card {
        padding: 2rem;
      }

      .education-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .education-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
        margin: 0 auto;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .achievements-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .achievement-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .achievement-icon {
        margin: 0 auto;
      }
    }

    @media (max-width: 480px) {
      .education-grid {
        grid-template-columns: 1fr;
      }

      .grade-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  `]
})
export class EducationComponent {}
