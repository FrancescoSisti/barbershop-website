import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      name: 'Taglio Classico',
      description: 'Un taglio tradizionale perfetto per ogni occasione, include lavaggio e styling.',
      price: 25,
      duration: 30,
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80'
    },
    {
      id: 2,
      name: 'Barba',
      description: 'Rifinitura e modellatura della barba con prodotti premium e asciugatura.',
      price: 20,
      duration: 25,
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Taglio & Barba',
      description: 'Combinazione di taglio capelli e sistemazione barba per un look completo.',
      price: 40,
      duration: 50,
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      name: 'Shampoo & Styling',
      description: 'Lavaggio professionale con massaggio e styling personalizzato.',
      price: 15,
      duration: 20,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    },
    {
      id: 5,
      name: 'Colorazione',
      description: 'Colorazione professionale con prodotti di alta qualità.',
      price: 45,
      duration: 60,
      image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
    },
    {
      id: 6,
      name: 'Trattamento Luxury',
      description: 'Esperienza premium completa con prodotti e servizi esclusivi.',
      price: 60,
      duration: 75,
      image: 'https://images.unsplash.com/photo-1634302086887-13b5585a8831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  bookService(service: Service): void {
    this.router.navigate(['/booking'], {
      queryParams: {
        serviceId: service.id,
        serviceName: service.name
      }
    });
  }

  selectService(service: Service): void {
    // Trova il componente di prenotazione e imposta il servizio selezionato
    const bookingForm = document.querySelector('#booking select[name="service"]') as HTMLSelectElement;
    if (bookingForm) {
      bookingForm.value = service.name;
      // Trigger dell'evento change per aggiornare il modello
      bookingForm.dispatchEvent(new Event('change'));
    }
  }
}
