import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-image-modal',
    standalone: true,
    imports: [CommonModule, MatDialogModule],
    template: `
    <div class="image-modal">
      <img [src]="data.image" [alt]="'Gallery image'" class="modal-image">
      <button class="close-button" (click)="close()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `,
    styles: [`
    .image-modal {
      position: relative;
      padding: 20px;
    }

    .modal-image {
      max-width: 100%;
      max-height: 80vh;
      display: block;
      margin: 0 auto;
      border-radius: 8px;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  `]
})
export class ImageModalComponent {
    constructor(
        public dialogRef: MatDialogRef<ImageModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { image: string }
    ) { }

    close(): void {
        this.dialogRef.close();
    }
}

