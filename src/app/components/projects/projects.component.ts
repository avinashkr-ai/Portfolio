import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Project } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Featured Projects</h1>
        <p class="page-subtitle">Showcasing my technical expertise through innovative solutions</p>
      </div>

      <div class="projects-grid" *ngIf="projects.length > 0">
        <div 
          class="project-card card" 
          *ngFor="let project of projects; let i = index"
          [class]="getCardShadowClass(i)"
        >
          <div class="project-header">
            <div class="project-icon">
              <i [class]="getProjectIcon(project.title)"></i>
              </div>
            <div class="project-meta">
              <h3 class="project-title" [class]="getTitleGradientClass(i)">{{ project.title }}</h3>
              <span class="project-type">{{ getProjectType(project.technologies) }}</span>
            </div>
          </div>
          <div class="project-description">
            <p>{{ project.description }}</p>
            <div class="project-features">
              <span class="feature-tag" *ngFor="let feature of project.features">
                <i class="fas fa-check"></i> {{ feature }}
              </span>
            </div>
          </div>
          <div class="tech-stack">
            <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
        </div>
          <div class="project-actions">
            <a [href]="project.demo" target="_blank" class="btn btn-primary" *ngIf="project.demo">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a [href]="project.github" target="_blank" class="btn btn-secondary" *ngIf="project.github">
              <i class="fab fa-github"></i>
              Source Code
            </a>
              </div>
            </div>
          </div>

      <!-- Loading state -->
      <div class="loading-container" *ngIf="projects.length === 0">
        <div class="loading-spinner">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading projects...</p>
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: var(--space-2xl);
      padding: var(--space-lg);
    }

    .project-card {
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-2xl);
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      opacity: 0.8;
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
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: var(--shadow-xl);
    }

    .project-header {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      margin-bottom: var(--space-lg);
    }

    .project-icon {
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

    .project-card:hover .project-icon {
      transform: scale(1.05);
    }

    .project-meta {
      flex: 1;
    }

    .project-title {
      font-size: 1.25rem;
      margin-bottom: var(--space-xs);
      font-weight: 600;
      line-height: 1.3;
    }

    .project-type {
      font-size: 0.875rem;
      color: var(--gray-400);
      font-weight: 500;
    }

    .project-description {
      margin-bottom: var(--space-lg);
    }

    .project-description p {
      color: var(--gray-300);
      line-height: 1.6;
      margin-bottom: var(--space-lg);
    }

    .project-features {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .feature-tag {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      font-size: 0.875rem;
      color: var(--gray-300);
      transition: color var(--transition-fast);
    }

    .feature-tag:hover {
      color: var(--gray-200);
    }

    .feature-tag i {
      color: var(--primary-color);
      font-size: 0.75rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-xl);
    }

    .tech-tag {
      background: rgba(99, 102, 241, 0.15);
      color: var(--primary-color);
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--radius-md);
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid rgba(99, 102, 241, 0.3);
      transition: all var(--transition-fast);
    }

    .tech-tag:hover {
      background: rgba(99, 102, 241, 0.25);
      border-color: rgba(99, 102, 241, 0.5);
    }

    .project-actions {
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-lg);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: all var(--transition-normal);
      border: 1px solid transparent;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: var(--white-color);
      box-shadow: var(--shadow-md);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--gray-200);
      border-color: rgba(255, 255, 255, 0.15);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      color: var(--white-color);
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

    /* Responsive design */
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
        padding: var(--space-md);
      }

      .project-card {
        padding: var(--space-lg);
      }

      .project-header {
        flex-direction: column;
        text-align: center;
        gap: var(--space-md);
      }

      .project-actions {
        justify-content: center;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe(projects => {
        this.projects = projects;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCardShadowClass(index: number): string {
    const classes = ['shadow-glow', 'shadow-glow-secondary', 'shadow-glow-accent'];
    return classes[index % classes.length];
  }

  getTitleGradientClass(index: number): string {
    const classes = ['text-gradient-primary', 'text-gradient-secondary', 'text-gradient-accent'];
    return classes[index % classes.length];
  }

  getProjectIcon(title: string): string {
    const iconMap: { [key: string]: string } = {
      'ChallengeX': 'fas fa-trophy',
      'Godrej AI': 'fas fa-search',
      'Event Management System': 'fas fa-calendar-alt',
      'CrimeDekho': 'fas fa-shield-alt',
      'HealthX': 'fas fa-heartbeat'
    };
    return iconMap[title] || 'fas fa-code';
  }

  getProjectType(technologies: string[]): string {
    if (technologies.includes('AI/ML') || technologies.includes('AI')) {
      return 'AI Platform';
    } else if (technologies.includes('Angular') && technologies.includes('Flask')) {
      return 'Full Stack Web App';
    } else if (technologies.includes('Django') && technologies.includes('Data Analytics')) {
      return 'Data Analytics Platform';
    } else if (technologies.includes('Django') && technologies.includes('Healthcare')) {
      return 'Health Management System';
    } else if (technologies.includes('Python') && technologies.includes('NLP')) {
      return 'AI Search Platform';
    }
    return 'Web Application';
  }
}
