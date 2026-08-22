import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  imports: [RevealDirective],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
