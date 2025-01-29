import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-newsletter-mobile',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `
    <section class="newsletter-mobile">
      <div class="newsletter-content">
        <h2>Resta Aggiornato</h2>
        <p>Iscriviti alla nostra newsletter per ricevere le ultime novità, offerte speciali e consigli di stile</p>
        <form class="newsletter-form" (submit)="onSubscribe(); $event.preventDefault()">
          <input
            type="email"
            placeholder="Il tuo indirizzo email"
            class="email-input"
            [(ngModel)]="email"
            name="email"
            required
          >
          <button
            type="submit"
            class="subscribe-btn"
          >
            Iscriviti
          </button>
          <label class="privacy-checkbox">
            <input
              type="checkbox"
              [(ngModel)]="privacyAccepted"
              name="privacy"
              required
            >
            <span>Accetto la privacy policy</span>
          </label>
        </form>
      </div>
    </section>
  `,
    styleUrls: ['./newsletter-mobile.component.scss']
})
export class NewsletterMobileComponent {
    email: string = '';
    privacyAccepted: boolean = false;

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
