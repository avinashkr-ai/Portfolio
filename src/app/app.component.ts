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
  styles: []
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
      window.addEventListener('resize', () => this.checkMobileView());
      
      // Close sidebar on mobile by default
      if (this.isMobile) {
        this.isSidebarOpen = false;
      }
    }

    // Close sidebar on route change for mobile
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.isMobile) {
          this.isSidebarOpen = false;
        }
      });
  }

  private checkMobileView() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.isSidebarOpen = true;
      }
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
