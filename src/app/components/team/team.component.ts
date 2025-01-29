import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    specialties: string[];
}

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {
    teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Marco Rossi',
            role: 'Master Barber',
            image: 'assets/images/team/barber-1.jpg',
            specialties: ['Taglio Classico', 'Barba', 'Styling Speciale']
        },
        {
            id: 2,
            name: 'Luca Bianchi',
            role: 'Senior Stylist',
            image: 'assets/images/team/barber-2.jpg',
            specialties: ['Taglio Moderno', 'Colorazione', 'Trattamenti']
        },
        {
            id: 3,
            name: 'Giuseppe Verdi',
            role: 'Color Specialist',
            image: 'assets/images/team/barber-3.jpg',
            specialties: ['Colorazione', 'Trattamenti', 'Styling']
        },
        {
            id: 4,
            name: 'Alessandro Mari',
            role: 'Junior Barber',
            image: 'assets/images/team/barber-4.jpg',
            specialties: ['Taglio Classico', 'Barba', 'Styling Base']
        }
    ];
}
