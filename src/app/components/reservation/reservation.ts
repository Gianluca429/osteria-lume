import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal';

@Component({
  imports: [RevealDirective],
  selector: 'app-reservation',
  styleUrl: './reservation.scss',
  templateUrl: './reservation.html',
})
export class Reservation {}
