import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  footerLinks: { name: string; path: string }[] = [
    { name: 'home', path: '' },
    { name: 'headphones', path: 'headphones' },
    { name: 'speakers', path: 'speakers' },
    { name: 'earphones', path: 'earphones' },
  ];

  socials: { name: string; icon: string }[] = [
    { name: 'facebook', icon: '/assets/shared/desktop/icon-facebook.svg' },
    { name: 'twitter', icon: '/assets/shared/desktop/icon-twitter.svg' },
    { name: 'instagram', icon: '/assets/shared/desktop/icon-instagram.svg' },
  ];
}
