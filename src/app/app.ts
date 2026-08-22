import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Intro } from './components/intro/intro';
import { MenuPreview } from './components/menu-preview/menu-preview';
import { Philosophy } from './components/philosophy/philosophy';
import { Gallery } from './components/gallery/gallery';
import { Reservation } from './components/reservation/reservation';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar, Hero, Intro, MenuPreview, Philosophy, Gallery, Reservation, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('osteria-lume');
}
