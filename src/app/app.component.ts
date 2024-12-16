import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OutroComponent } from './components/shared/outro/outro.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OverlayService } from './services/overlay.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastComponent } from './components/shared/toast/toast.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    OutroComponent,
    FooterComponent,
    ToastComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  backgroundClass: string = '';
  isDialogActive: boolean = false;
  isLoading: boolean = true;
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private overlayService: OverlayService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setBackgroundClass(event.urlAfterRedirects);
        this.isCheckoutPage(event.urlAfterRedirects);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
    this.overlayService.overlay$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (isActive) => {
        this.isDialogActive = isActive;
      },
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  routeAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
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
