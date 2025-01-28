import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="contact py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">Contattaci</h2>
            <p class="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Hai domande? Scrivici un messaggio e ti risponderemo al più presto
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-form" data-aos="fade-up" data-aos-delay="200">
              <form (submit)="onSubmit($event)">
                <div class="mb-4">
                  <label for="name" class="form-label">Nome e Cognome</label>
                  <input type="text" class="form-control" id="name" name="name" required>
                </div>

                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email" required>
                </div>

                <div class="mb-4">
                  <label for="subject" class="form-label">Oggetto</label>
                  <input type="text" class="form-control" id="subject" name="subject" required>
                </div>

                <div class="mb-4">
                  <label for="message" class="form-label">Messaggio</label>
                  <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg">Invia Messaggio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--bg-dark);
    }

    .contact-form {
      background: var(--bg-dark-light);
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .form-label {
      color: var(--text-light);
      font-weight: 500;
    }

    .form-control {
      background-color: var(--bg-dark-lighter);
      padding: 0.8rem;
      border-radius: 8px;
      border: 1px solid var(--gray-300);
      color: var(--text-light);
      resize: none;

      &:focus {
        background-color: var(--bg-dark-lighter);
        border-color: var(--primary-color);
        color: var(--text-light);
        box-shadow: 0 0 0 0.2rem rgba(159, 96, 0, 0.25);
      }

      &::placeholder {
        color: var(--text-muted);
      }
    }

    .btn-primary {
      background: var(--primary-color);
      border-color: var(--primary-color);
      padding: 0.8rem 3rem;
      border-radius: 30px;

      &:hover {
        background: var(--primary-dark);
        border-color: var(--primary-dark);
      }
    }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    // Implementare la logica di invio del form
    console.log('Form submitted');
  }
}
