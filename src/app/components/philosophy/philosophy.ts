import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  imports: [RevealDirective],
  selector: 'app-philosophy',
  styleUrl: './philosophy.scss',
  templateUrl: './philosophy.html',
})
export class Philosophy {}
