import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { ShopComponent } from '../../components/shop/shop.component';
import { BookingComponent } from '../../components/booking/booking.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ViewportScroller } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        ServicesComponent,
        GalleryComponent,
        ReviewsComponent,
        ShopComponent,
        BookingComponent,
        ContactComponent
    ],
    template: `
    <app-header></app-header>
    <main>
      <app-hero id="home"></app-hero>
      <app-services id="services"></app-services>
      <app-gallery id="gallery"></app-gallery>
      <app-reviews id="reviews"></app-reviews>
      <app-shop id="shop"></app-shop>
      <app-booking id="booking"></app-booking>
      <app-contact id="contact"></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class HomeComponent implements OnInit, AfterViewInit {
    private sections = ['home', 'services', 'gallery', 'reviews', 'shop', 'booking', 'contact'];
    private observer: IntersectionObserver | null = null;
    private isScrolling = false;

    constructor(
        private viewportScroller: ViewportScroller,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // Handle page reload
        if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
            window.scrollTo(0, 0);
            // Force URL to be clean on reload
            setTimeout(() => {
                this.router.navigate(['/'], { replaceUrl: true });
            });
        }

        // Listen to fragment changes
        this.route.fragment.subscribe(fragment => {
            if (fragment && !this.isScrolling) {
                const element = document.getElementById(fragment);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    ngAfterViewInit() {
        // Setup intersection observer for each section
        this.observer = new IntersectionObserver(
            (entries) => {
                // Find the most visible section
                let maxRatio = 0;
                let mostVisibleSection = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisibleSection = entry.target.id;
                    }
                });

                // Update URL only if we have a clear winner
                if (mostVisibleSection && maxRatio > 0.5) {
                    this.isScrolling = true;
                    this.router.navigate([], {
                        fragment: mostVisibleSection,
                        replaceUrl: true
                    }).then(() => {
                        setTimeout(() => {
                            this.isScrolling = false;
                        }, 100);
                    });
                }
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: '-10% 0px -90% 0px'
            }
        );

        // Observe all sections
        this.sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                this.observer?.observe(element);
            }
        });
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
