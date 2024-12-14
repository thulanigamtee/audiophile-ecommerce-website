import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OverlayService } from '../../../services/overlay.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, OutsideClickDirective],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  private destroy$ = new Subject<void>();
  mobileMenuLinks: { image: string; name: string; path: string }[] = [
    {
      image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
      name: 'headphones',
      path: 'headphones',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
      name: 'speakers',
      path: 'speakers',
    },
    {
      image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
      name: 'earphones',
      path: 'earphones',
    },
  ];

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width:1024px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isMobileMenuActive) {
          this.isMobileMenuActive = false;
          this.overlayService.overlayState = false;
        }
      });
  }

  handleOutsideClick() {
    if (this.isMobileMenuActive) {
      this.isMobileMenuActive = false;
      this.overlayService.overlayState = false;
    }
  }

  isMobileMenuActive: boolean = false;
  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuActive = !this.isMobileMenuActive;
    this.overlayService.overlayState = !this.overlayService.overlayState;
  }

  goToPage(page: string) {
    this.router.navigate([page]);
    this.isMobileMenuActive = false;
    this.overlayService.overlayState = false;
  }
}
