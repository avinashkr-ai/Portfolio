import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <div class="header-section animate-fadeInUp">
        <h1 class="page-title text-gradient-primary">Technical Skills</h1>
        <p class="page-subtitle">My expertise across various technologies and frameworks</p>
      </div>

      <div class="skills-grid">
        <div class="skill-category card shadow-glow animate-fadeInLeft" style="animation-delay: 0.2s">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="category-title text-gradient-primary">Languages & Frameworks</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Angular</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">TypeScript</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">JavaScript</span>
                <span class="skill-percentage">88%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Python</span>
                <span class="skill-percentage">92%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 92%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Django</span>
                <span class="skill-percentage">90%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">HTML/CSS</span>
                <span class="skill-percentage">95%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category card shadow-glow-secondary animate-fadeInUp" style="animation-delay: 0.4s">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3 class="category-title text-gradient-secondary">Backend & APIs</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Django REST Framework</span>
                <span class="skill-percentage">88%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Flask</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Node.js</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 80%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">MySQL</span>
                <span class="skill-percentage">85%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 85%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">PostgreSQL</span>
                <span class="skill-percentage">82%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 82%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">RESTful APIs</span>
                <span class="skill-percentage">90%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category card shadow-glow-accent animate-fadeInRight" style="animation-delay: 0.6s">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-cloud"></i>
            </div>
            <h3 class="category-title text-gradient-accent">Cloud & Deployment</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Firebase</span>
                <span class="skill-percentage">88%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Azure</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 75%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Heroku</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 80%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Git/GitHub</span>
                <span class="skill-percentage">92%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 92%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Docker</span>
                <span class="skill-percentage">70%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 70%"></div>
              </div>
                </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">CI/CD</span>
                <span class="skill-percentage">75%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress accent" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-skills animate-fadeInUp" style="animation-delay: 0.8s">
        <div class="card">
          <h3 class="section-title text-gradient-primary">Additional Technologies</h3>
          <div class="tech-tags">
            <span class="tech-tag">Bootstrap</span>
            <span class="tech-tag">Tailwind CSS</span>
            <span class="tech-tag">RxJS</span>
            <span class="tech-tag">Chart.js</span>
            <span class="tech-tag">AOS Animation</span>
            <span class="tech-tag">Font Awesome</span>
            <span class="tech-tag">Pandas</span>
            <span class="tech-tag">NumPy</span>
            <span class="tech-tag">Folium</span>
            <span class="tech-tag">JWT</span>
            <span class="tech-tag">AJAX</span>
            <span class="tech-tag">WebSockets</span>
            <span class="tech-tag">AI/ML</span>
            <span class="tech-tag">OpenAI</span>
            <span class="tech-tag">Gemini AI</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .skill-category {
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
    }

    .skill-category::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .skill-category:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .skill-category:nth-child(3)::before {
      background: var(--gradient-accent);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .category-icon {
      width: 70px;
      height: 70px;
      border-radius: var(--radius-xl);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.8rem;
      box-shadow: var(--shadow-lg);
      flex-shrink: 0;
    }

    .skill-category:nth-child(2) .category-icon {
      background: var(--gradient-secondary);
    }

    .skill-category:nth-child(3) .category-icon {
      background: var(--gradient-accent);
    }

    .category-title {
      font-size: 1.6rem;
      margin: 0;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      position: relative;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .skill-name {
      font-weight: 600;
      color: var(--gray-200);
      font-size: 1rem;
    }

    .skill-percentage {
      font-weight: 700;
      color: var(--accent-color);
      font-size: 0.9rem;
    }

    .skill-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
      overflow: hidden;
      position: relative;
    }

    .skill-progress {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: var(--radius-lg);
      transition: width 1s ease-in-out;
      position: relative;
      overflow: hidden;
    }

    .skill-progress::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: shimmer 2s infinite;
    }

    .skill-progress.secondary {
      background: var(--gradient-secondary);
    }

    .skill-progress.accent {
      background: var(--gradient-accent);
    }

    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }

    .additional-skills {
      margin-top: 3rem;
    }

    .additional-skills .card {
      padding: 2.5rem;
      text-align: center;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .tech-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-lg);
      font-size: 0.9rem;
      font-weight: 500;
      box-shadow: var(--shadow-md);
      transition: var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .tech-tag::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: var(--transition-normal);
    }

    .tech-tag:hover::before {
      left: 100%;
    }

    .tech-tag:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    .tech-tag:nth-child(3n+1) {
      background: var(--gradient-primary);
    }

    .tech-tag:nth-child(3n+2) {
      background: var(--gradient-secondary);
    }

    .tech-tag:nth-child(3n+3) {
      background: var(--gradient-accent);
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .skill-category {
        padding: 2rem;
      }

      .category-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .category-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }

      .page-title {
        font-size: 2.5rem;
      }

      .tech-tags {
        gap: 0.75rem;
      }

      .tech-tag {
        padding: 0.6rem 1.2rem;
        font-size: 0.85rem;
      }
    }

    @media (max-width: 480px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }

      .skill-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  `]
})
export class SkillsComponent {}
