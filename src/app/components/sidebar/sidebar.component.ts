import { Component, Input, Output, EventEmitter, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar-overlay" *ngIf="isOpen && isMobile" (click)="onToggle()"></div>
    <nav class="sidebar" [class.collapsed]="!isOpen" [class.mobile]="isMobile">
      <div class="sidebar-header">
        <div class="brand" (click)="onToggle()">
          <i class="fas fa-code animate-pulse"></i>
          <span class="brand-text text-gradient-light">Portfolio</span>
        </div>
      </div>
      <div class="sidebar-content">
        <ul class="nav flex-column">
          <!-- <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.1s">
            <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              <i class="fas fa-home"></i>
              <span class="nav-text">Home</span>
            </a>
          </li> -->
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.1s">
            <a class="nav-link" routerLink="/about" routerLinkActive="active">
              <i class="fas fa-user-circle"></i>
              <span class="nav-text">About</span>
            </a>
          </li>
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.2s">
            <a class="nav-link" routerLink="/experience" routerLinkActive="active">
              <i class="fas fa-briefcase"></i>
              <span class="nav-text">Experience</span>
            </a>
          </li>
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.3s">
            <a class="nav-link" routerLink="/projects" routerLinkActive="active">
              <i class="fas fa-project-diagram"></i>
              <span class="nav-text">Projects</span>
            </a>
          </li>
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.4s">
            <a class="nav-link" routerLink="/skills" routerLinkActive="active">
              <i class="fas fa-tools"></i>
              <span class="nav-text">Skills</span>
            </a>
          </li>
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.5s">
            <a class="nav-link" routerLink="/education" routerLinkActive="active">
              <i class="fas fa-graduation-cap"></i>
              <span class="nav-text">Education</span>
            </a>
          </li>
          <li class="nav-item animate-fadeInLeft" style="animation-delay: 0.6s">
            <a class="nav-link" routerLink="/contact" routerLinkActive="active">
              <i class="fas fa-envelope"></i>
              <span class="nav-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .sidebar-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 99;
      backdrop-filter: blur(5px);
    }

    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: 250px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: var(--shadow-2xl);
      transition: var(--transition-normal);
      display: flex;
      flex-direction: column;
    }

    .sidebar.collapsed {
      width: 90px;
    }

    .sidebar.mobile {
      transform: translateX(-100%);
    }

    .sidebar.mobile.show {
      transform: translateX(0);
    }

    .sidebar-header {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      background: var(--gradient-primary);
      position: sticky;
      top: 0;
      z-index: 1;
      box-shadow: var(--shadow-lg);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--white-color);
      cursor: pointer;
      padding: 0.5rem;
      border-radius: var(--radius-lg);
      transition: var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .brand::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transition: var(--transition-normal);
    }

    .brand:hover::before {
      left: 0;
    }

    .brand:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-md);
    }

    .brand i {
      font-size: 1.8rem;
      color: var(--white-color);
    }

    .brand-text {
      font-size: 1.3rem;
      font-weight: 700;
      transition: var(--transition-normal);
      color: var(--white-color) !important;
    }

    .sidebar.collapsed .brand-text {
      opacity: 0;
      width: 0;
    }

    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 1rem 1.25rem;
      color: var(--gray-200);
      text-decoration: none;
      transition: var(--transition-normal);
      border-left: 3px solid transparent;
      margin: 0.25rem 0.75rem;
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--gradient-primary);
      opacity: 0.1;
      transition: var(--transition-normal);
    }

    .nav-link:hover::before {
      left: 0;
    }

    .nav-link:hover {
      color: var(--white-color);
      transform: translateX(5px);
      box-shadow: var(--shadow-glow);
    }

    .nav-link.active {
      background: var(--gradient-primary);
      color: var(--white-color);
      border-left-color: var(--accent-color);
      box-shadow: var(--shadow-glow);
    }

    .nav-link i {
      width: 24px;
      text-align: center;
      margin-right: 0.75rem;
      font-size: 1.2rem;
      transition: var(--transition-normal);
    }

    .nav-text {
      white-space: nowrap;
      transition: var(--transition-normal);
      font-weight: 500;
    }

    .sidebar.collapsed .nav-text {
      opacity: 0;
      width: 0;
    }

    .sidebar.collapsed .nav-link {
      padding: 1rem;
      justify-content: center;
      margin: 0.25rem 0.5rem;
    }

    .sidebar.collapsed .nav-link i {
      margin-right: 0;
    }

    .btn-link {
      color: var(--white-color);
      text-decoration: none;
      padding: 0.5rem;
      border-radius: var(--radius-md);
      transition: var(--transition-normal);
      background: rgba(255, 255, 255, 0.1);
    }

    .btn-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
      box-shadow: var(--shadow-md);
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 250px;
      }

      .sidebar.collapsed {
        transform: translateX(-100%);
      }

      .sidebar.collapsed .nav-text {
        opacity: 1;
        width: auto;
      }

      .sidebar.collapsed .nav-link {
        padding: 1rem 1.25rem;
        justify-content: flex-start;
      }

      .sidebar.collapsed .nav-link i {
        margin-right: 0.75rem;
      }
    }
  `]
})
export class SidebarComponent implements OnInit {
  @Input() isOpen = true;
  @Output() sidebarToggle = new EventEmitter<void>();
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
      });
    }
  }

  onToggle() {
    this.isOpen = !this.isOpen;
    this.sidebarToggle.emit();
  }
} 