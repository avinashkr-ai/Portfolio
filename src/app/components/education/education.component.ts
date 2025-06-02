import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Education, Certification } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Educational Background</h1>
        <p class="page-subtitle">My academic journey and learning milestones</p>
      </div>

      <div class="timeline" *ngIf="education.length > 0">
        <div 
          class="timeline-item" 
          *ngFor="let edu of education; let i = index"
        >
          <div class="timeline-marker">
            <div class="timeline-icon" [class]="getTimelineIconClass(i)">
              <i [class]="getEducationIcon(edu.degree)"></i>
                  </div>
                </div>
          <div class="timeline-content card" [class]="getCardShadowClass(i)">
            <div class="timeline-header">
              <h3 class="degree-title" [class]="getTitleGradientClass(i)">{{ edu.degree }}</h3>
              <div class="institution-info">
                <span class="institution-name">{{ edu.institution }}</span>
                <span class="duration">{{ edu.duration }}</span>
              </div>
              <div class="location-grade">{{ edu.location }} • {{ edu.grade }}</div>
            </div>
            <div class="education-description">
              <p>{{ edu.description }}</p>
              
              <!-- Achievements -->
              <ul class="achievements" *ngIf="edu.achievements && edu.achievements.length > 0">
                <li *ngFor="let achievement of edu.achievements">
                  <i class="fas fa-medal"></i> {{ achievement }}
                </li>
              </ul>
              
              <!-- Coursework -->
              <div class="coursework-section" *ngIf="edu.coursework && edu.coursework.length > 0">
                <h4 class="section-subtitle">Key Coursework</h4>
                <div class="coursework-tags">
                  <span class="coursework-tag" *ngFor="let course of edu.coursework">{{ course }}</span>
                </div>
              </div>
              
              <!-- Academic Projects -->
              <div class="projects-section" *ngIf="edu.projects && edu.projects.length > 0">
                <h4 class="section-subtitle">Academic Projects</h4>
                <div class="academic-projects">
                  <div class="project-item" *ngFor="let project of edu.projects">
                    <h5 class="project-title">{{ project.title }}</h5>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="tech-stack">
                      <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>

      <!-- Certifications Section -->
      <div class="certifications-section" *ngIf="certifications.length > 0">
        <div class="section-header">
          <h2 class="section-title text-gradient-accent">Certifications & Achievements</h2>
          <p class="section-subtitle">Professional certifications and competition achievements</p>
              </div>
        
        <div class="certifications-grid">
          <div class="certification-card card" *ngFor="let cert of certifications; let i = index" [class]="getCertificationShadowClass(i)">
            <div class="cert-header">
              <div class="cert-icon" [class]="getCertificationIconClass(cert.type)">
                <i [class]="getCertificationIcon(cert.type)"></i>
              </div>
              <div class="cert-meta">
                <h4 class="cert-title">{{ cert.title }}</h4>
                <span class="cert-issuer">{{ cert.issuer }}</span>
                <span class="cert-year">{{ cert.year }}</span>
              </div>
            </div>
            <p class="cert-description">{{ cert.description }}</p>
            <div class="cert-skills" *ngIf="cert.skills && cert.skills.length > 0">
              <span class="skill-tag" *ngFor="let skill of cert.skills">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div class="loading-container" *ngIf="education.length === 0 && certifications.length === 0">
        <div class="loading-spinner">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading education data...</p>
        </div>
      </div>
    </div>
  `,
  styles: [] // Moved to global styles.scss
})
export class EducationComponent implements OnInit, OnDestroy {
  education: Education[] = [];
  certifications: Certification[] = [];
  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getEducation()
      .pipe(takeUntil(this.destroy$))
      .subscribe(education => {
        this.education = education;
      });

    this.portfolioService.getCertifications()
      .pipe(takeUntil(this.destroy$))
      .subscribe(certifications => {
        this.certifications = certifications;
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
    const classes = ['shadow-glow', 'shadow-glow-secondary', 'shadow-glow-accent'];
    return classes[index % classes.length];
  }

  getTitleGradientClass(index: number): string {
    const classes = ['text-gradient-primary', 'text-gradient-secondary', 'text-gradient-accent'];
    return classes[index % classes.length];
    }

  getEducationIcon(degree: string): string {
    if (degree.toLowerCase().includes('master')) {
      return 'fas fa-graduation-cap';
    } else if (degree.toLowerCase().includes('bachelor')) {
      return 'fas fa-university';
    }
    return 'fas fa-book';
  }

  getCertificationIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'competition':
        return 'fas fa-trophy';
      case 'professional development':
        return 'fas fa-certificate';
      default:
        return 'fas fa-award';
    }
  }

  getCertificationIconClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'competition':
        return 'competition';
      case 'professional development':
        return 'professional';
      default:
        return 'competition';
    }
  }

  getCertificationShadowClass(index: number): string {
    const classes = ['shadow-glow', 'shadow-glow-secondary', 'shadow-glow-accent'];
    return classes[index % classes.length];
  }
}
