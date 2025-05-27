import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent],
  template: `
    <div class="app-wrapper">
      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" 
              *ngIf="isMobile" 
              (click)="onSidebarToggle()"
              [class.active]="isSidebarOpen">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <app-sidebar [isOpen]="isSidebarOpen" (sidebarToggle)="onSidebarToggle()"></app-sidebar>
      <main class="main-content" [class.sidebar-collapsed]="!isSidebarOpen">
        <div class="content-container">
          <div class="content-wrapper">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .app-wrapper {
      display: flex;
      min-height: 100vh;
      background: var(--gradient-dark);
      position: relative;
      overflow-x: hidden;
    }

    .app-wrapper::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%);
      pointer-events: none;
      z-index: -1;
      animation: float 8s ease-in-out infinite;
    }

    .main-content {
      flex: 1;
      margin-left: 280px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      min-height: 100vh;
    }

    .main-content.sidebar-collapsed {
      margin-left: 120px;
    }

    .content-container {
      padding: var(--space-lg);
      min-height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .content-wrapper {
      width: 100%;
      max-width: 1400px;
      padding: var(--space-2xl);
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-2xl);
      box-shadow: var(--shadow-2xl);
      position: relative;
      overflow: hidden;
    }

    .content-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-primary);
      opacity: 0.6;
    }

    .content-wrapper::after {
      content: '';
      position: absolute;
      top: -100%;
      left: -100%;
      width: 300%;
      height: 300%;
      background: 
        radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%);
      animation: float 10s ease-in-out infinite reverse;
      pointer-events: none;
    }

    @media (max-width: 1200px) {
      .content-container {
        padding: var(--space-md);
      }
      
      .content-wrapper {
        padding: var(--space-xl);
      }
    }

    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
      }

      .main-content.sidebar-collapsed {
        margin-left: 0;
      }

      .content-container {
        padding: var(--space-xs);
        min-height: calc(100vh - var(--space-xs) * 2);
      }

      .content-wrapper {
        padding: var(--space-md);
        border-radius: var(--radius-xl);
        max-width: none;
        margin: 0;
        box-shadow: var(--shadow-lg);
      }
    }

    @media (max-width: 480px) {
      .app-wrapper::before {
        background: 
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 40%);
      }

      .content-container {
        padding: var(--space-xs);
      }

      .content-wrapper {
        padding: var(--space-sm);
        border-radius: var(--radius-lg);
        border: 1px solid rgba(255, 255, 255, 0.05);
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(20px);
      }
    }

    @media (max-width: 360px) {
      .content-container {
        padding: 0.25rem;
      }

      .content-wrapper {
        padding: var(--space-xs);
        border-radius: var(--radius-md);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1001;
      width: 50px;
      height: 50px;
      background: var(--gradient-primary);
      border: none;
      border-radius: var(--radius-xl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      box-shadow: var(--shadow-xl);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .mobile-menu-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4);
    }

    .mobile-menu-btn:active {
      transform: scale(0.95);
    }

    .hamburger-line {
      width: 20px;
      height: 2px;
      background: var(--white-color);
      border-radius: 1px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  isSidebarOpen = true;
  isMobile = false;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobileView();
      window.addEventListener('resize', () => {
        this.checkMobileView();
      });

      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      ).subscribe(() => {
        window.scrollTo(0, 0);
        // Auto-close sidebar on mobile after navigation
        if (this.isMobile && this.isSidebarOpen) {
          this.isSidebarOpen = false;
        }
      });
    }
  }

  private checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
    // Close sidebar by default on mobile
    if (this.isMobile) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
