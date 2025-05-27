import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Experience } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="experience-container">
      <div class="header-section animate-fadeInUp">
        <h1 class="page-title text-gradient-primary">Professional Experience</h1>
        <p class="page-subtitle">My journey in the world of technology</p>
      </div>

      <div class="timeline" *ngIf="experiences.length > 0">
        <div 
          class="timeline-item" 
          *ngFor="let exp of experiences; let i = index"
          [class.animate-fadeInLeft]="i % 2 === 0"
          [class.animate-fadeInRight]="i % 2 === 1"
          [style.animation-delay]="(i * 0.2 + 0.2) + 's'"
        >
          <div class="timeline-marker">
            <div class="timeline-icon" [class]="getTimelineIconClass(i)">
              <i [class]="getIconClass(exp.type)"></i>
            </div>
          </div>
          <div class="timeline-content card" [class]="getCardShadowClass(i)">
            <div class="timeline-header">
              <h3 class="job-title" [class]="getTitleGradientClass(i)">{{ exp.title }}</h3>
              <div class="company-info">
                <span class="company-name">{{ exp.company }}</span>
                <span class="duration">{{ exp.duration }}</span>
              </div>
              <div class="job-type">{{ exp.type }} • {{ exp.location }}</div>
            </div>
            <div class="job-description">
              <p>{{ exp.description }}</p>
              <ul class="achievements" *ngIf="exp.achievements.length > 0">
                <li *ngFor="let achievement of exp.achievements">
                  <i class="fas fa-check-circle"></i> {{ achievement }}
                </li>
              </ul>
              <div class="tech-stack">
                <span class="tech-tag" *ngFor="let tech of exp.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div class="loading-container" *ngIf="experiences.length === 0">
        <div class="loading-spinner">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading experience data...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .experience-container {
      padding: var(--space-lg) 0;
    }

    .header-section {
      text-align: center;
      margin-bottom: var(--space-3xl);
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.02);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .page-title {
      font-size: 2.5rem;
      margin-bottom: var(--space-md);
    }

    .page-subtitle {
      font-size: 1.1rem;
      color: var(--gray-300);
      margin: 0;
    }

    .timeline {
      position: relative;
      padding: var(--space-xl) 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: var(--gradient-primary);
      transform: translateX(-50%);
      border-radius: var(--radius-lg);
    }

    .timeline-item {
      position: relative;
      margin-bottom: var(--space-3xl);
      display: flex;
      align-items: center;
    }

    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }

    .timeline-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.4rem;
      box-shadow: var(--shadow-lg);
      border: 3px solid var(--gray-900);
    }

    .timeline-item:nth-child(2) .timeline-icon {
      background: var(--gradient-secondary);
    }

    .timeline-item:nth-child(3) .timeline-icon {
      background: var(--gradient-accent);
    }

    .timeline-content {
      width: calc(50% - 50px);
      padding: var(--space-xl);
      position: relative;
    }

    .timeline-item:nth-child(odd) .timeline-content {
      margin-right: auto;
    }

    .timeline-item:nth-child(even) .timeline-content {
      margin-left: auto;
    }

    .timeline-content::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 12px solid transparent;
    }

    .timeline-item:nth-child(odd) .timeline-content::before {
      right: -24px;
      border-left-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }

    .timeline-item:nth-child(even) .timeline-content::before {
      left: -24px;
      border-right-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }

    .timeline-header {
      margin-bottom: var(--space-lg);
    }

    .job-title {
      font-size: 1.5rem;
      margin-bottom: var(--space-sm);
    }

    .company-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-md);
    }

    .company-name {
      font-weight: 600;
      color: var(--white-color);
      font-size: 1rem;
    }

    .duration {
      color: var(--accent-color);
      font-weight: 500;
      font-size: 0.9rem;
    }

    .job-type {
      color: var(--gray-400);
      font-size: 0.85rem;
      margin-top: var(--space-sm);
      font-style: italic;
    }

    .job-description p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: var(--space-lg);
      color: var(--gray-200);
    }

    .achievements {
      list-style: none;
      margin-bottom: var(--space-xl);
    }

    .achievements li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      margin-bottom: var(--space-sm);
      color: var(--gray-200);
      line-height: 1.5;
    }

    .achievements i {
      color: var(--success-color);
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    .tech-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-lg);
      font-size: 0.85rem;
      font-weight: 500;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-normal);
    }

    .tech-tag:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .timeline-item:nth-child(2) .tech-tag {
      background: var(--gradient-secondary);
    }

    .timeline-item:nth-child(3) .tech-tag {
      background: var(--gradient-accent);
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 25px;
      }

      .timeline-marker {
        left: 25px;
      }

      .timeline-icon {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
      }

      .timeline-item {
        flex-direction: column !important;
        align-items: flex-start;
      }

      .timeline-content {
        width: calc(100% - 65px);
        margin-left: 65px !important;
        margin-right: 0 !important;
        padding: var(--space-lg);
      }

      .timeline-content::before {
        left: -24px !important;
        right: auto !important;
        border-right-color: rgba(255, 255, 255, 0.1) !important;
        border-left-color: transparent !important;
      }

      .page-title {
        font-size: 2rem;
      }

      .company-info {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    /* Loading styles */
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      padding: var(--space-4xl);
    }

    .loading-spinner {
      text-align: center;
      color: var(--gray-300);
    }

    .loading-spinner i {
      font-size: var(--text-4xl);
      color: var(--primary-color);
      margin-bottom: var(--space-lg);
      animation: spin 1s linear infinite;
    }

    .loading-spinner p {
      font-size: var(--text-lg);
      margin: 0;
      opacity: 0.8;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ExperienceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getExperience()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Experience[]) => {
        this.experiences = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getTimelineIconClass(index: number): string {
    return index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight';
  }

  getCardShadowClass(index: number): string {
    return index % 2 === 0 ? 'shadow-glow' : 'shadow-glow-secondary';
  }

  getTitleGradientClass(index: number): string {
    return index % 2 === 0 ? 'text-gradient-primary' : 'text-gradient-secondary';
  }

  getIconClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'fas fa-code';
      case 'contract':
        return 'fas fa-chalkboard-teacher';
      case 'internship':
        return 'fas fa-laptop-code';
      default:
        return 'fas fa-briefcase';
    }
  }
}
