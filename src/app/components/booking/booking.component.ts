import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialties: string[];
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf
  ],
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

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Marco Rossi',
      role: 'Master Barber & Fondatore',
      specialties: ['Taglio Classico', 'Barba Tradizionale', 'Styling Avanzato']
    },
    {
      id: 2,
      name: 'Sofia Ricci',
      role: 'Creative Director',
      specialties: ['Taglio Moderno', 'Colorazione', 'Trattamenti Capelli']
    },
    {
      id: 3,
      name: 'Giulia Marino',
      role: 'Color Specialist',
      specialties: ['Colorazione Avanzata', 'Trattamenti', 'Balayage']
    },
    {
      id: 4,
      name: 'Alessandro Mari',
      role: 'Style Expert',
      specialties: ['Taglio Trendy', 'Barba Moderna', 'Styling Creativo']
    }
  ];

  availableTimeSlots: { [key: string]: string[] } = {};
  minDate = new Date().toISOString().split('T')[0];
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0];

  bookingData = {
    service: '',
    date: '',
    time: '',
    teamMember: '',
    name: '',
    phone: '',
    email: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['serviceName']) {
        this.bookingData.service = params['serviceName'];
      }
    });
  }

  onDateSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const selectedDate = input.value;
    this.generateAvailableTimeSlots(selectedDate);
  }

  generateAvailableTimeSlots(date: string) {
    const slots: string[] = [];
    const baseHours = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
      '17:30', '18:00', '18:30'];

    baseHours.forEach(hour => {
      if (Math.random() > 0.3) {
        slots.push(hour);
      }
    });

    this.availableTimeSlots[date] = slots;
  }

  hasAvailableSlots(date: string): boolean {
    return !!(this.availableTimeSlots[date]?.length);
  }

  getAvailableSlots(date: string): string[] {
    return this.availableTimeSlots[date] || [];
  }

  filterAvailableBarbers() {
    if (!this.bookingData.service) return this.teamMembers;
    return this.teamMembers.filter(member =>
      member.specialties.some(specialty =>
        specialty.toLowerCase().includes(this.bookingData.service.toLowerCase())
      )
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Booking submitted:', this.bookingData);
    alert('Grazie per la tua prenotazione! Ti contatteremo presto per confermare l\'appuntamento.');
    this.resetForm();
  }

  private resetForm() {
    this.bookingData = {
      service: '',
      date: '',
      time: '',
      teamMember: '',
      name: '',
      phone: '',
      email: ''
    };
    this.availableTimeSlots = {};
  }
}
