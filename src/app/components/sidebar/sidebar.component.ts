import { Component, Input, Output, EventEmitter, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar-overlay" *ngIf="isOpen && isMobile" (click)="onToggle()"></div>
    <nav class="sidebar" [class.collapsed]="!isOpen" [class.mobile]="isMobile">
      <!-- Header Section -->
      <div class="sidebar-header">
        <div class="brand" (click)="onToggle()">
          <div class="brand-icon">
            <i class="fas fa-code"></i>
            <div class="icon-glow"></div>
          </div>
          <div class="brand-content">
            <span class="brand-text">Avinash Kumar</span>
            <!-- <span class="brand-subtitle">Portfolio</span> -->
          </div>
        </div>
      </div>

      <!-- Profile Section -->
      <div class="profile-section" *ngIf="!isCollapsedView">
        <div class="profile-card">
          <div class="profile-avatar">
            <img src="profile.jpg" alt="Avinash Kumar" class="avatar-img">
            <div class="status-indicator"></div>
          </div>
          <div class="profile-info">
            <h4 class="profile-name">Avinash Kumar</h4>
            <p class="profile-title">Full Stack AI Developer</p>
            <div class="profile-stats">
              <div class="stat-item">
                <span class="stat-number">3+</span>
                <span class="stat-label">Years</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">15+</span>
                <span class="stat-label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Section -->
      <div class="sidebar-content">
        <div class="nav-section">
          <h5 class="nav-section-title" *ngIf="!isCollapsedView">Navigation</h5>
          <ul class="nav flex-column">
            <li class="nav-item" *ngFor="let item of navItems; let i = index" 
                [style.animation-delay]="(i * 0.1) + 's'">
              <a class="nav-link" 
                 [routerLink]="item.route" 
                 routerLinkActive="active"
                 [routerLinkActiveOptions]="{exact: item.exact}"
                 [attr.title]="isCollapsedView ? item.label : null"
                 (click)="onNavClick(item)">
                <div class="nav-icon">
                  <i [class]="item.icon"></i>
                  <div class="icon-bg"></div>
                </div>
                <span class="nav-text">{{ item.label }}</span>
                <div class="nav-indicator"></div>
                <div class="tooltip" *ngIf="isCollapsedView">{{ item.label }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="sidebar-footer">
        <div class="footer-content" *ngIf="!isCollapsedView">
          <div class="social-links">
            <a href="https://github.com/avinashkumar2rock" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/avinashkumar2rock" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:avinashkumar2rock@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <!-- <div class="footer-text">
            <p>&copy; 2024 Avinash Kumar</p>
          </div> -->
        </div>
        <div class="toggle-btn" (click)="onToggle()" *ngIf="!isMobile">
          <i class="fas" [class.fa-chevron-left]="isOpen" [class.fa-chevron-right]="!isOpen"></i>
        </div>
      </div>
    </nav>
  `,
  styles: [] // Moved to global styles.scss
})
export class SidebarComponent implements OnInit {
  @Input() isOpen = true;
  @Output() sidebarToggle = new EventEmitter<void>();
  isMobile = false;
  currentRoute = '';

  navItems = [
    { route: '/about', label: 'About', icon: 'fas fa-user-circle', exact: false },
    { route: '/experience', label: 'Experience', icon: 'fas fa-briefcase', exact: false },
    { route: '/projects', label: 'Projects', icon: 'fas fa-project-diagram', exact: false },
    { route: '/skills', label: 'Skills', icon: 'fas fa-tools', exact: false },
    { route: '/education', label: 'Education', icon: 'fas fa-graduation-cap', exact: false },
    { route: '/achievements', label: 'Achievements', icon: 'fas fa-trophy', exact: false },
    { route: '/contact', label: 'Contact', icon: 'fas fa-envelope', exact: false }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobileView();
      window.addEventListener('resize', () => {
        this.checkMobileView();
      });

      // Track current route
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });

      // Add touch event listeners for mobile swipe
      this.addTouchListeners();
    }
  }

  private checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
    // Auto-close sidebar on mobile when switching from desktop
    if (this.isMobile && this.isOpen) {
      // Keep sidebar closed by default on mobile
    }
  }

  private addTouchListeners() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
      if (!startX || !startY) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;
      
      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe from left edge to open sidebar
        if (startX < 20 && diffX < -50 && !this.isOpen && this.isMobile) {
          this.onToggle();
        }
        // Swipe right to close sidebar
        else if (diffX > 50 && this.isOpen && this.isMobile) {
          this.onToggle();
        }
      }
      
      startX = 0;
      startY = 0;
    });
  }

  get isCollapsedView(): boolean {
    return !this.isOpen && !this.isMobile;
  }

  onToggle() {
    this.sidebarToggle.emit();
  }

  onNavClick(item: any) {
    if (this.isMobile) {
      // Close sidebar on mobile after navigation
      setTimeout(() => {
        this.onToggle();
      }, 150);
    }
  }
} 