import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  imports: [RevealDirective],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {}
