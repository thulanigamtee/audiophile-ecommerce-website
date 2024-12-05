import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OutroComponent } from './components/outro/outro.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    OutroComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  backgroundClass: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setBackgroundClass(event.urlAfterRedirects);
        this.isCheckoutPage(event.urlAfterRedirects);
      }
    });
  }

  setBackgroundClass(url: string): void {
    if (url.includes('details') || url.startsWith('/checkout')) {
      this.backgroundClass = 'details-page-background';
    } else if (url === '/') {
      this.backgroundClass = 'home-page-background';
    } else if (
      url.startsWith('/headphones') ||
      url.startsWith('/speakers') ||
      url.startsWith('/earphones')
    ) {
      this.backgroundClass = 'products-page-background';
    }
  }

  isCheckout: boolean = false;
  isCheckoutPage(url: string) {
    if (url.startsWith('/checkout')) {
      this.isCheckout = true;
      return;
    }
    this.isCheckout = false;
  }
}
