import { Component, signal, } from '@angular/core';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { Product } from './products/products.model';
@Component({
  selector: 'app-root',
  imports: [Footer,Navbar,Products],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  products_available: Product[] = [
    { name: "clolco", description: "xicóoo", image_url: "", price: 24.99, id: 24, url: "https://google.com"},
    { "name": "clocla", "description": "xicóoo", "image_url": "", "price": 0.99, id: 25, url: "https://google.com"},
    { "name": "claclo", "description": "xicóoo", "image_url": "", "price": 24, id: 26, url: "https://google.com"},
    { "name": "clacla", "description": "xicóoo", "image_url": "", "price": 2.99, id: 27, url: "https://google.com"},
    { "name": "clolo", "description": "xicóoo", "image_url": "", "price": 4.99, id: 28, url: "https://google.com"},
  ]

  protected page = signal({
    title: 'my first angular webapp',
    description: 'my firt angular hello world'
  })

  product_id = signal(0)

  onProductSelected(id: number) {
    console.log('called')
    console.log(id)
    const match_id = this.products_available.find(p => p.id === Number(id));
    if (match_id) {
      this.page().title = match_id.name
      this.page().description = match_id.description
    }
  }
}
