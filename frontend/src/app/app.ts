import { Component, signal } from '@angular/core';
import { AppFooter } from './app-footer/app-footer';
import { AppNavbar } from './app-navbar/app-navbar';

@Component({
  selector: 'app-root',
  imports: [AppFooter, AppNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected brand = {
    name: 'Eiro',
    email: 'business@eiro.com',
    phone: ''
  };

  protected page = {
    title: 'my first angular webapp',
    description: 'my firt angular hello world'
  }



}
