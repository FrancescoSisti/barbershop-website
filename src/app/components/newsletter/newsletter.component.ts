import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class NewsletterComponent {
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
