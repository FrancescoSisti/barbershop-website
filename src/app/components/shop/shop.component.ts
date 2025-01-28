import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="shop" class="shop py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" data-aos="fade-up">I Nostri Prodotti</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Scopri la nostra selezione di prodotti professionali per la cura dei capelli
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" *ngFor="let product of products; let i = index" data-aos="fade-up" [attr.data-aos-delay]="100 * i">
            <div class="product-card">
              <div class="product-image">
                <img [src]="product.image" [alt]="product.name">
                <div class="product-overlay">
                  <button class="btn btn-primary" (click)="addToCart(product)">
                    Aggiungi al Carrello
                  </button>
                </div>
              </div>
              <div class="product-info">
                <h3>{{product.name}}</h3>
                <p class="product-description">{{product.description}}</p>
                <p class="product-price">€{{product.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .shop {
      background-color: #f8f9fa;
    }

    .product-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      height: 100%;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .product-image {
      position: relative;
      height: 250px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover .product-overlay {
        opacity: 1;
      }
    }

    .product-info {
      padding: 1.5rem;
      text-align: center;

      h3 {
        font-size: 1.2rem;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
      }

      .product-description {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      .product-price {
        color: #9f6000;
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0;
      }
    }

    .btn-primary {
      background: #9f6000;
      border-color: #9f6000;
      padding: 0.5rem 1.5rem;
      border-radius: 25px;

      &:hover {
        background: #7d4b00;
        border-color: #7d4b00;
      }
    }
  `]
})
export class ShopComponent {
  products = [
    {
      name: 'Shampoo Professionale',
      description: 'Shampoo nutriente per tutti i tipi di capelli',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1585232351009-aa87416fca90'
    },
    {
      name: 'Balsamo Ristrutturante',
      description: 'Balsamo intensivo per capelli danneggiati',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c'
    },
    {
      name: 'Olio per Barba',
      description: 'Olio nutriente per una barba morbida e curata',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1621607512022-6aecc4fed814'
    },
    {
      name: 'Cera Modellante',
      description: 'Cera a tenuta forte per uno styling perfetto',
      price: 21.99,
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0'
    }
  ];

  addToCart(product: any) {
    // In a real application, this would add the product to a shopping cart
    alert(`${product.name} aggiunto al carrello!`);
  }
}
