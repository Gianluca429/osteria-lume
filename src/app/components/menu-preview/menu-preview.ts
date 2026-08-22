import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-menu-preview',
  imports: [],
  templateUrl: './menu-preview.html',
  styleUrl: './menu-preview.scss',
})
export class MenuPreview {
  menuItems: MenuItem[] = [
    {
      name: 'Tagliolini al limone',
      description: 'Tagliolini freschi, limone di Sorrento, burro affumicato e Parmigiano 36 mesi.',
      price: '€18',
      image: '/images/menu-tagliolini.jpg',
      alt: 'Tagliolini al limone',
    },
    {
      name: 'Risotto al tartufo',
      description: 'Riso Carnaroli, tartufo nero e fonduta di Castelmagno.',
      price: '€24',
      image: '/images/menu-risotto.jpg',
      alt: 'Risotto al tartufo',
    },
    {
      name: 'Tiramisù Lume',
      description: 'Mascarpone, caffè, cacao amaro e savoiardo artigianale.',
      price: '€10',
      image: '/images/menu-tiramisu.jpg',
      alt: 'Tiramisù Lume',
    },
  ];
}
