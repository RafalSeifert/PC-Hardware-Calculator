import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductInterface } from 'src/app/calculator/types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  productsChanged = new Subject<ProductInterface[]>();
  private products: ProductInterface[] = [];
  constructor() {}

  getProducts() {
    return this.products.slice();
  }

  addProduct(product: ProductInterface) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(i: number) {
    this.products.splice(i, 1);
    this.productsChanged.next(this.products.slice());
  }
}
