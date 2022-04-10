import { Injectable } from '@angular/core';
import { ProductInterface } from 'src/app/calculator/types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  products: ProductInterface[] = [
    {
      id: '1',
      name: 'CPU',
      description: 'Intel i9',
      category: 'Software',
      price: 592,
    },
    {
      id: '2',
      name: 'GPU',
      description: 'RTX 3090',
      category: 'Peripherals',
      price: 5921,
    },
  ];
  constructor() {}

  getProducts() {
    return this.products.slice();
  }
}
