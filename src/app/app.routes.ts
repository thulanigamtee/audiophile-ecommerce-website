import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';
import { DetailsComponent } from './pages/details/details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

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
    // loadComponent: () =>
    //   import('./pages/headphones/headphones.component').then(
    //     (component) => component.HeadphonesComponent
    //   ),
    component: HeadphonesComponent,
  },
  {
    path: 'speakers',
    // loadComponent: () =>
    //   import('./pages/speakers/speakers.component').then(
    //     (component) => component.SpeakersComponent
    //   ),
    component: SpeakersComponent,
  },
  {
    path: 'earphones',
    // loadComponent: () =>
    //   import('./pages/earphones/earphones.component').then(
    //     (component) => component.EarphonesComponent
    //   ),
    component: EarphonesComponent,
  },
  {
    path: ':category/details/:id',
    // loadComponent: () =>
    //   import('./pages/details/details.component').then(
    //     (component) => component.DetailsComponent
    //   ),
    component: DetailsComponent,
  },
  {
    path: 'checkout',
    // loadComponent: () =>
    //   import('./pages/checkout/checkout.component').then(
    //     (component) => component.CheckoutComponent
    //   ),
    component: CheckoutComponent,
  },
];
