import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="header-section">
        <div class="profile-section">
          <div class="profile-image">
            <img src="profile.jpg" alt="Avinash Kumar" class="profile-img">
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
          <div class="col-lg-12">
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
                    <a href="mailto:avinashkumar2rock&#64;gmail.com" class="contact-link">
                      avinashkumar2rock&#64;gmail.com
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Phone</h4>
                    <a href="tel:+917071955977" class="contact-link">
                      +91 7071955977
                    </a>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Location</h4>
                    <span class="contact-text">Gurgaon, Haryana, India</span>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Response Time</h4>
                    <span class="contact-text">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Connect With Me Section -->
          <div class="col-lg-12">
            <div class="social-card card shadow-glow-accent">
              <div class="social-header">
                <div class="social-icon">
                  <i class="fas fa-share-alt"></i>
                </div>
                <h3 class="social-title text-gradient-accent">Connect With Me</h3>
                <p class="social-subtitle">Follow me on social media for updates</p>
              </div>
              
              <div class="social-links">
                <a href="https://github.com/avinashkumar2rock" target="_blank" class="social-link github">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/avinashkumar2rock" target="_blank" class="social-link linkedin">
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:avinashkumar2rock&#64;gmail.com" class="social-link email">
                  <i class="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
                <a href="tel:+917071955977" class="social-link phone">
                  <i class="fas fa-phone"></i>
                  <span>Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div class="success-message" [class.show]="showSuccessMessage">
        <div class="success-content">
          <i class="fas fa-check-circle"></i>
          <h4>Message Sent Successfully!</h4>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: var(--space-lg) 0;
    }

    .header-section {
      margin-bottom: var(--space-3xl);
      padding: var(--space-xl);
      background: rgba(255, 255, 255, 0.02);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.05);
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
    }

    .info-icon {
      background: var(--gradient-secondary);
    }

    .social-icon {
      background: var(--gradient-accent);
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
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-lg);
      color: var(--white-color);
      font-size: var(--text-sm);
      transition: var(--transition-normal);
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
      background: rgba(255, 255, 255, 0.08);
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
      transition: var(--transition-normal);
      position: relative;
      overflow: hidden;
      margin-top: var(--space-lg);
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
      background: rgba(255, 255, 255, 0.03);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.05);
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
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-lg);
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-lg);
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      color: var(--gray-200);
      text-decoration: none;
      font-weight: 600;
      position: relative;
      overflow: hidden;
    }

    .social-link:hover {
      color: var(--white-color);
      box-shadow: var(--shadow-xl);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .social-link i {
      font-size: var(--text-lg);
      width: 20px;
      text-align: center;
    }

    .social-link span {
      font-weight: 600;
      font-size: var(--text-sm);
    }

    .success-message {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(30px);
      border-radius: var(--radius-2xl);
      padding: var(--space-2xl);
      text-align: center;
      z-index: 1000;
      transition: var(--transition-bounce);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: var(--shadow-3xl);
    }

    .success-message.show {
      transform: translate(-50%, -50%) scale(1);
    }

    .success-content i {
      font-size: var(--text-6xl);
      color: var(--success-color);
      margin-bottom: var(--space-xl);
      animation: pulse 2s infinite;
    }

    .success-content h4 {
      color: var(--white-color);
      margin-bottom: var(--space-md);
      font-size: var(--text-2xl);
      font-weight: 700;
    }

    .success-content p {
      color: var(--gray-300);
      margin: 0;
      font-size: var(--text-lg);
    }

    @media (max-width: 1200px) {
      .profile-section {
        gap: var(--space-xl);
      }

      .col-lg-12 {
        margin-bottom: var(--space-xl);
      }
    }

    @media (max-width: 768px) {
      .profile-section {
        flex-direction: column;
        text-align: center;
        gap: var(--space-lg);
      }

      .profile-image {
        width: 100px;
        height: 100px;
      }

      .page-title {
        font-size: var(--text-2xl);
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .form-card, .info-card, .social-card {
        padding: var(--space-lg);
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

      .social-links {
        grid-template-columns: 1fr;
        gap: var(--space-md);
      }

      .social-link {
        padding: var(--space-md);
      }

      .container-fluid {
        padding: 0 var(--space-md);
      }

      .row {
        margin: 0 -var(--space-sm);
      }

      .row > [class*="col-"] {
        padding: 0 var(--space-sm);
        margin-bottom: var(--space-xl);
      }
    }

    @media (max-width: 480px) {
      .header-section {
        padding: var(--space-lg);
      }

      .profile-image {
        width: 80px;
        height: 80px;
      }

      .form-card, .info-card, .social-card {
        padding: var(--space-md);
      }

      .contact-item {
        padding: var(--space-sm);
        gap: var(--space-sm);
      }

      .social-link {
        padding: var(--space-sm);
        gap: var(--space-sm);
      }
    }
  `]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false;

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
}
