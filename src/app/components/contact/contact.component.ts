import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService, PersonalInfo, ContactInfo } from '../../services/portfolio.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="header-section" *ngIf="personalInfo">
        <div class="profile-section">
          <div class="profile-image">
            <img [src]="personalInfo.profileImage" [alt]="personalInfo.name" class="profile-img">
            <div class="profile-ring"></div>
          </div>
          <div class="header-content">
            <h1 class="page-title text-gradient-primary">Get In Touch</h1>
            <p class="page-subtitle">Let's discuss your next project or collaboration opportunity</p>
          </div>
        </div>
      </div>

      <div class="container-fluid">
      <div class="row">
          <!-- Send Message Section -->
          <div class="col-lg-12">
            <div class="form-card card shadow-glow">
              <div class="form-header">
                <div class="form-icon">
                  <i class="fas fa-paper-plane"></i>
                </div>
                <h3 class="form-title text-gradient-primary">Send Message</h3>
                <p class="form-subtitle">Fill out the form below and I'll get back to you soon</p>
              </div>
              
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name" class="form-label">
                      <i class="fas fa-user"></i>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name" 
                      name="name" 
                      [(ngModel)]="contact.name" 
                      required
                      placeholder="Enter your full name"
                    >
                    <div class="form-focus-line"></div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">
                      <i class="fas fa-envelope"></i>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      name="email" 
                      [(ngModel)]="contact.email" 
                      required
                      placeholder="Enter your email address"
                    >
                    <div class="form-focus-line"></div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject" class="form-label">
                    <i class="fas fa-tag"></i>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="subject" 
                    name="subject" 
                    [(ngModel)]="contact.subject" 
                    required
                    placeholder="What's this about?"
                  >
                  <div class="form-focus-line"></div>
                </div>
                
                <div class="form-group">
                  <label for="message" class="form-label">
                    <i class="fas fa-comment-dots"></i>
                    Message
                  </label>
                  <textarea 
                    class="form-control" 
                    id="message" 
                    name="message" 
                    rows="6" 
                    [(ngModel)]="contact.message" 
                    required
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                  <div class="form-focus-line"></div>
                </div>
                
                <button 
                  type="submit" 
                  class="btn btn-primary btn-send" 
                  [disabled]="!contactForm.form.valid"
                  [class.loading]="isSubmitting"
                >
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i>
                    Send Message
                  </span>
                  <span *ngIf="isSubmitting">
                    <i class="fas fa-spinner fa-spin"></i>
                    Sending...
                  </span>
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information Section -->
          <div class="col-lg-12" *ngIf="contactInfo">
            <div class="info-card card shadow-glow-secondary">
              <div class="info-header">
                <div class="info-icon">
                  <i class="fas fa-address-card"></i>
                </div>
                <h3 class="info-title text-gradient-secondary">Contact Information</h3>
        </div>

              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Email</h4>
                    <a [href]="'mailto:' + contactInfo.email" class="contact-link">
                      {{ contactInfo.email }}
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Phone</h4>
                    <a [href]="'tel:' + contactInfo.phone" class="contact-link">
                      {{ contactInfo.phone }}
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Location</h4>
                    <span class="contact-text">{{ contactInfo.location }}</span>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Response Time</h4>
                    <span class="contact-text">{{ contactInfo.responseTime }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Connect With Me Section -->
          <div class="col-lg-12" *ngIf="contactInfo">
            <div class="social-card card">
              <div class="social-header">
                <div class="social-icon">
                  <i class="fas fa-share-alt"></i>
                  <div class="icon-glow"></div>
                </div>
                <h3 class="social-title">Connect With Me</h3>
                <p class="social-subtitle">Let's stay connected and share ideas</p>
              </div>
              
              <div class="social-links">
                <a 
                  *ngFor="let social of contactInfo.socialLinks" 
                  [href]="social.url" 
                  target="_blank" 
                  class="social-link"
                  [class]="getSocialLinkClass(social.platform)"
                  (mouseenter)="onSocialHover(social.platform)"
                  (mouseleave)="onSocialLeave()"
                >
                  <div class="social-icon-wrapper">
                    <i [class]="social.icon"></i>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="social-content">
                    <span class="social-platform">{{ social.platform }}</span>
                    <span class="social-handle">{{ social.handle }}</span>
                  </div>
                  <div class="social-hover-effect"></div>
                  <div class="social-arrow">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </div>

              <div class="social-stats">
                <div class="stat-item">
                  <div class="stat-icon">
                    <i class="fas fa-users"></i>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="stat-content">
                    <span class="stat-value">500+</span>
                    <span class="stat-label">Connections</span>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">
                    <i class="fas fa-code-branch"></i>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="stat-content">
                    <span class="stat-value">100+</span>
                    <span class="stat-label">Repositories</span>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">
                    <i class="fas fa-star"></i>
                    <div class="icon-glow"></div>
                  </div>
                  <div class="stat-content">
                    <span class="stat-value">1k+</span>
                    <span class="stat-label">Stars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div class="loading-container" *ngIf="!personalInfo || !contactInfo">
        <div class="loading-spinner">
          <i class="fas fa-spinner fa-spin"></i>
          <p>Loading contact information...</p>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" (click)="toggleSidebar()">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </button>

    <!-- Mobile Menu Toggle Button -->
    <div class="menu-toggle-btn" (click)="toggleSidebar()">
      <i class="fas fa-bars"></i>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: var(--space-lg) 0;
    }

    .header-section {
      margin-bottom: var(--space-3xl);
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.03);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all var(--transition-normal);
    }

    .header-section:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.12);
    }

    .profile-section {
      display: flex;
      align-items: center;
      gap: var(--space-xl);
      justify-content: center;
    }

    .profile-image {
      position: relative;
      width: 120px;
      height: 120px;
      flex-shrink: 0;
    }

    .profile-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid transparent;
      background: var(--gradient-primary);
      padding: 3px;
      box-shadow: var(--shadow-xl);
      transition: all var(--transition-normal);
    }

    .profile-img:hover {
      transform: scale(1.05);
    }

    .profile-ring {
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border: 2px solid transparent;
      border-radius: 50%;
      background: var(--gradient-secondary);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }

    .header-content {
      text-align: left;
    }

    .page-title {
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      margin-bottom: var(--space-lg);
      font-weight: 700;
    }

    .page-subtitle {
      font-size: var(--text-base);
      color: var(--gray-300);
      margin: 0;
      line-height: 1.6;
    }

    .container-fluid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--space-lg);
    }

    .row {
      margin: 0 -var(--space-md);
    }

    .row > [class*="col-"] {
      padding: 0 var(--space-md);
      margin-bottom: var(--space-2xl);
    }

    .form-card, .info-card, .social-card {
      padding: var(--space-xl);
      border-radius: var(--radius-2xl);
      position: relative;
      overflow: hidden;
      height: 100%;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all var(--transition-normal);
    }

    .form-card:hover, .info-card:hover, .social-card:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
      box-shadow: var(--shadow-xl);
    }

    .form-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-primary);
      opacity: 0.8;
    }

    .info-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-secondary);
      opacity: 0.8;
    }

    .social-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-accent);
      opacity: 0.8;
    }

    .form-header, .info-header, .social-header {
      text-align: center;
      margin-bottom: var(--space-xl);
    }

    .form-icon, .info-icon, .social-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto var(--space-md);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--gradient-primary);
      color: var(--white-color);
      font-size: var(--text-xl);
      box-shadow: var(--shadow-lg);
      transition: all var(--transition-normal);
    }

    .info-icon {
      background: var(--gradient-secondary);
    }

    .social-icon {
      background: var(--gradient-accent);
    }

    .form-icon:hover, .info-icon:hover, .social-icon:hover {
      transform: scale(1.05);
    }

    .form-title, .info-title, .social-title {
      font-size: var(--text-lg);
      margin-bottom: var(--space-sm);
      font-weight: 700;
    }

    .form-subtitle, .social-subtitle {
      color: var(--gray-300);
      font-size: var(--text-sm);
      margin: 0;
    }

    .contact-form {
      margin-top: var(--space-lg);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
      margin-bottom: var(--space-lg);
    }

    .form-group {
      margin-bottom: var(--space-lg);
      position: relative;
    }

    .form-label {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      font-weight: 600;
      color: var(--gray-200);
      margin-bottom: var(--space-sm);
      font-size: var(--text-sm);
    }

    .form-label i {
      color: var(--accent-color);
      width: 18px;
      font-size: var(--text-sm);
    }

    .form-control {
      width: 100%;
      padding: var(--space-md) var(--space-lg);
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-lg);
      color: var(--white-color);
      font-size: var(--text-sm);
      transition: all var(--transition-normal);
      position: relative;
      font-family: 'Inter', sans-serif;
    }

    .form-control::placeholder {
      color: var(--gray-400);
      font-weight: 400;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-2px);
    }

    .form-focus-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: var(--gradient-primary);
      transition: var(--transition-normal);
      border-radius: var(--radius-full);
    }

    .form-control:focus + .form-focus-line {
      width: 100%;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 140px;
      line-height: 1.6;
    }

    .btn-send {
      width: 100%;
      padding: var(--space-md) var(--space-xl);
      background: var(--gradient-primary);
      border: none;
      border-radius: var(--radius-lg);
      color: var(--white-color);
      font-size: var(--text-base);
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
      margin-top: var(--space-lg);
    }

    .btn-send:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .contact-details {
      display: grid;
      gap: var(--space-lg);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-lg);
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all var(--transition-normal);
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.15);
      box-shadow: var(--shadow-lg);
    }

    .contact-item-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gradient-secondary);
      border-radius: 50%;
      color: var(--white-color);
      font-size: var(--text-lg);
      flex-shrink: 0;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
    }

    .contact-item:hover .contact-item-icon {
      transform: scale(1.05);
    }

    .contact-item-content h4 {
      margin: 0 0 var(--space-xs) 0;
      color: var(--white-color);
      font-size: var(--text-base);
      font-weight: 600;
    }

    .contact-link {
      color: var(--accent-color);
      text-decoration: none;
      font-size: var(--text-sm);
      transition: all var(--transition-fast);
    }

    .contact-link:hover {
      color: var(--primary-color);
      text-decoration: underline;
    }

    .contact-text {
      color: var(--gray-300);
      font-size: var(--text-sm);
    }

    .social-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-2xl);
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-xl);
      color: var(--gray-200);
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: all var(--transition-normal);
    }

    .social-link:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .social-icon-wrapper {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: all var(--transition-normal);
    }

    .social-link:hover .social-icon-wrapper {
      transform: scale(1.1);
      background: var(--gradient-accent);
    }

    .social-icon-wrapper i {
      font-size: var(--text-xl);
      color: var(--white-color);
      transition: all var(--transition-normal);
    }

    .icon-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      opacity: 0;
      transition: all var(--transition-normal);
    }

    .social-link:hover .icon-glow {
      opacity: 1;
      animation: pulse 2s infinite;
    }

    .social-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .social-platform {
      font-weight: 600;
      font-size: var(--text-lg);
      color: var(--white-color);
    }

    .social-handle {
      font-size: var(--text-sm);
      color: var(--gray-400);
    }

    .social-arrow {
      opacity: 0;
      transform: translateX(-10px);
      transition: all var(--transition-normal);
      color: var(--accent-color);
    }

    .social-link:hover .social-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .social-hover-effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .social-link:hover .social-hover-effect {
      transform: translateX(100%);
    }

    .social-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-lg);
      padding-top: var(--space-xl);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-lg);
      background: rgba(255, 255, 255, 0.03);
      border-radius: var(--radius-lg);
      transition: all var(--transition-normal);
    }

    .stat-item:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .stat-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--gradient-accent);
      color: var(--white-color);
      font-size: var(--text-lg);
      box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
      transition: all var(--transition-normal);
    }

    .stat-item:hover .stat-icon {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
    }

    .stat-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .stat-value {
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--white-color);
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat-label {
      font-size: var(--text-sm);
      color: var(--gray-400);
    }

    /* Platform-specific styles */
    .social-link.github {
      border-color: rgba(36, 41, 46, 0.3);
    }

    .social-link.github:hover {
      background: rgba(36, 41, 46, 0.2);
      border-color: rgba(36, 41, 46, 0.5);
    }

    .social-link.linkedin {
      border-color: rgba(0, 119, 181, 0.3);
    }

    .social-link.linkedin:hover {
      background: rgba(0, 119, 181, 0.2);
      border-color: rgba(0, 119, 181, 0.5);
    }

    .social-link.email {
      border-color: rgba(234, 67, 53, 0.3);
    }

    .social-link.email:hover {
      background: rgba(234, 67, 53, 0.2);
      border-color: rgba(234, 67, 53, 0.5);
    }

    .social-link.phone {
      border-color: rgba(52, 168, 83, 0.3);
    }

    .social-link.phone:hover {
      background: rgba(52, 168, 83, 0.2);
      border-color: rgba(52, 168, 83, 0.5);
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.8;
      }
      100% {
        transform: scale(1);
        opacity: 0.5;
      }
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .contact-container {
        padding: var(--space-md) 0;
      }

      .header-section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg);
      }

      .profile-section {
        flex-direction: column;
        text-align: center;
        gap: var(--space-md);
      }

      .profile-image {
        width: 90px;
        height: 90px;
      }

      .profile-ring {
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
      }

      .header-content {
        text-align: center;
      }

      .page-title {
        font-size: var(--text-2xl);
        margin-bottom: var(--space-sm);
      }

      .page-subtitle {
        font-size: var(--text-sm);
      }

      .container-fluid {
        padding: 0 var(--space-sm);
      }

      .row {
        margin: 0;
      }

      .row > [class*="col-"] {
        padding: 0;
        margin-bottom: var(--space-lg);
      }

      .form-card, .info-card, .social-card {
        padding: var(--space-lg);
        margin: 0 var(--space-sm);
      }

      .form-header, .info-header, .social-header {
        margin-bottom: var(--space-lg);
      }

      .form-icon, .info-icon, .social-icon {
        width: 50px;
        height: 50px;
        font-size: var(--text-lg);
      }

      .form-title, .info-title, .social-title {
        font-size: var(--text-base);
      }

      .form-subtitle, .social-subtitle {
        font-size: var(--text-xs);
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: var(--space-md);
        margin-bottom: var(--space-md);
      }

      .form-group {
        margin-bottom: var(--space-md);
      }

      .form-label {
        font-size: var(--text-xs);
      }

      .form-control {
        padding: var(--space-sm) var(--space-md);
        font-size: var(--text-sm);
      }

      .btn-send {
        padding: var(--space-sm) var(--space-md);
        font-size: var(--text-sm);
        margin-top: var(--space-md);
      }

      .contact-details {
        gap: var(--space-md);
      }

      .contact-item {
        padding: var(--space-md);
        gap: var(--space-md);
      }

      .contact-item-icon {
        width: 40px;
        height: 40px;
        font-size: var(--text-base);
      }

      .contact-item-content h4 {
        font-size: var(--text-sm);
      }

      .contact-link, .contact-text {
        font-size: var(--text-xs);
      }

      .social-links {
        grid-template-columns: 1fr;
        gap: var(--space-md);
        margin-bottom: var(--space-lg);
      }

      .social-link {
        padding: var(--space-md);
        gap: var(--space-md);
      }

      .social-icon-wrapper {
        width: 45px;
        height: 45px;
      }

      .social-icon-wrapper i {
        font-size: var(--text-lg);
      }

      .social-platform {
        font-size: var(--text-base);
      }

      .social-handle {
        font-size: var(--text-xs);
      }

      .social-stats {
        grid-template-columns: 1fr;
        gap: var(--space-md);
        padding-top: var(--space-lg);
      }

      .stat-item {
        padding: var(--space-md);
        gap: var(--space-md);
      }

      .stat-icon {
        width: 40px;
        height: 40px;
        font-size: var(--text-base);
      }

      .stat-value {
        font-size: var(--text-lg);
      }

      .stat-label {
        font-size: var(--text-xs);
      }
    }

    @media (max-width: 480px) {
      .contact-container {
        padding: var(--space-sm) 0;
      }

      .header-section {
        padding: var(--space-md);
        margin-bottom: var(--space-lg);
      }

      .profile-image {
        width: 80px;
        height: 80px;
      }

      .form-card, .info-card, .social-card {
        padding: var(--space-md);
        margin: 0;
        border-radius: var(--radius-lg);
      }

      .form-icon, .info-icon, .social-icon {
        width: 45px;
        height: 45px;
        font-size: var(--text-base);
      }

      .form-control {
        padding: var(--space-xs) var(--space-sm);
      }

      .contact-item {
        padding: var(--space-sm);
        gap: var(--space-sm);
      }

      .contact-item-icon {
        width: 35px;
        height: 35px;
        font-size: var(--text-sm);
      }

      .social-link {
        padding: var(--space-sm);
        gap: var(--space-sm);
      }

      .social-icon-wrapper {
        width: 40px;
        height: 40px;
      }

      .social-icon-wrapper i {
        font-size: var(--text-base);
      }

      .stat-item {
        padding: var(--space-sm);
        gap: var(--space-sm);
      }

      .stat-icon {
        width: 35px;
        height: 35px;
        font-size: var(--text-sm);
      }

      /* Improve touch targets */
      .btn-send, 
      .social-link, 
      .contact-link {
        min-height: 44px;
      }

      .form-control,
      .btn-send,
      .social-link,
      .contact-item {
        -webkit-tap-highlight-color: transparent;
      }

      /* Add active states for touch */
      .btn-send:active,
      .social-link:active,
      .contact-item:active {
        transform: scale(0.98);
      }

      /* Improve form input on mobile */
      input[type="email"],
      input[type="tel"],
      input[type="text"] {
        font-size: 16px; /* Prevents zoom on iOS */
      }

      /* Add pull-to-refresh visual feedback */
      .contact-container {
        overscroll-behavior-y: contain;
      }
    }

    /* Add smooth scrolling for mobile */
    @media (hover: none) {
      .social-link:hover,
      .contact-item:hover,
      .stat-item:hover {
        transform: none;
      }

      .social-link:active,
      .contact-item:active,
      .stat-item:active {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    /* Improve loading state on mobile */
    .loading-container {
      min-height: 200px;
      padding: var(--space-lg);
    }

    .loading-spinner i {
      font-size: var(--text-2xl);
    }

    .loading-spinner p {
      font-size: var(--text-sm);
    }

    /* Mobile Menu Button Styles */
    .mobile-menu-btn {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1001;
      width: 45px;
      height: 45px;
      background: var(--gradient-primary);
      border: none;
      border-radius: var(--radius-xl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s ease;
    }

    .mobile-menu-btn:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-xl);
    }

    .mobile-menu-btn.active {
      left: 280px;
      background: var(--gradient-accent);
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    .hamburger-line {
      width: 20px;
      height: 2px;
      background: var(--white-color);
      border-radius: var(--radius-full);
      transition: all 0.3s ease;
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 35px;
      height: 35px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--white-color);
      opacity: 0;
      transition: all 0.3s ease;
    }

    .sidebar:not(.collapsed) .menu-toggle-btn {
      opacity: 1;
    }

    .menu-toggle-btn i {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }

    .menu-toggle-btn:hover i {
      transform: rotate(90deg);
    }

    /* Mobile Menu Button Animation */
    @keyframes menuButtonSlide {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }

    .mobile-menu-btn {
      animation: menuButtonSlide 0.3s ease forwards;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .mobile-menu-btn {
        width: 40px;
        height: 40px;
      }

      .mobile-menu-btn.active {
        left: 260px;
      }

      .hamburger-line {
        width: 18px;
      }

      .menu-toggle-btn {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: 480px) {
      .mobile-menu-btn {
        width: 35px;
        height: 35px;
        top: 0.75rem;
        left: 0.75rem;
      }

      .mobile-menu-btn.active {
        left: 240px;
      }

      .hamburger-line {
        width: 16px;
      }

      .menu-toggle-btn {
        width: 28px;
        height: 28px;
        top: 0.75rem;
        right: 0.75rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit, OnDestroy {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;
  isSidebarCollapsed = false;

  personalInfo: PersonalInfo | null = null;
  contactInfo: ContactInfo | null = null;

  private destroy$ = new Subject<void>();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getPersonalInfo().pipe(takeUntil(this.destroy$)).subscribe(info => {
      this.personalInfo = info;
    });

    this.portfolioService.getContactInfo().pipe(takeUntil(this.destroy$)).subscribe(info => {
      this.contactInfo = info;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
    console.log('Form submitted:', this.contact);

      // Show success message
      this.showSuccessMessage = true;

    // Reset form
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

      this.isSubmitting = false;

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }, 2000);
  }

  onSocialHover(platform: string) {
    // Add hover animation logic here if needed
    console.log(`Hovering over ${platform}`);
  }

  onSocialLeave() {
    // Add leave animation logic here if needed
    console.log('Left social link');
  }

  getSocialLinkClass(platform: string): string {
    return platform.toLowerCase();
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    // You can emit this state to a service or parent component if needed
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.toggle('active');
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth <= 768) {
      // Auto collapse sidebar on mobile when navigating
      this.isSidebarCollapsed = true;
      const sidebar = document.querySelector('.sidebar');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      
      if (sidebar) {
        sidebar.classList.add('collapsed');
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Auto collapse sidebar when clicking outside on mobile
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector('.sidebar');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      
      if (sidebar && !sidebar.contains(event.target as Node) && 
          mobileMenuBtn && !mobileMenuBtn.contains(event.target as Node)) {
        this.isSidebarCollapsed = true;
        sidebar.classList.add('collapsed');
        mobileMenuBtn.classList.remove('active');
      }
    }
  }
}
