import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

declare const AOS: any;

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="reviews" class="reviews py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" data-aos="fade-up">Recensioni dei Clienti</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Scopri cosa dicono i nostri clienti soddisfatti
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4" *ngFor="let review of reviews; let i = index" data-aos="fade-up" [attr.data-aos-delay]="100 * i">
            <div class="review-card">
              <div class="review-stars mb-3">
                <i class="fas fa-star" *ngFor="let star of [].constructor(review.rating)"></i>
              </div>
              <p class="review-text">{{review.text}}</p>
              <div class="review-author">
                <img [src]="review.avatar" [alt]="review.name" class="review-avatar">
                <div class="review-info">
                  <h5>{{review.name}}</h5>
                  <small>{{review.date}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="https://www.google.com/maps/place/Cipri+Mp+Parrucchieri+di+Cipriano+Angelo/@44.5876,10.7876,15z"
             target="_blank"
             class="btn btn-outline-primary btn-lg"
             data-aos="fade-up">
            Vedi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .reviews {
      background: var(--bg-dark);
    }

    .review-card {
      background: var(--bg-dark-light);
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      height: 100%;
    }

    .review-stars {
      color: #ffc107;
      font-size: 1.2rem;
    }

    .review-text {
      color: var(--text-muted);
      font-style: italic;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .review-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .review-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .review-info {
      h5 {
        margin: 0;
        color: var(--text-light);
      }

      small {
        color: var(--text-muted);
      }
    }

    .btn-outline-primary {
      color: var(--primary-color);
      border-color: var(--primary-color);
      padding: 0.8rem 2rem;
      border-radius: 30px;

      &:hover {
        background: var(--primary-color);
        color: var(--text-light);
      }
    }
  `]
})
export class ReviewsComponent implements OnInit {
  reviews = [
    {
      name: 'Marco Rossi',
      rating: 5,
      text: 'Servizio eccellente! Angelo è un vero professionista che sa consigliare il taglio perfetto per ogni cliente. Ambiente accogliente e risultato sempre impeccabile.',
      date: '2 settimane fa',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    {
      name: 'Luca Bianchi',
      rating: 5,
      text: 'Il miglior barbiere della zona! Prezzi onesti, grande professionalità e risultati sempre al top. Lo consiglio vivamente.',
      date: '1 mese fa',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61'
    },
    {
      name: 'Giuseppe Verdi',
      rating: 5,
      text: 'Esperienza fantastica! Oltre al taglio impeccabile, l\'atmosfera è sempre piacevole e rilassante. Un posto dove tornare.',
      date: '3 settimane fa',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  ];

  ngOnInit() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }
}
