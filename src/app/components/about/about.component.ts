import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, PersonalInfo } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container" *ngIf="personalInfo">
      <div class="hero-section animate-fadeInUp">
        <div class="profile-image animate-float">
          <img [src]="personalInfo.profileImage" [alt]="personalInfo.name" class="profile-img">
          <div class="profile-ring"></div>
        </div>
        <div class="hero-content">
          <h1 class="hero-title">
            Hi, I'm <span class="text-gradient-primary">{{ personalInfo.name }}</span>
          </h1>
          <h2 class="hero-subtitle text-gradient-secondary">{{ personalInfo.title }}</h2>
          <p class="hero-description">
            {{ personalInfo.bio }}
          </p>
          <div class="hero-buttons">
            <a [href]="'mailto:' + personalInfo.email" class="btn btn-primary">
              <i class="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a [href]="'tel:' + personalInfo.phone" class="btn btn-secondary">
              <i class="fas fa-phone"></i>
              Call Me
            </a>
          </div>
        </div>
      </div>

      <div class="info-grid animate-fadeInUp" style="animation-delay: 0.3s">
        <div class="info-card card shadow-glow">
          <div class="info-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Location</h3>
          <p>{{ personalInfo.location }}</p>
        </div>

        <div class="info-card card shadow-glow-secondary">
          <div class="info-icon">
            <i class="fab fa-github"></i>
          </div>
          <h3>GitHub</h3>
          <a [href]="personalInfo.github" target="_blank" class="info-link">
            &#64;{{ getGitHubUsername(personalInfo.github) }}
          </a>
        </div>

        <div class="info-card card shadow-glow-accent">
          <div class="info-icon">
            <i class="fab fa-linkedin"></i>
          </div>
          <h3>LinkedIn</h3>
          <a [href]="personalInfo.linkedin" target="_blank" class="info-link">
            Connect with me
          </a>
        </div>
      </div>

      <div class="about-content animate-fadeInUp" style="animation-delay: 0.6s">
        <div class="content-section card">
          <h2 class="section-title text-gradient-primary">About Me</h2>
          <p class="about-text">
            {{ personalInfo.description }}
          </p>
          <p class="about-text">
            With proficiency in <span class="highlight">Angular</span>, <span class="highlight">Django</span>, 
            <span class="highlight">DRF</span>, and <span class="highlight">Flask</span>, I bring a 
            comprehensive skill set to every project. I'm committed to writing clean, maintainable 
            code and staying updated with the latest industry trends and best practices.
          </p>
          <p class="about-text">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
            projects, and sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <div class="loading-container" *ngIf="!personalInfo">
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading portfolio data...</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 0;
    }

    .hero-section {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: var(--space-2xl);
      align-items: center;
      margin-bottom: var(--space-3xl);
      padding: var(--space-2xl);
      background: rgba(255, 255, 255, 0.03);
      border-radius: var(--radius-3xl);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      opacity: 0.8;
    }

    .profile-image {
      position: relative;
      width: 180px;
      height: 180px;
    }

    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid transparent;
      background: var(--gradient-primary);
      padding: 4px;
      box-shadow: var(--shadow-2xl);
    }

    .profile-ring {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 2px solid transparent;
      border-radius: 50%;
      background: var(--gradient-secondary);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      animation: pulse 4s infinite;
    }

    .hero-content {
      flex: 1;
      padding-left: var(--space-lg);
    }

    .hero-title {
      font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
      margin-bottom: var(--space-md);
      line-height: 1.1;
      font-weight: 800;
      letter-spacing: -0.03em;
    }

    .hero-subtitle {
      font-size: clamp(var(--text-lg), 2.5vw, var(--text-2xl));
      margin-bottom: var(--space-lg);
      opacity: 0.95;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }

    .hero-description {
      font-size: var(--text-base);
      margin-bottom: var(--space-2xl);
      color: var(--gray-300);
      line-height: 1.8;
      font-weight: 400;
      max-width: 600px;
    }

    .hero-buttons {
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-2xl);
      margin-bottom: var(--space-3xl);
    }

    .info-card {
      text-align: center;
      padding: var(--space-2xl);
      transition: var(--transition-normal);
      border-radius: var(--radius-2xl);
      position: relative;
      overflow: hidden;
    }

    .info-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-primary);
      opacity: 0.7;
    }

    .info-card:nth-child(2)::before {
      background: var(--gradient-secondary);
    }

    .info-card:nth-child(3)::before {
      background: var(--gradient-accent);
    }

    .info-card:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: var(--shadow-3xl);
    }

    .info-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto var(--space-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--gradient-primary);
      color: var(--white-color);
      font-size: var(--text-2xl);
      box-shadow: var(--shadow-lg);
      position: relative;
      overflow: hidden;
    }

    .info-icon::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: var(--transition-normal);
    }

    .info-card:hover .info-icon::before {
      left: 100%;
    }

    .info-card:nth-child(2) .info-icon {
      background: var(--gradient-secondary);
    }

    .info-card:nth-child(3) .info-icon {
      background: var(--gradient-accent);
    }

    .info-card h3 {
      margin-bottom: var(--space-sm);
      color: var(--white-color);
      font-size: var(--text-lg);
      font-weight: 700;
    }

    .info-card p {
      color: var(--gray-300);
      margin: 0;
      font-size: var(--text-sm);
      line-height: 1.6;
    }

    .info-link {
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 600;
      transition: var(--transition-normal);
      position: relative;
    }

    .info-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: var(--transition-normal);
    }

    .info-link:hover {
      color: var(--primary-color);
      transform: translateY(-1px);
    }

    .info-link:hover::after {
      width: 100%;
    }

    .about-content {
      margin-top: var(--space-2xl);
    }

    .content-section {
      padding: var(--space-2xl);
      border-radius: var(--radius-2xl);
      position: relative;
      overflow: hidden;
    }

    .content-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-accent);
      opacity: 0.8;
    }

    .section-title {
      font-size: clamp(var(--text-2xl), 3vw, var(--text-4xl));
      margin-bottom: var(--space-2xl);
      text-align: center;
      font-weight: 800;
    }

    .about-text {
      font-size: var(--text-base);
      line-height: 1.8;
      margin-bottom: var(--space-lg);
      color: var(--gray-200);
      font-weight: 400;
    }

    .highlight {
      color: var(--accent-color);
      font-weight: 700;
      padding: var(--space-xs) var(--space-sm);
      background: rgba(6, 182, 212, 0.15);
      border-radius: var(--radius-md);
      border: 1px solid rgba(6, 182, 212, 0.3);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.95em;
    }

    @media (max-width: 1024px) {
      .hero-section {
        gap: var(--space-2xl);
        padding: var(--space-2xl);
      }

      .profile-image {
        width: 150px;
        height: 150px;
      }

      .hero-content {
        padding-left: 0;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        grid-template-columns: 1fr;
        text-align: center;
        gap: var(--space-xl);
        padding: var(--space-xl);
      }

      .profile-image {
        width: 130px;
        height: 130px;
        margin: 0 auto;
      }

      .info-grid {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
      }

      .hero-buttons {
        justify-content: center;
      }

      .content-section {
        padding: var(--space-xl);
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: var(--space-lg);
      }

      .profile-image {
        width: 120px;
        height: 120px;
      }

      .info-card {
        padding: var(--space-xl);
      }

      .content-section {
        padding: var(--space-lg);
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
export class AboutComponent implements OnInit, OnDestroy {
  personalInfo: PersonalInfo | null = null;
  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getPersonalInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe(info => {
        this.personalInfo = info;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getGitHubUsername(url: string): string {
    const match = url.match(/\/([a-zA-Z0-9-]+)$/);
    return match ? match[1] : '';
  }
}
