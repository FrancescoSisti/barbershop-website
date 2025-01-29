import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
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
