import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () =>
    //   import('./pages/home/home.component').then(
    //     (component) => component.HomeComponent
    //   ),
    component: HomeComponent,
  },
  {
    path: 'headphones',
    loadComponent: () =>
      import('./pages/headphones/headphones.component').then(
        (component) => component.HeadphonesComponent
      ),
  },
  {
    path: 'speakers',
    loadComponent: () =>
      import('./pages/speakers/speakers.component').then(
        (component) => component.SpeakersComponent
      ),
  },
  {
    path: 'earphones',
    loadComponent: () =>
      import('./pages/earphones/earphones.component').then(
        (component) => component.EarphonesComponent
      ),
  },
  {
    path: ':category/details/:id',
    loadComponent: () =>
      import('./pages/details/details.component').then(
        (component) => component.DetailsComponent
      ),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (component) => component.CheckoutComponent
      ),
  },
];
