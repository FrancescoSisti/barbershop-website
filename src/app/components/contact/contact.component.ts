import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section id="contact" class="contact py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">Contattaci</h2>
            <p class="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Siamo qui per aiutarti. Non esitare a contattarci per qualsiasi domanda
            </p>
          </div>
        </div>

        <div class="row gy-4">
          <!-- Contact Info Cards -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Indirizzo</h3>
              <p>Via Roma 123<br>Milano, MI 20100</p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-phone"></i>
              </div>
              <h3>Telefono</h3>
              <p>+39 02 1234567<br>+39 333 1234567</p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="info-card">
              <div class="icon-wrapper">
                <i class="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>info&#64;barbershop.it<br>support&#64;barbershop.it</p>
            </div>
          </div>


          <!-- Contact Form -->
          <div class="col-lg-8 mx-auto mt-5">
            <div class="contact-form" data-aos="fade-up" data-aos-delay="400">
              <form (submit)="onSubmit($event)" #contactForm="ngForm">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label for="name" class="form-label">Nome e Cognome</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          required
                          [ngModel]="formData.name"
                          (ngModelChange)="formData.name = $event">
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label for="email" class="form-label">Email</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                          required
                          [ngModel]="formData.email"
                          (ngModelChange)="formData.email = $event">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="subject" class="form-label">Oggetto</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fas fa-heading"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      name="subject"
                      required
                      [ngModel]="formData.subject"
                      (ngModelChange)="formData.subject = $event">
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="message" class="form-label">Messaggio</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fas fa-comment"></i>
                    </span>
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                      [ngModel]="formData.message"
                      (ngModelChange)="formData.message = $event"></textarea>
                  </div>
                </div>

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    [disabled]="!contactForm.form.valid || isSubmitting">
                    <span *ngIf="!isSubmitting">Invia Messaggio</span>
                    <span *ngIf="isSubmitting">
                      <i class="fas fa-spinner fa-spin me-2"></i>Invio in corso...
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="row mt-5">
          <div class="col-12 text-center">
            <div class="social-links" data-aos="fade-up" data-aos-delay="500">
              <a href="#" class="social-link" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--bg-dark);
      position: relative;
      overflow: hidden;
    }

    .info-card {
      background: var(--bg-dark-light);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      height: 100%;
      transition: transform 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);

      &:hover {
        transform: translateY(-5px);
      }

      .icon-wrapper {
        width: 60px;
        height: 60px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;

        i {
          font-size: 1.5rem;
          color: white;
        }
      }

      h3 {
        color: var(--text-light);
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-muted);
        margin: 0;
        line-height: 1.6;
      }
    }

    .contact-form {
      background: var(--bg-dark-light);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 5px 25px rgba(0,0,0,0.3);
    }

    .form-label {
      color: var(--text-light);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .input-group {
      .input-group-text {
        background-color: var(--bg-dark-lighter);
        border: 1px solid var(--gray-300);
        border-right: none;
        color: var(--primary-color);
      }

      .form-control {
        background-color: var(--bg-dark-lighter);
        border: 1px solid var(--gray-300);
        border-left: none;
        padding: 0.8rem;
        color: var(--text-light);

        &:focus {
          background-color: var(--bg-dark-lighter);
          border-color: var(--primary-color);
          box-shadow: none;
        }

        &::placeholder {
          color: var(--text-muted);
        }
      }
    }

    textarea.form-control {
      min-height: 120px;
      resize: vertical;
    }

    .btn-primary {
      background: var(--primary-color);
      border: none;
      padding: 1rem 3rem;
      border-radius: 30px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(159, 96, 0, 0.3);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .social-links {
      margin-top: 2rem;

      .social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: var(--bg-dark-light);
        border-radius: 50%;
        color: var(--text-light);
        margin: 0 0.5rem;
        transition: all 0.3s ease;
        text-decoration: none;

        &:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-3px);
        }

        i {
          font-size: 1.2rem;
        }
      }
    }

    @media (max-width: 768px) {
      .contact-form {
        padding: 2rem;
      }

      .info-card {
        margin-bottom: 1rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted', this.formData);
      this.isSubmitting = false;
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1500);
  }
}
