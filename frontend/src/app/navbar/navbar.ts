import { Component, signal } from '@angular/core';
import { Link } from '../shared/component/link/link';

@Component({
  selector: 'app-navbar',
  imports: [Link],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  name: string = 'eai';
  links = signal<Array<{ link: string; name: string; id: number;category: string }>>([
    { link: '/', name: 'Home', id: 1, category: 'link' },
    { link: '/', name: 'Produtos', id: 2, category: 'products'},
    { link: '/', name: 'ESG', id: 3, category: 'link' },
    { link: '/', name: 'Contato', id: 4, category: 'link' }
  ]);

}
