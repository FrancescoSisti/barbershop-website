import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { BookingComponent } from './components/booking/booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeaderMobileComponent,
    HeroComponent,
    ServicesComponent,
    BookingComponent,
    GalleryComponent,
    ReviewsComponent,
    ShopComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    .main-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
      margin-top: var(--header-height); /* Compensate for fixed header */
    }

    @media (max-width: 768px) {
      .desktop-header {
        display: none;
      }
    }

    @media (min-width: 769px) {
      .mobile-header {
        display: none;
      }
    }
  `]
})
export class AppComponent {
  title = 'Cipri Mp Parrucchieri';
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
