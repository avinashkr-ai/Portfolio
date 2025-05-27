import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="education-container">
      <div class="header-section">
        <h1 class="page-title text-gradient-primary">Educational Background</h1>
        <p class="page-subtitle">My academic journey and learning milestones</p>
      </div>

      <div class="education-timeline">
        <div class="timeline-line"></div>
        
        <div class="education-card card shadow-glow">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="education-header">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-meta">
              <h3 class="degree-title text-gradient-primary">Master of Computer Application</h3>
              <span class="institution">Harcourt Butler Technical University (HBTU)</span>
              <span class="duration">2021 - 2023</span>
            </div>
          </div>
          <div class="education-details">
            <div class="grade-info">
              <span class="grade-label">CGPA:</span>
              <span class="grade-value">7.77</span>
            </div>
            <p class="description">
              Specialized in advanced computer applications with focus on software development, 
              database management, and modern programming paradigms. Completed comprehensive 
              coursework in full-stack development, system design, and emerging technologies.
            </p>
            <div class="subjects">
              <span class="subject-tag">Software Engineering</span>
              <span class="subject-tag">Database Systems</span>
              <span class="subject-tag">Web Technologies</span>
              <span class="subject-tag">Data Structures</span>
              <span class="subject-tag">System Design</span>
              <span class="subject-tag">Machine Learning</span>
            </div>
          </div>
        </div>

        <div class="education-card card shadow-glow-secondary">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="education-header">
            <div class="education-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="education-meta">
              <h3 class="degree-title text-gradient-secondary">Bachelor of Computer Application</h3>
              <span class="institution">CSJMU UIET</span>
              <span class="duration">2015 - 2018</span>
            </div>
          </div>
          <div class="education-details">
            <div class="grade-info">
              <span class="grade-label">Percentage:</span>
              <span class="grade-value">61%</span>
            </div>
            <p class="description">
              Foundation in computer science fundamentals including programming languages, 
              computer networks, and software development methodologies. Built strong 
              analytical and problem-solving skills through practical projects and assignments.
            </p>
            <div class="subjects">
              <span class="subject-tag">Programming</span>
              <span class="subject-tag">Computer Networks</span>
              <span class="subject-tag">Operating Systems</span>
              <span class="subject-tag">Mathematics</span>
              <span class="subject-tag">Digital Logic</span>
              <span class="subject-tag">DBMS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Academic Projects Section -->
      <div class="academic-projects">
        <div class="card">
          <h2 class="section-title text-gradient-accent">Academic Projects</h2>
          <div class="projects-grid">
            <div class="project-card">
              <div class="project-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div class="project-info">
                <h4>Final Year Project</h4>
                <h5>Web-based Student Management System</h5>
                <p>Developed a comprehensive student management system using PHP, MySQL, and JavaScript. 
                   Implemented features for student registration, course management, and grade tracking.</p>
                <div class="project-tech">
                  <span class="tech-badge">PHP</span>
                  <span class="tech-badge">MySQL</span>
                  <span class="tech-badge">JavaScript</span>
                  <span class="tech-badge">Bootstrap</span>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div class="project-info">
                <h4>Semester Project</h4>
                <h5>Library Management System</h5>
                <p>Created a desktop application for library management with features for book cataloging, 
                   member management, and automated fine calculation using Java Swing.</p>
                <div class="project-tech">
                  <span class="tech-badge">Java</span>
                  <span class="tech-badge">Swing</span>
                  <span class="tech-badge">SQLite</span>
                  <span class="tech-badge">JDBC</span>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-icon">
                <i class="fas fa-chart-bar"></i>
              </div>
              <div class="project-info">
                <h4>Research Project</h4>
                <h5>Data Analysis Dashboard</h5>
                <p>Built an interactive data visualization dashboard for analyzing student performance 
                   metrics using Python and various data science libraries.</p>
                <div class="project-tech">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Pandas</span>
                  <span class="tech-badge">Matplotlib</span>
                  <span class="tech-badge">Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Developed Section -->
      <div class="skills-developed">
        <div class="card">
          <h2 class="section-title text-gradient-primary">Skills Developed During Education</h2>
          <div class="skills-categories">
            <div class="skill-category">
              <h4>Programming Languages</h4>
              <div class="skill-tags">
                <span class="skill-tag">C/C++</span>
                <span class="skill-tag">Java</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">PHP</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Database & Systems</h4>
              <div class="skill-tags">
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">Oracle</span>
                <span class="skill-tag">SQLite</span>
                <span class="skill-tag">Linux</span>
                <span class="skill-tag">Windows</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Web Technologies</h4>
              <div class="skill-tags">
                <span class="skill-tag">HTML/CSS</span>
                <span class="skill-tag">Bootstrap</span>
                <span class="skill-tag">jQuery</span>
                <span class="skill-tag">AJAX</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .education-container {
      padding: 2rem 0;
    }

    .header-section {
      text-align: center;
      margin-bottom: 4rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: var(--radius-2xl);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .page-title {
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      margin-bottom: var(--space-lg);
      font-weight: 700;
    }

    .page-subtitle {
      font-size: 1.3rem;
      color: var(--gray-300);
      margin: 0;
    }

    .education-timeline {
      position: relative;
      margin-bottom: 4rem;
    }

    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: var(--gradient-primary);
      transform: translateX(-50%);
      border-radius: var(--radius-lg);
    }

    .education-card {
      position: relative;
      margin-bottom: 3rem;
      padding: 2.5rem;
      width: calc(50% - 2rem);
      overflow: hidden;
    }

    .education-card:nth-child(even) {
      margin-left: auto;
    }

    .education-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .education-card:nth-child(odd)::before {
      background: var(--gradient-secondary);
    }

    .timeline-marker {
      position: absolute;
      top: 2rem;
      width: 20px;
      height: 20px;
      z-index: 10;
    }

    .education-card:nth-child(even) .timeline-marker {
      left: -3rem;
    }

    .education-card:nth-child(odd) .timeline-marker {
      right: -3rem;
    }

    .marker-dot {
      width: 20px;
      height: 20px;
      background: var(--gradient-accent);
      border-radius: 50%;
      border: 4px solid var(--gray-900);
      box-shadow: var(--shadow-lg);
    }

    .education-header {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .education-icon {
      width: 80px;
      height: 80px;
      border-radius: var(--radius-xl);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 2rem;
      box-shadow: var(--shadow-lg);
      flex-shrink: 0;
    }

    .education-card:nth-child(odd) .education-icon {
      background: var(--gradient-secondary);
    }

    .education-meta {
      flex: 1;
    }

    .degree-title {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    .institution {
      display: block;
      font-size: 1.1rem;
      color: var(--accent-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .duration {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      color: var(--gray-300);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .education-details {
      margin-top: 1.5rem;
    }

    .grade-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .grade-label {
      font-weight: 600;
      color: var(--gray-300);
    }

    .grade-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--success-color);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .description {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--gray-200);
      margin-bottom: 1.5rem;
    }

    .subjects {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .subject-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.85rem;
      font-weight: 500;
      box-shadow: var(--shadow-md);
    }

    .subject-tag:hover {
      box-shadow: var(--shadow-lg);
    }

    .education-card:nth-child(odd) .subject-tag {
      background: var(--gradient-secondary);
    }

    /* Academic Projects Section */
    .academic-projects {
      margin-bottom: 4rem;
    }

    .academic-projects .card {
      padding: 2.5rem;
    }

    .section-title {
      font-size: clamp(var(--text-2xl), 3.5vw, var(--text-4xl));
      text-align: center;
      margin-bottom: var(--space-lg);
      font-weight: 700;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-xl);
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: var(--gradient-accent);
    }

    .project-card:nth-child(2)::before {
      background: var(--gradient-primary);
    }

    .project-card:nth-child(3)::before {
      background: var(--gradient-secondary);
    }

    .project-icon {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-lg);
      background: var(--gradient-accent);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .project-card:nth-child(2) .project-icon {
      background: var(--gradient-primary);
    }

    .project-card:nth-child(3) .project-icon {
      background: var(--gradient-secondary);
    }

    .project-info h4 {
      font-size: 0.9rem;
      color: var(--accent-color);
      margin: 0 0 0.25rem 0;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-info h5 {
      font-size: 1.2rem;
      color: var(--white-color);
      margin: 0 0 0.75rem 0;
      font-weight: 600;
    }

    .project-info p {
      font-size: 0.95rem;
      color: var(--gray-300);
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-badge {
      background: rgba(255, 255, 255, 0.1);
      color: var(--gray-200);
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius-md);
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Skills Developed Section */
    .skills-developed .card {
      padding: 2.5rem;
    }

    .skills-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-category h4 {
      font-size: 1.2rem;
      color: var(--white-color);
      margin-bottom: 1rem;
      font-weight: 600;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--gradient-primary);
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-tag {
      background: var(--gradient-primary);
      color: var(--white-color);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-lg);
      font-size: 0.85rem;
      font-weight: 500;
      box-shadow: var(--shadow-sm);
    }

    .skill-category:nth-child(2) .skill-tag {
      background: var(--gradient-secondary);
    }

    .skill-category:nth-child(3) .skill-tag {
      background: var(--gradient-accent);
    }

    @media (max-width: 768px) {
      .timeline-line {
        left: 2rem;
      }

      .education-card {
        width: calc(100% - 4rem);
        margin-left: 4rem !important;
      }

      .timeline-marker {
        left: 1rem !important;
        right: auto !important;
      }

      .education-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .education-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
        margin: 0 auto;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-card {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .project-icon {
        margin: 0 auto;
      }

      .skills-categories {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .education-card {
        padding: 2rem;
      }

      .grade-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .project-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class EducationComponent {}
