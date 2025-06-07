import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base/base.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="top-navbar">
      <div class="navbar-brand">
        <div class="brand-icon">
          <i class="fas fa-code"></i>
        </div>
        <div class="brand-content">
          <span class="brand-text">Avinash Kumar</span>
          <span class="brand-subtitle">Full Stack Developer</span>
        </div>
      </div>
      <button class="navbar-toggle" (click)="toggleSidebar()" [class.active]="isSidebarCollapsed">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </button>
    </nav>
  `
})
export class TopNavbarComponent extends BaseComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(portfolioService: PortfolioService) {
    super(portfolioService);
  }

  protected initializeComponent(): void {
    // Initialize any navbar-specific logic here
  }

  override toggleSidebar() {
    super.toggleSidebar();
    this.sidebarToggle.emit();
  }
} 