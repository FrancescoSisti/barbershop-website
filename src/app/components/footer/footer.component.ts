import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="footer-info">
              <h3>Cipri Mp Parrucchieri</h3>
              <p>
                Il tuo salone di fiducia per tagli, trattamenti e styling professionali.
                Vieni a trovarci per un'esperienza unica di bellezza e relax.
              </p>
              <div class="social-links">
                <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="footer-links">
              <h4>Link Utili</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Servizi</a></li>
                <li><a href="#gallery">Galleria</a></li>
                <li><a href="#reviews">Recensioni</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#contact">Contatti</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="footer-contact">
              <h4>Contattaci</h4>
              <p>
                <i class="fas fa-map-marker-alt"></i> Via Statale, 211/A<br>
                42013 Casalgrande RE<br>
                <i class="fas fa-phone"></i> <a href="tel:0536824813">0536 824813</a><br>
              </p>
            </div>
          </div>
        </div>

        <div class="footer-bottom text-center mt-4">
          <div class="copyright">
            &copy; {{currentYear}} <strong>Cipri Mp Parrucchieri</strong>. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1a1a1a;
      color: #fff;
      padding: 4rem 0 2rem;
    }

    .footer-info {
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
      }

      p {
        color: #aaa;
        line-height: 1.6;
      }
    }

    .social-links {
      margin-top: 1.5rem;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #333;
        color: #fff;
        border-radius: 50%;
        margin-right: 0.5rem;
        transition: all 0.3s ease;

        &:hover {
          background: #9f6000;
          transform: translateY(-3px);
        }
      }
    }

    .footer-links {
      h4 {
        font-size: 1.2rem;
        color: #fff;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: #aaa;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: #9f6000;
            }
          }
        }
      }
    }

    .footer-contact {
      h4 {
        font-size: 1.2rem;
        color: #fff;
        margin-bottom: 1rem;
      }

      p {
        color: #aaa;
        line-height: 1.8;

        i {
          color: #9f6000;
          margin-right: 0.5rem;
        }

        a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #9f6000;
          }
        }
      }
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid #333;
      color: #aaa;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
