import { Component,input,output } from '@angular/core';
import { LinkData } from './model';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class Link {
  content = input.required<string>();
  variant = input<'primary' | 'secondary'>('primary')

  clicado = output<string>()

  clickHandler(clicado: MouseEvent) {
    this.clicado.emit('fodase')
  }
}
