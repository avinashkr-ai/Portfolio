import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  protected destroy$ = new Subject<void>();
  isSidebarCollapsed = false;

  constructor(protected portfolioService: PortfolioService) {}

  ngOnInit() {
    this.initializeComponent();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected abstract initializeComponent(): void;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    const sidebar = document.querySelector('.sidebar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
    if (navbarToggle) {
      navbarToggle.classList.toggle('active');
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth <= 768) {
      this.collapseSidebar();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector('.sidebar');
      const navbarToggle = document.querySelector('.navbar-toggle');
      
      if (sidebar && !sidebar.contains(event.target as Node) && 
          navbarToggle && !navbarToggle.contains(event.target as Node)) {
        this.collapseSidebar();
      }
    }
  }

  private collapseSidebar() {
    this.isSidebarCollapsed = true;
    const sidebar = document.querySelector('.sidebar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    
    if (sidebar) {
      sidebar.classList.add('collapsed');
    }
    if (navbarToggle) {
      navbarToggle.classList.remove('active');
    }
  }
} 