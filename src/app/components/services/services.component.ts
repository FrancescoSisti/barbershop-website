import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="services" class="services py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" data-aos="fade-up">I Nostri Servizi</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Scopri la nostra gamma completa di servizi professionali
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let service of services" data-aos="fade-up">
            <div class="service-card">
              <img [src]="service.image" [alt]="service.name" class="service-image">
              <div class="service-content">
                <h3>{{service.name}}</h3>
                <p>{{service.description}}</p>
                <p class="price">A partire da €{{service.price}}</p>
                <a href="#booking" class="btn btn-outline-primary">Prenota</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: #f8f9fa;
    }

    .service-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .service-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .service-content {
      padding: 2rem;
      text-align: center;

      h3 {
        color: #1a1a1a;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        margin-bottom: 1rem;
      }

      .price {
        color: #9f6000;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }
    }

    .btn-outline-primary {
      color: #9f6000;
      border-color: #9f6000;
      padding: 0.5rem 2rem;
      border-radius: 25px;

      &:hover {
        background: #9f6000;
        color: white;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      name: 'Taglio Classico',
      description: 'Taglio professionale personalizzato secondo il tuo stile',
      price: 25,
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a'
    },
    {
      name: 'Barba',
      description: 'Rifinitura e modellatura della barba con prodotti premium',
      price: 15,
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033'
    },
    {
      name: 'Taglio & Barba',
      description: 'Combinazione di taglio capelli e sistemazione barba',
      price: 35,
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1'
    },
    {
      name: 'Trattamento Capelli',
      description: 'Trattamento profondo per capelli sani e lucenti',
      price: 30,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df'
    },
    {
      name: 'Colorazione',
      description: 'Servizio di colorazione professionale personalizzato',
      price: 45,
      image: 'https://images.unsplash.com/photo-1560869713-da86bd4f8afd'
    },
    {
      name: 'Styling Speciale',
      description: 'Acconciature per occasioni speciali',
      price: 40,
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486'
    }
  ];
}
