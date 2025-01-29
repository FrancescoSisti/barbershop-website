import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageModalComponent } from './image-modal.component';

declare const AOS: any;

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, MatDialogModule],
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
  `,
  styles: [`
    .gallery {
      background-color: #f8f9fa;
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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  }

  openImage(image: string) {
    this.dialog.open(ImageModalComponent, {
      data: { image },
      maxWidth: '95vw',
      maxHeight: '95vh',
      panelClass: 'image-modal-container'
    });
  }
}
