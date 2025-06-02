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
    <div class="page-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Professional Experience</h1>
        <p class="page-subtitle">My journey in the world of technology</p>
          </div>

      <div class="timeline" *ngIf="experiences.length > 0">
        <div 
          class="timeline-item" 
          *ngFor="let exp of experiences; let i = index"
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
  styles: [] // Moved to global styles.scss
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
