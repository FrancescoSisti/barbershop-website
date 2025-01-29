import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  experience: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Marco Rossi',
      role: 'Master Barber & Fondatore',
      image: 'https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?q=80&w=1470&auto=format&fit=crop',
      specialties: ['Taglio Classico', 'Barba Tradizionale', 'Styling Avanzato'],
      experience: '15 anni di esperienza'
    },
    {
      id: 2,
      name: 'Luca Bianchi',
      role: 'Senior Stylist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop',
      specialties: ['Taglio Moderno', 'Colorazione', 'Trattamenti Capelli'],
      experience: '8 anni di esperienza'
    },
    {
      id: 3,
      name: 'Giuseppe Verdi',
      role: 'Color Specialist',
      image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop',
      specialties: ['Colorazione Avanzata', 'Trattamenti', 'Balayage Uomo'],
      experience: '10 anni di esperienza'
    },
    {
      id: 4,
      name: 'Alessandro Mari',
      role: 'Style Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
      specialties: ['Taglio Trendy', 'Barba Moderna', 'Styling Creativo'],
      experience: '6 anni di esperienza'
    },
    {
      id: 5,
      name: 'Roberto Conti',
      role: 'Beard Master',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop',
      specialties: ['Barba Artistica', 'Rasatura Classica', 'Trattamenti Barba'],
      experience: '12 anni di esperienza'
    }
  ];

  currentIndex = 0;
  autoScrollInterval: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  prevSlide() {
    this.stopAutoScroll();
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
    this.startAutoScroll();
  }

  nextSlide() {
    this.stopAutoScroll();
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
    this.startAutoScroll();
  }

  goToSlide(index: number) {
    this.stopAutoScroll();
    this.currentIndex = index;
    this.startAutoScroll();
  }

  private startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
    }, 5000); // Cambia slide ogni 5 secondi
  }

  private stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
