import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  isScrolled = false;
  isHidden = false;
  lastScrollTop = 0;
  isMenuOpen = false;

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

    this.isScrolled = scrollTop > 50;

    if (!isAtTop && !this.isMenuOpen) {
      this.isHidden = scrollTop > this.lastScrollTop && scrollTop > 50;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
