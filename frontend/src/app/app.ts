import { Component, } from '@angular/core';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Footer,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected page = {
    title: 'my first angular webapp',
    description: 'my firt angular hello world'
  }
}
