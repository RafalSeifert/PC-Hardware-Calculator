import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductInterface } from 'src/app/calculator/types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  productsChanged = new Subject<ProductInterface[]>();
  private products: ProductInterface[] = [
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

  addProduct(product: ProductInterface) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }
}
