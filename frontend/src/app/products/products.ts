import { Component, input,output } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = input.required<Product[]>();

  selected_product = output<number>()
  /**
   *
   * @param id o ID do produto selecionado
   */
  onProductClick(id: number) {
    this.selected_product.emit(id)
    console.log(id)
  }
}
