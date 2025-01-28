import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isHidden = false;
  lastScrollTop = 0;
  isMenuCollapsed = true;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrollTop < 50;

    // Gestisce la trasparenza
    this.isScrolled = scrollTop > 50;

    // Gestisce l'auto-hide
    if (!isAtTop) {
      if (scrollTop > this.lastScrollTop && !this.isMenuCollapsed) {
        this.isHidden = false; // Mantiene visibile se il menu è aperto
      } else {
        this.isHidden = scrollTop > this.lastScrollTop && scrollTop > 50;
      }
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop;
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuCollapsed = true;
    document.body.style.overflow = 'auto';
  }
}
