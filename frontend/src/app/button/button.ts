import { Component,HostBinding,input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  variant = input.required<string>()
  size = input.required<string>()
  disabled = input<boolean>()

  @HostBinding('style.pointer-events')
  get disableClicks() {
    return this.disabled() ? 'none' : 'auto'
  }
}
