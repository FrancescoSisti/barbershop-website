import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold" data-aos="fade-up">
              Il Tuo Stile, La Nostra Passione
            </h1>
            <p class="lead mt-4" data-aos="fade-up" data-aos-delay="100">
              Benvenuti da Cipri Mp Parrucchieri, dove l'arte del taglio incontra lo stile personale.
              Lasciati trasformare dai nostri esperti parrucchieri.
            </p>
            <div class="mt-5" data-aos="fade-up" data-aos-delay="200">
              <a href="#booking" class="btn btn-primary btn-lg me-3">Prenota Ora</a>
              <a href="#services" class="btn btn-outline-primary btn-lg">Scopri i Servizi</a>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6"
                 alt="Barbiere al lavoro"
                 class="img-fluid rounded-3 shadow-lg">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      overflow: hidden;
      padding: 0;
    }

    .min-vh-100 {
      min-height: calc(100vh - var(--header-height));
      padding: 5rem 0;
    }

    h1 {
      color: var(--text-dark);
      margin-bottom: 1rem;
      font-size: 3.5rem;
      line-height: 1.2;
    }

    .lead {
      color: var(--text-light);
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
    }

    @media (max-width: 991.98px) {
      .min-vh-100 {
        padding: 3rem 0;
      }

      h1 {
        font-size: 2.5rem;
      }

      .lead {
        font-size: 1.1rem;
      }

      img {
        margin-top: 2rem;
      }
    }
  `]
})
export class HeroComponent { }
