import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImage: string;
  bio: string;
  description: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  technologies: string[];
  description: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  status: string;
}

export interface AcademicProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeType: string;
  description: string;
  coursework: string[];
  achievements: string[];
  projects: AcademicProject[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
  type: string;
  skills: string[];
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  backend: Skill[];
  cloud: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  responseTime: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  skills: Skills;
  contact: ContactInfo;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData$ = new BehaviorSubject<PortfolioData | null>(null);
  private dataLoaded = false;

  constructor(private http: HttpClient) {
    this.loadPortfolioData();
  }

  /**
   * Load portfolio data from JSON file
   */
  private loadPortfolioData(): void {
    if (this.dataLoaded) return;

    this.http.get<PortfolioData>('portfolio-data.json')
      .pipe(
        catchError(error => {
          console.error('Error loading portfolio data:', error);
          throw error;
        })
      )
      .subscribe(data => {
        this.portfolioData$.next(data);
        this.dataLoaded = true;
      });
  }

  /**
   * Get all portfolio data
   */
  getPortfolioData(): Observable<PortfolioData | null> {
    return this.portfolioData$.asObservable();
  }

  /**
   * Get personal information
   */
  getPersonalInfo(): Observable<PersonalInfo | null> {
    return this.portfolioData$.pipe(
      map(data => data?.personal || null)
    );
  }

  /**
   * Get work experience
   */
  getExperience(): Observable<Experience[]> {
    return this.portfolioData$.pipe(
      map(data => data?.experience || [])
    );
  }

  /**
   * Get projects
   */
  getProjects(): Observable<Project[]> {
    return this.portfolioData$.pipe(
      map(data => data?.projects || [])
    );
  }

  /**
   * Get education
   */
  getEducation(): Observable<Education[]> {
    return this.portfolioData$.pipe(
      map(data => data?.education || [])
    );
  }

  /**
   * Get certifications
   */
  getCertifications(): Observable<Certification[]> {
    return this.portfolioData$.pipe(
      map(data => data?.certifications || [])
    );
  }

  /**
   * Get skills
   */
  getSkills(): Observable<Skills | null> {
    return this.portfolioData$.pipe(
      map(data => data?.skills || null)
    );
  }

  /**
   * Get contact information
   */
  getContactInfo(): Observable<ContactInfo | null> {
    return this.portfolioData$.pipe(
      map(data => data?.contact || null)
    );
  }

  /**
   * Get project by ID
   */
  getProjectById(id: number): Observable<Project | null> {
    return this.portfolioData$.pipe(
      map(data => data?.projects.find(project => project.id === id) || null)
    );
  }

  /**
   * Get experience by ID
   */
  getExperienceById(id: number): Observable<Experience | null> {
    return this.portfolioData$.pipe(
      map(data => data?.experience.find(exp => exp.id === id) || null)
    );
  }

  /**
   * Get featured projects (first 3)
   */
  getFeaturedProjects(): Observable<Project[]> {
    return this.portfolioData$.pipe(
      map(data => data?.projects.slice(0, 3) || [])
    );
  }

  /**
   * Get recent experience (first 2)
   */
  getRecentExperience(): Observable<Experience[]> {
    return this.portfolioData$.pipe(
      map(data => data?.experience.slice(0, 2) || [])
    );
  }

  /**
   * Get skills by category
   */
  getSkillsByCategory(category: keyof Skills): Observable<Skill[]> {
    return this.portfolioData$.pipe(
      map(data => data?.skills[category] || [])
    );
  }

  /**
   * Search projects by technology
   */
  searchProjectsByTechnology(technology: string): Observable<Project[]> {
    return this.portfolioData$.pipe(
      map(data => {
        if (!data?.projects) return [];
        return data.projects.filter(project => 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(technology.toLowerCase())
          )
        );
      })
    );
  }

  /**
   * Get all technologies used across projects
   */
  getAllTechnologies(): Observable<string[]> {
    return this.portfolioData$.pipe(
      map(data => {
        if (!data?.projects) return [];
        const allTechs = data.projects.flatMap(project => project.technologies);
        return [...new Set(allTechs)].sort();
      })
    );
  }

  /**
   * Refresh data (reload from source)
   */
  refreshData(): void {
    this.dataLoaded = false;
    this.loadPortfolioData();
  }
} 