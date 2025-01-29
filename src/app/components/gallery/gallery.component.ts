import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

declare const AOS: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <section id="gallery" class="gallery py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" data-aos="fade-up">La Nostra Galleria</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Scopri i nostri migliori lavori e lasciati ispirare
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4" *ngFor="let image of galleryImages; let i = index" data-aos="fade-up" [attr.data-aos-delay]="100 * i">
            <div class="gallery-item" (click)="openImage(image)">
              <img [src]="image" alt="Acconciatura donna" class="img-fluid">
              <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div class="modal-overlay" *ngIf="selectedImage" (click)="closeImage()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="closeImage()">
          <i class="fas fa-times"></i>
        </button>
        <img [src]="selectedImage" alt="Gallery image" class="modal-image">
      </div>
    </div>
  `,
  styles: [`
    .gallery {
      background-color: var(--bg-dark);
    }

    .gallery-item {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      cursor: pointer;

      &:hover .gallery-overlay {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(159, 96, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;

      i {
        color: white;
        font-size: 2rem;
      }
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 2rem;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      position: relative;
      width: auto;
      max-width: 800px;
      margin: 0 auto;
      background: var(--bg-dark);
      border-radius: 15px;
      padding: 1rem;
      box-shadow: var(--shadow-lg);
      animation: zoomIn 0.3s ease;
    }

    .modal-image {
      width: 100%;
      height: auto;
      max-height: 70vh;
      object-fit: contain;
      border-radius: 8px;
      display: block;
    }

    .close-button {
      position: absolute;
      top: -15px;
      right: -15px;
      background: var(--primary-color);
      border: none;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
      z-index: 1;

      &:hover {
        background: var(--primary-dark);
      }

      i {
        font-size: 1rem;
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 767.98px) {
      .modal-content {
        max-width: 95%;
        margin: 0 1rem;
      }

      .modal-image {
        max-height: 60vh;
      }

      .close-button {
        top: 10px;
        right: 10px;
      }
    }
  `]
})
export class GalleryComponent implements OnInit {
  galleryImages = [
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e',
    'https://images.unsplash.com/photo-1522336572468-97b06e8ef143',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250',
    'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3'
  ];

  selectedImage: string | null = null;

  ngOnInit() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }

  openImage(image: string) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
