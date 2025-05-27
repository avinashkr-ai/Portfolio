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
            <span class="brand-subtitle">Portfolio</span>
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
            <p class="profile-title">Full Stack Developer</p>
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

        <!-- Quick Actions -->
        <!-- <div class="quick-actions" *ngIf="!isCollapsedView">
          <h5 class="nav-section-title">Quick Actions</h5>
          <div class="action-buttons">
            <a href="mailto:avinashkumar2rock@gmail.com" class="action-btn">
              <i class="fas fa-envelope"></i>
              <span>Email Me</span>
            </a>
            <a href="tel:+917071955977" class="action-btn">
              <i class="fas fa-phone"></i>
              <span>Call Me</span>
            </a>
            <a href="https://github.com/avinashkumar2rock" target="_blank" class="action-btn">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div> -->
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
          <div class="footer-text">
            <p>&copy; 2024 Avinash Kumar</p>
          </div>
        </div>
        <div class="toggle-btn" (click)="onToggle()" *ngIf="!isMobile">
          <i class="fas" [class.fa-chevron-left]="isOpen" [class.fa-chevron-right]="!isOpen"></i>
        </div>
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
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 99;
      backdrop-filter: blur(10px);
      animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      width: 280px;
      background: linear-gradient(180deg, 
        rgba(15, 15, 35, 0.95) 0%, 
        rgba(30, 27, 75, 0.95) 50%, 
        rgba(49, 46, 129, 0.95) 100%);
      backdrop-filter: blur(25px);
      border-right: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 50px rgba(124, 58, 237, 0.3);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .sidebar::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, 
        rgba(124, 58, 237, 0.1) 0%, 
        rgba(6, 182, 212, 0.1) 50%, 
        rgba(245, 158, 11, 0.1) 100%);
      opacity: 0.5;
      pointer-events: none;
    }

    .sidebar.collapsed {
      width: 120px;
    }

    .sidebar.mobile {
      transform: translateX(-100%);
    }

    .sidebar.mobile:not(.collapsed) {
      transform: translateX(0);
    }

    /* Header Section */
    .sidebar-header {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1.5rem;
      background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.9) 0%, 
        rgba(139, 92, 246, 0.9) 100%);
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sidebar-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-accent);
      opacity: 0.8;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--white-color);
      cursor: pointer;
      padding: 0.75rem;
      border-radius: var(--radius-xl);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      width: 100%;
      justify-content: flex-start;
    }

    .brand-icon {
      position: relative;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      flex-shrink: 0;
    }

    .brand-icon i {
      font-size: 1.5rem;
      color: var(--white-color);
      z-index: 2;
      position: relative;
    }

    .icon-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
      50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
    }

    .brand-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s ease;
    }

    .brand-text {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--white-color);
      line-height: 1.2;
      margin: 0;
    }

    .brand-subtitle {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      margin: 0;
    }

    .sidebar.collapsed .brand-content {
      opacity: 0;
      width: 0;
      overflow: hidden;
    }

    /* Profile Section */
    .profile-section {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      animation: slideInLeft 0.6s ease-out;
    }

    @keyframes slideInLeft {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    .profile-card {
      background: rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-xl);
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .profile-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--gradient-secondary);
    }

    .profile-avatar {
      position: relative;
      width: 60px;
      height: 60px;
      margin: 0 auto 1rem;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid rgba(255, 255, 255, 0.2);
    }

    .status-indicator {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 16px;
      height: 16px;
      background: var(--success-color);
      border-radius: 50%;
      border: 2px solid var(--white-color);
      animation: statusPulse 2s infinite;
    }

    @keyframes statusPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
    }

    .profile-info {
      text-align: center;
    }

    .profile-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--white-color);
      margin: 0 0 0.25rem 0;
    }

    .profile-title {
      font-size: 0.85rem;
      color: var(--gray-300);
      margin: 0 0 1rem 0;
    }

    .profile-stats {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--accent-color);
      line-height: 1;
    }

    .stat-label {
      font-size: 0.75rem;
      color: var(--gray-400);
      margin-top: 0.25rem;
    }

    /* Navigation Section */
    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: 1rem 0;
      position: relative;
    }

    .nav-section {
      padding: 0 1rem;
    }

    .nav-section-title {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--gray-400);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0 0 1rem 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-item {
      margin-bottom: 0.5rem;
      animation: slideInLeft 0.6s ease-out both;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 1rem 1.25rem;
      color: var(--gray-200);
      text-decoration: none;
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      margin: 0 0.5rem;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        rgba(124, 58, 237, 0.2) 0%, 
        rgba(139, 92, 246, 0.2) 100%);
      transition: all 0.4s ease;
    }

    .nav-link:hover::before {
      left: 0;
    }

    .nav-link:hover {
      color: var(--white-color);
      background: rgba(255, 255, 255, 0.05);
    }

    .nav-link.active {
      background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.3) 0%, 
        rgba(139, 92, 246, 0.3) 100%);
      color: var(--white-color);
      border: 1px solid rgba(124, 58, 237, 0.5);
    }

    .nav-link.active .nav-indicator {
      opacity: 1;
      transform: scaleY(1);
    }

    .nav-icon {
      position: relative;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .nav-icon i {
      font-size: 1.1rem;
      z-index: 2;
      position: relative;
    }

    .icon-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35px;
      height: 35px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;
      opacity: 0;
    }

    .nav-link:hover .icon-bg,
    .nav-link.active .icon-bg {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }

    .nav-text {
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      flex: 1;
    }

    .nav-indicator {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) scaleY(0);
      width: 3px;
      height: 60%;
      background: var(--gradient-accent);
      border-radius: 2px;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .tooltip {
      position: absolute;
      left: calc(100% + 15px);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, 
        rgba(0, 0, 0, 0.95) 0%, 
        rgba(30, 30, 30, 0.95) 100%);
      color: var(--white-color);
      padding: 0.5rem 0.75rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }

    .tooltip::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 5px 0;
      border-color: transparent rgba(0, 0, 0, 0.95) transparent transparent;
    }

    .nav-link:hover .tooltip {
      opacity: 1;
      visibility: visible;
      left: calc(100% + 10px);
      transform: translateY(-50%) translateX(0);
    }

    .sidebar.collapsed .nav-text {
      opacity: 0;
      width: 0;
      overflow: hidden;
    }

    .sidebar.collapsed .nav-link {
      padding: 1rem;
      justify-content: center;
      margin: 0.5rem;
    }

    .sidebar.collapsed .nav-icon {
      margin-right: 0;
    }

    /* Quick Actions */
    .quick-actions {
      padding: 1.5rem 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 1rem;
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
      color: var(--gray-200);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--white-color);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .action-btn i {
      width: 16px;
      text-align: center;
    }

    /* Footer Section */
    .sidebar-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
      position: relative;
    }

    .footer-content {
      text-align: center;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .social-link {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: var(--gray-300);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--gradient-primary);
      color: var(--white-color);
      transform: translateY(-2px);
    }

    .footer-text p {
      font-size: 0.75rem;
      color: var(--gray-400);
      margin: 0;
    }

    .toggle-btn {
      position: absolute;
      top: -15px;
      right: 15px;
      width: 30px;
      height: 30px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--white-color);
      font-size: 0.8rem;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-lg);
    }

    .toggle-btn:hover {
      transform: scale(1.1);
      box-shadow: var(--shadow-xl);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .sidebar {
        width: 100vw;
        max-width: 320px;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      .sidebar:not(.collapsed) {
        transform: translateX(0);
      }

      .sidebar.collapsed {
        transform: translateX(-100%);
        width: 100vw;
        max-width: 320px;
      }

      .sidebar-header {
        height: 70px;
        padding: 0 1rem;
      }

      .brand-icon {
        width: 35px;
        height: 35px;
      }

      .brand-icon i {
        font-size: 1.2rem;
      }

      .brand-text {
        font-size: 1.2rem;
      }

      .brand-subtitle {
        font-size: 0.8rem;
      }

      .profile-section {
        padding: 1rem;
      }

      .profile-card {
        padding: 1rem;
      }

      .profile-avatar {
        width: 50px;
        height: 50px;
      }

      .profile-name {
        font-size: 1rem;
      }

      .profile-title {
        font-size: 0.8rem;
      }

      .nav-section {
        padding: 0 0.5rem;
      }

      .nav-link {
        padding: 1rem;
        margin: 0.25rem;
        border-radius: var(--radius-lg);
        min-height: 56px;
        display: flex;
        align-items: center;
      }

      .nav-icon {
        width: 44px;
        height: 44px;
        margin-right: 1rem;
      }

      .nav-icon i {
        font-size: 1.2rem;
      }

      .nav-text {
        font-size: 1rem;
        font-weight: 500;
      }

      .sidebar-footer {
        padding: 1rem;
      }

      .social-links {
        gap: 1.5rem;
        margin-bottom: 1rem;
      }

      .social-link {
        width: 44px;
        height: 44px;
        font-size: 1.1rem;
      }

      .toggle-btn {
        display: none;
      }

      .tooltip {
        display: none;
      }

      /* Mobile-specific animations */
      .nav-item {
        animation: slideInRight 0.4s ease-out both;
      }

      .nav-item:nth-child(1) { animation-delay: 0.1s; }
      .nav-item:nth-child(2) { animation-delay: 0.15s; }
      .nav-item:nth-child(3) { animation-delay: 0.2s; }
      .nav-item:nth-child(4) { animation-delay: 0.25s; }
      .nav-item:nth-child(5) { animation-delay: 0.3s; }
      .nav-item:nth-child(6) { animation-delay: 0.35s; }
      .nav-item:nth-child(7) { animation-delay: 0.4s; }
    }

    @media (max-width: 480px) {
      .sidebar {
        max-width: 280px;
      }

      .sidebar-header {
        height: 60px;
        padding: 0 0.75rem;
      }

      .brand-icon {
        width: 30px;
        height: 30px;
      }

      .brand-icon i {
        font-size: 1rem;
      }

      .brand-text {
        font-size: 1.1rem;
      }

      .brand-subtitle {
        font-size: 0.75rem;
      }

      .profile-section {
        padding: 0.75rem;
      }

      .profile-avatar {
        width: 45px;
        height: 45px;
      }

      .nav-link {
        padding: 0.875rem;
        min-height: 52px;
      }

      .nav-icon {
        width: 40px;
        height: 40px;
      }

      .nav-text {
        font-size: 0.95rem;
      }

      .sidebar-footer {
        padding: 0.75rem;
      }

      .social-link {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(30px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    /* Scrollbar Styling */
    .sidebar-content::-webkit-scrollbar {
      width: 4px;
    }

    .sidebar-content::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    .sidebar-content::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
    }

    .sidebar-content::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `]
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