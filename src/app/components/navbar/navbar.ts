import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit, OnDestroy {
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  private heroObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const hero = document.querySelector('.hero');

    if (!hero) {
      return;
    }

    this.heroObserver = new IntersectionObserver(
      ([entry]) => {
        this.isScrolled.set(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px',
      },
    );

    this.heroObserver.observe(hero);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);

    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    this.heroObserver?.disconnect();
    document.body.style.overflow = '';
  }
}
