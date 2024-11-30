import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeadphonesComponent } from './pages/headphones/headphones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { EarphonesComponent } from './pages/earphones/earphones.component';

export const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HeadphonesComponent, path: 'headphones' },
  { component: SpeakersComponent, path: 'speakers' },
  { component: EarphonesComponent, path: 'earphones' },
];
