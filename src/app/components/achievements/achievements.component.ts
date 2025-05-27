import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="achievements-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Achievements & Certifications</h1>
        <p class="page-subtitle">Recognition and professional accomplishments throughout my career</p>
      </div>

      <div class="achievements-grid">
        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">ROBO QUEST/GAMES Winner</h4>
            <p class="achievement-description">
              Winner in robotics competition demonstrating technical innovation and problem-solving skills. 
              Competed against multiple teams and showcased advanced robotics programming and design capabilities.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Competition Winner</span>
              <span class="achievement-date">2022</span>
            </div>
          </div>
        </div>

        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">Hackathon Participant</h4>
            <p class="achievement-description">
              Active participation in multiple hackathons, showcasing rapid prototyping and teamwork abilities. 
              Developed innovative solutions under time constraints and collaborated effectively with diverse teams.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Technical Event</span>
              <span class="achievement-date">2021-2023</span>
            </div>
          </div>
        </div>

        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-certificate"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">Technical Certifications</h4>
            <p class="achievement-description">
              Completed various online certifications in web development, cloud computing, and modern frameworks. 
              Continuously updating skills with industry-relevant technologies and best practices.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Professional Development</span>
              <span class="achievement-date">Ongoing</span>
            </div>
          </div>
        </div>

        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">Training & Mentorship Excellence</h4>
            <p class="achievement-description">
              Successfully trained 50+ students in Django and full-stack development technologies. 
              Developed comprehensive curriculum and mentored junior developers in professional environments.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Teaching Excellence</span>
              <span class="achievement-date">2021-Present</span>
            </div>
          </div>
        </div>

        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">Project Leadership</h4>
            <p class="achievement-description">
              Led multiple full-stack development projects from conception to deployment. 
              Managed cross-functional teams and delivered high-quality solutions on time and within budget.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Leadership</span>
              <span class="achievement-date">2022-Present</span>
            </div>
          </div>
        </div>

        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="achievement-content">
            <h4 class="achievement-title">Client Satisfaction Awards</h4>
            <p class="achievement-description">
              Received multiple client appreciation awards for delivering exceptional software solutions. 
              Consistently exceeded client expectations and maintained long-term professional relationships.
            </p>
            <div class="achievement-meta">
              <span class="achievement-type">Client Recognition</span>
              <span class="achievement-date">2023</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications Section -->
      <div class="certifications-section">
        <div class="card">
          <h2 class="section-title text-gradient-secondary">Professional Certifications</h2>
          <div class="certifications-grid">
            <div class="certification-card">
              <div class="cert-icon">
                <i class="fab fa-angular"></i>
              </div>
              <div class="cert-info">
                <h5>Angular Development</h5>
                <p>Advanced Angular Framework</p>
                <span class="cert-provider">Google Developers</span>
              </div>
            </div>

            <div class="certification-card">
              <div class="cert-icon">
                <i class="fab fa-python"></i>
              </div>
              <div class="cert-info">
                <h5>Python Programming</h5>
                <p>Full Stack Python Development</p>
                <span class="cert-provider">Python Institute</span>
              </div>
            </div>

            <div class="certification-card">
              <div class="cert-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <div class="cert-info">
                <h5>Cloud Computing</h5>
                <p>Azure & Firebase Deployment</p>
                <span class="cert-provider">Microsoft & Google</span>
              </div>
            </div>

            <div class="certification-card">
              <div class="cert-icon">
                <i class="fas fa-database"></i>
              </div>
              <div class="cert-info">
                <h5>Database Management</h5>
                <p>SQL & NoSQL Databases</p>
                <span class="cert-provider">Oracle & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .achievements-container {
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
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      margin-bottom: var(--space-lg);
      font-weight: 700;
    }

    .page-subtitle {
      font-size: 1.3rem;
      color: var(--gray-300);
      margin: 0;
    }

    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .achievement-item {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-xl);
      border: 1px solid rgba(255, 255, 255, 0.1);
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

    .achievement-item:nth-child(5)::before {
      background: var(--gradient-secondary);
    }

    .achievement-item:nth-child(6)::before {
      background: var(--gradient-accent);
    }

    .achievement-item:hover {
      box-shadow: var(--shadow-xl);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .achievement-icon {
      width: 70px;
      height: 70px;
      border-radius: var(--radius-lg);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.8rem;
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

    .achievement-item:nth-child(5) .achievement-icon {
      background: var(--gradient-secondary);
    }

    .achievement-item:nth-child(6) .achievement-icon {
      background: var(--gradient-accent);
    }

    .achievement-content {
      flex: 1;
    }

    .achievement-title {
      font-size: 1.4rem;
      color: var(--white-color);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .achievement-description {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--gray-300);
      margin-bottom: 1rem;
    }

    .achievement-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
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

    .achievement-date {
      font-size: 0.85rem;
      color: var(--gray-400);
      font-weight: 500;
    }

    /* Certifications Section */
    .certifications-section {
      margin-top: 3rem;
    }

    .certifications-section .card {
      padding: 2.5rem;
    }

    .section-title {
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      text-align: center;
      margin-bottom: var(--space-lg);
      font-weight: 700;
    }

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .certification-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
    }

    .certification-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: var(--gradient-secondary);
    }

    .certification-card:nth-child(2)::before {
      background: var(--gradient-accent);
    }

    .certification-card:nth-child(3)::before {
      background: var(--gradient-primary);
    }

    .certification-card:nth-child(4)::before {
      background: var(--gradient-secondary);
    }

    .cert-icon {
      width: 50px;
      height: 50px;
      border-radius: var(--radius-md);
      background: var(--gradient-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.3rem;
      flex-shrink: 0;
    }

    .certification-card:nth-child(2) .cert-icon {
      background: var(--gradient-accent);
    }

    .certification-card:nth-child(3) .cert-icon {
      background: var(--gradient-primary);
    }

    .certification-card:nth-child(4) .cert-icon {
      background: var(--gradient-secondary);
    }

    .cert-info h5 {
      font-size: 1.1rem;
      color: var(--white-color);
      margin: 0 0 0.25rem 0;
      font-weight: 600;
    }

    .cert-info p {
      font-size: 0.9rem;
      color: var(--gray-300);
      margin: 0 0 0.5rem 0;
    }

    .cert-provider {
      font-size: 0.8rem;
      color: var(--accent-color);
      font-weight: 500;
    }

    @media (max-width: 768px) {
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
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .certifications-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .certification-card {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
      }
    }

    @media (max-width: 480px) {
      .achievements-grid {
        grid-template-columns: 1fr;
      }

      .achievement-item {
        padding: 1.5rem;
      }

      .certification-card {
        padding: 1rem;
      }
    }
  `]
})
export class AchievementsComponent {} 