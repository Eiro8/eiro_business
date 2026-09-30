import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  PageName = input.required<string>()
  textEmit = output<string>()

  onButtonClick() {
    this.textEmit.emit('I just wanna fuck')
  }
}
