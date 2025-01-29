import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isHidden = false;
  lastScrollTop = 0;
  isMenuCollapsed = true;
  activeSection = 'home';
  isNavigating = false;

  constructor(private viewportScroller: ViewportScroller) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;
        this.checkActiveSection();
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrollTop < 50;

    // Gestisce la trasparenza
    this.isScrolled = scrollTop > 50;

    // Gestisce l'auto-hide solo se non stiamo navigando
    if (!this.isNavigating) {
      if (!isAtTop) {
        if (scrollTop > this.lastScrollTop && !this.isMenuCollapsed) {
          this.isHidden = false; // Mantiene visibile se il menu è aperto
        } else {
          this.isHidden = scrollTop > this.lastScrollTop && scrollTop > 50;
        }
      } else {
        this.isHidden = false;
      }
    }

    this.lastScrollTop = scrollTop;
    this.checkActiveSection();
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (!this.isMenuCollapsed) {
      this.isHidden = false; // Mostra l'header quando il menu è aperto
    }
    document.body.style.overflow = this.isMenuCollapsed ? 'auto' : 'hidden';
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.isNavigating = true;
    this.isHidden = false;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;

      // Reset isNavigating after animation completes
      setTimeout(() => {
        this.isNavigating = false;
      }, 1000); // Durata approssimativa dello scroll smooth
    }

    this.isMenuCollapsed = true;
    document.body.style.overflow = 'auto';
  }

  private checkActiveSection() {
    const sections = ['home', 'services', 'gallery', 'reviews', 'shop', 'booking', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = 100; // Offset per considerare l'header

        if (rect.top <= offset && rect.bottom > offset) {
          if (this.activeSection !== section) {
            this.activeSection = section;
            history.replaceState(null, '', `#${section}`);
          }
          break;
        }
      }
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
