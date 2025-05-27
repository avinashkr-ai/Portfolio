import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-wrapper">
      <app-sidebar [isOpen]="isSidebarOpen" (sidebarToggle)="onSidebarToggle()"></app-sidebar>
      <main class="main-content" [class.sidebar-collapsed]="!isSidebarOpen">
        <div class="content-container">
          <div class="content-wrapper animate-slideInScale">
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
      margin-left: 250px;
      transition: var(--transition-normal);
      position: relative;
      min-height: 100vh;
    }

    .main-content.sidebar-collapsed {
      margin-left: 90px;
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
        padding: var(--space-sm);
      }

      .content-wrapper {
        padding: var(--space-lg);
        border-radius: var(--radius-xl);
        max-width: none;
      }
    }

    @media (max-width: 480px) {
      .content-container {
        padding: var(--space-xs);
      }

      .content-wrapper {
        padding: var(--space-md);
        border-radius: var(--radius-lg);
      }
    }
  `]
})
export class AppComponent {
  isSidebarOpen = true;

  onSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
