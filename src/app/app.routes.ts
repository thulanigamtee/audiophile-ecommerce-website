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
    component: HomeComponent,
  },
  {
    path: 'headphones',
    component: HeadphonesComponent,
  },
  {
    path: 'speakers',
    component: SpeakersComponent,
  },
  {
    path: 'earphones',
    component: EarphonesComponent,
  },
  {
    path: ':category/details/:id',
    component: DetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
