import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  imports: [RevealDirective],
  selector: 'app-intro',
  styleUrl: './intro.scss',
  templateUrl: './intro.html',
})
export class Intro {}
