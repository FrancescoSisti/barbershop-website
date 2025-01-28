import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="contact py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold" data-aos="fade-up">Contattaci</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Siamo qui per rispondere a tutte le tue domande
          </p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="contact-info">
              <h3 class="mb-4">Informazioni</h3>

              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Indirizzo</h4>
                  <p>Via Statale, 211/A, 42013 Casalgrande RE</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-phone"></i>
                <div>
                  <h4>Telefono</h4>
                  <p><a href="tel:0536824813">0536 824813</a></p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-clock"></i>
                <div>
                  <h4>Orari di Apertura</h4>
                  <ul class="hours-list">
                    <li><span>Lunedì:</span> Chiuso</li>
                    <li><span>Martedì:</span> 08:30–12:00, 14:30–19:00</li>
                    <li><span>Mercoledì:</span> 08:30–12:00, 14:30–19:00</li>
                    <li><span>Giovedì:</span> 08:30–19:00</li>
                    <li><span>Venerdì:</span> 08:30–19:00</li>
                    <li><span>Sabato:</span> 07:30–18:00</li>
                    <li><span>Domenica:</span> Chiuso</li>
                  </ul>
                </div>
              </div>

              <div class="map mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.9391649066897!2d10.7876!3d44.5876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM1JzE1LjQiTiAxMMKwNDcnMTUuNCJF!5e0!3m2!1sen!2sit!4v1620000000000!5m2!1sen!2sit"
                  width="100%"
                  height="300"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left">
            <div class="contact-form">
              <h3 class="mb-4">Invia un Messaggio</h3>
              <form (submit)="onSubmit($event)">
                <div class="mb-3">
                  <label for="name" class="form-label">Nome e Cognome</label>
                  <input type="text" class="form-control" id="name" [(ngModel)]="formData.name" name="name" required>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" [(ngModel)]="formData.email" name="email" required>
                </div>

                <div class="mb-3">
                  <label for="subject" class="form-label">Oggetto</label>
                  <input type="text" class="form-control" id="subject" [(ngModel)]="formData.subject" name="subject" required>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">Messaggio</label>
                  <textarea class="form-control" id="message" rows="5" [(ngModel)]="formData.message" name="message" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Invia Messaggio</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    }

    .contact-info, .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      height: 100%;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;

      i {
        font-size: 1.5rem;
        color: #9f6000;
        margin-top: 0.25rem;
      }

      h4 {
        margin: 0;
        color: #1a1a1a;
        font-size: 1.1rem;
      }

      p {
        margin: 0.5rem 0 0;
        color: #666;
      }

      a {
        color: #666;
        text-decoration: none;

        &:hover {
          color: #9f6000;
        }
      }
    }

    .hours-list {
      list-style: none;
      padding: 0;
      margin: 0.5rem 0 0;

      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        color: #666;

        span {
          font-weight: 500;
          color: #1a1a1a;
          margin-right: 1rem;
        }
      }
    }

    .form-control {
      padding: 0.8rem;
      border-radius: 8px;
      border: 1px solid #dee2e6;

      &:focus {
        border-color: #9f6000;
        box-shadow: 0 0 0 0.2rem rgba(159, 96, 0, 0.25);
      }
    }

    .btn-primary {
      background: #9f6000;
      border-color: #9f6000;
      padding: 0.8rem 2rem;
      border-radius: 30px;

      &:hover {
        background: #7d4b00;
        border-color: #7d4b00;
      }
    }

    .map {
      border-radius: 8px;
      overflow: hidden;
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

  onSubmit(event: Event) {
    event.preventDefault();
    // In a real application, this would send the form data to a backend server
    console.log('Form submitted:', this.formData);
    alert('Grazie per il tuo messaggio! Ti risponderemo il prima possibile.');
    this.resetForm();
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
