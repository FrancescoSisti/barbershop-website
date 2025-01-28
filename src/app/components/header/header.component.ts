import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgbCollapse],
  template: `
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#home" (click)="scrollToSection('home', $event)">
            Cipri Mp Parrucchieri
          </a>
          <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" [ngbCollapse]="isMenuCollapsed">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home" (click)="scrollToSection('home', $event)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services" (click)="scrollToSection('services', $event)">Servizi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery" (click)="scrollToSection('gallery', $event)">Galleria</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews" (click)="scrollToSection('reviews', $event)">Recensioni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#shop" (click)="scrollToSection('shop', $event)">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" (click)="scrollToSection('contact', $event)">Contatti</a>
              </li>
              <li class="nav-item">
                <a class="nav-link book-now" href="#booking" (click)="scrollToSection('booking', $event)">Prenota Ora</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar-brand {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .nav-link {
      color: #1a1a1a;
      font-weight: 500;
      margin: 0 0.5rem;
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        color: #9f6000;
      }
    }

    .book-now {
      background: #9f6000;
      color: white !important;
      padding: 0.5rem 1.5rem;
      border-radius: 25px;
      margin-left: 1rem;

      &:hover {
        background: #7d4b00;
      }
    }

    @media (max-width: 991.98px) {
      .navbar-collapse {
        background: white;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-top: 1rem;
      }

      .nav-link {
        padding: 0.5rem 1rem;
        margin: 0;
      }

      .book-now {
        margin: 1rem 0;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuCollapsed = true;

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuCollapsed = true; // Chiude il menu mobile dopo il click
    }
  }
}
