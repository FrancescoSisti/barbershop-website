import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    }, 1500);
  }
}
