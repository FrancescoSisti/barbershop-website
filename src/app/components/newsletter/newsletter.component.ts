import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsletterMobileComponent } from '../newsletter-mobile/newsletter-mobile.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, NewsletterMobileComponent]
})
export class NewsletterComponent {
  email: string = '';
  privacyAccepted: boolean = false;
  isMobile: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  onSubscribe() {
    if (!this.email || !this.privacyAccepted) {
      alert('Per favore, inserisci un indirizzo email valido e accetta la privacy policy');
      return;
    }

    // TODO: Implement newsletter subscription logic
    console.log('Iscrizione newsletter per:', this.email);
    this.email = '';
    this.privacyAccepted = false;
    alert('Grazie per esserti iscritto alla nostra newsletter!');
  }
}
