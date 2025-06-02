import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Skills, Skill } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Technical Skills</h1>
        <p class="page-subtitle">My expertise across various technologies and frameworks</p>
      </div>

      <div class="skills-grid" *ngIf="skills">
        <div class="skill-category card shadow-glow">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="category-title text-gradient-primary">Languages & Frameworks</h3>
                </div>
          <div class="skills-list">
            <div class="skill-item" *ngFor="let skill of skills.languages">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.proficiency }}%</span>
                </div>
              <div class="skill-bar">
                <div class="skill-progress" [style.width.%]="skill.proficiency"></div>
              </div>
                </div>
            <div class="skill-item" *ngFor="let skill of skills.frameworks">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.proficiency }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" [style.width.%]="skill.proficiency"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category card shadow-glow-secondary">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3 class="category-title text-gradient-secondary">Backend & APIs</h3>
                </div>
          <div class="skills-list">
            <div class="skill-item" *ngFor="let skill of skills.backend">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.proficiency }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress secondary" [style.width.%]="skill.proficiency"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category card shadow-glow-accent">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-cloud"></i>
            </div>
            <h3 class="category-title text-gradient-accent">Cloud & Deployment</h3>
                </div>
          <div class="skills-list">
            <div class="skill-item" *ngFor="let skill of skills.cloud">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.proficiency }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress accent" [style.width.%]="skill.proficiency"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div class="loading-container" *ngIf="!skills">
        <div class="loading-spinner">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading skills data...</p>
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
      margin-bottom: var(--space-3xl);
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.03);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all var(--transition-normal);
    }

    .header-section:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.12);
    }

    .page-title {
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      margin-bottom: var(--space-lg);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .page-subtitle {
      font-size: 1rem;
      color: var(--gray-300);
      margin: 0;
      line-height: 1.6;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--space-2xl);
      padding: var(--space-lg);
    }

    .skill-category {
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-2xl);
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .skill-category::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      opacity: 0.8;
    }

    .skill-category:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .skill-category:nth-child(3)::before {
      background: var(--gradient-accent);
    }

    .skill-category:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: var(--shadow-xl);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      margin-bottom: var(--space-xl);
    }

    .category-icon {
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
      transition: all var(--transition-normal);
    }

    .skill-category:nth-child(2) .category-icon {
      background: var(--gradient-secondary);
    }

    .skill-category:nth-child(3) .category-icon {
      background: var(--gradient-accent);
    }

    .skill-category:hover .category-icon {
      transform: scale(1.05);
    }

    .category-title {
      font-size: 1.25rem;
      margin: 0;
      font-weight: 600;
      line-height: 1.3;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .skill-name {
      font-weight: 500;
      color: var(--gray-200);
      font-size: 0.9rem;
    }

    .skill-percentage {
      font-weight: 600;
      color: var(--primary-color);
      font-size: 0.85rem;
    }

    .skill-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-full);
      overflow: hidden;
      position: relative;
    }

    .skill-progress {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: var(--radius-full);
      transition: width var(--transition-slow);
      position: relative;
    }

    .skill-progress.secondary {
      background: var(--gradient-secondary);
    }

    .skill-progress.accent {
      background: var(--gradient-accent);
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--space-3xl);
    }

    .loading-spinner {
      text-align: center;
      color: var(--gray-400);
    }

    .loading-spinner i {
      font-size: 2rem;
      margin-bottom: var(--space-lg);
      color: var(--primary-color);
      animation: spin 1s linear infinite;
    }

    /* Shadow classes */
    .shadow-glow {
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.15);
    }

    .shadow-glow-secondary {
      box-shadow: 0 4px 20px rgba(6, 182, 212, 0.15);
    }

    .shadow-glow-accent {
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.15);
    }

    /* Text gradient classes */
    .text-gradient-primary {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-gradient-secondary {
      background: var(--gradient-secondary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-gradient-accent {
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Animation */
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
        padding: var(--space-md);
      }

      .skill-category {
        padding: var(--space-lg);
      }

      .category-header {
        flex-direction: column;
        text-align: center;
        gap: var(--space-md);
      }

      .category-icon {
        width: 50px;
        height: 50px;
        font-size: 1.25rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: Skills | null = null;
  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getSkills()
      .pipe(takeUntil(this.destroy$))
      .subscribe(skills => {
        this.skills = skills;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
