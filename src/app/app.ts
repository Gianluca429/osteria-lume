import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Intro } from './components/intro/intro';
import { MenuPreview } from './components/menu-preview/menu-preview';

@Component({
  imports: [Navbar, Hero, Intro, MenuPreview],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('osteria-lume');
}
