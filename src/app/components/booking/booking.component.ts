import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Barber {
  id: number;
  name: string;
  specialties: string[];
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  barbers: Barber[] = [
    {
      id: 1,
      name: 'Marco Rossi',
      specialties: ['Taglio Classico', 'Barba', 'Styling Speciale']
    },
    {
      id: 2,
      name: 'Luca Bianchi',
      specialties: ['Taglio Moderno', 'Colorazione', 'Trattamenti']
    },
    {
      id: 3,
      name: 'Giuseppe Verdi',
      specialties: ['Colorazione', 'Trattamenti', 'Styling']
    },
    {
      id: 4,
      name: 'Alessandro Mari',
      specialties: ['Taglio Classico', 'Barba', 'Styling Base']
    }
  ];

  selectedDate: Date = new Date();
  currentMonth: Date = new Date();
  calendarDays: Date[] = [];
  selectedTimeSlot: string = '';
  availableTimeSlots: TimeSlot[] = [];

  bookingData = {
    service: '',
    barberId: null as number | null,
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  };

  constructor(private route: ActivatedRoute) {
    this.generateCalendar();
    this.generateTimeSlots();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['serviceName']) {
        this.bookingData.service = params['serviceName'];
      }
    });
  }

  generateCalendar() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    this.calendarDays = [];

    // Add previous month's days
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      this.calendarDays.push(date);
    }

    // Add current month's days
    for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
      this.calendarDays.push(new Date(date));
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      this.calendarDays.push(date);
    }
  }

  generateTimeSlots() {
    const baseSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
      '17:30', '18:00', '18:30'
    ];

    this.availableTimeSlots = baseSlots.map(time => ({
      time,
      available: Math.random() > 0.3 // Randomly mark some slots as unavailable
    }));
  }

  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.generateCalendar();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.bookingData.date = date.toISOString().split('T')[0];
    this.generateTimeSlots(); // Regenerate time slots for the new date
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  isSelected(date: Date): boolean {
    return date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear();
  }

  isPastDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth.getMonth();
  }

  selectTimeSlot(slot: TimeSlot) {
    if (slot.available) {
      this.selectedTimeSlot = slot.time;
      this.bookingData.time = slot.time;
    }
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
      barberId: null,
      date: '',
      time: '',
      name: '',
      phone: '',
      email: ''
    };
    this.selectedTimeSlot = '';
  }

  getMonthName(date: Date): string {
    return date.toLocaleString('it-IT', { month: 'long' });
  }
}
