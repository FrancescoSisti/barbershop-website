import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `
    <section id="booking" class="booking py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">Prenota il Tuo Appuntamento</h2>
            <p class="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Scegli il servizio, la data e l'orario che preferisci
            </p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="booking-form" data-aos="fade-up" data-aos-delay="200">
              <form (submit)="onSubmit($event)">
                <div class="mb-4">
                  <label for="service" class="form-label">Servizio</label>
                  <select class="form-select" id="service" [(ngModel)]="bookingData.service" name="service">
                    <option value="">Seleziona un servizio</option>
                    <option *ngFor="let service of services" [value]="service">{{service}}</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label for="date" class="form-label">Data</label>
                  <input type="date" class="form-control" id="date" [(ngModel)]="bookingData.date" name="date">
                </div>

                <div class="mb-4">
                  <label for="time" class="form-label">Orario</label>
                  <select class="form-select" id="time" [(ngModel)]="bookingData.time" name="time">
                    <option value="">Seleziona un orario</option>
                    <option *ngFor="let time of availableTimes" [value]="time">{{time}}</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label for="name" class="form-label">Nome e Cognome</label>
                  <input type="text" class="form-control" id="name" [(ngModel)]="bookingData.name" name="name">
                </div>

                <div class="mb-4">
                  <label for="phone" class="form-label">Telefono</label>
                  <input type="tel" class="form-control" id="phone" [(ngModel)]="bookingData.phone" name="phone">
                </div>

                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" [(ngModel)]="bookingData.email" name="email">
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg">Prenota Ora</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .booking {
      background: var(--bg-dark);
    }

    .booking-form {
      background: var(--bg-dark-light);
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .form-label {
      color: var(--text-light);
      font-weight: 500;
    }

    .form-control, .form-select {
      background-color: var(--bg-dark-lighter);
      padding: 0.8rem;
      border-radius: 8px;
      border: 1px solid var(--gray-300);
      color: var(--text-light);

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
export class BookingComponent implements OnInit {
  services = [
    'Taglio Classico',
    'Barba',
    'Taglio & Barba',
    'Trattamento Capelli',
    'Colorazione',
    'Styling Speciale'
  ];

  availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30'
  ];

  bookingData = {
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Recupera i parametri dalla URL
    this.route.queryParams.subscribe(params => {
      if (params['serviceName']) {
        this.bookingData.service = params['serviceName'];
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // In a real application, this would send the data to a backend server
    console.log('Booking submitted:', this.bookingData);
    alert('Grazie per la tua prenotazione! Ti contatteremo presto per confermare l\'appuntamento.');
    this.resetForm();
  }

  private resetForm() {
    this.bookingData = {
      service: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: ''
    };
  }
}
