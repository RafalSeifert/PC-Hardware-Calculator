import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { ProductInterface } from 'src/app/calculator/types/product.interface';
import { CalculatorService } from 'src/app/calculator/services/calculator.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/calculator/components/snackbar/snackbar.component';

@Component({
  selector: 'app-calculator-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  @ViewChild('table') table!: MatTable<ProductInterface[]>;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'category',
    'price',
    'action',
  ];
  products: ProductInterface[];
  private productsChangeSub: Subscription;

  constructor(
    private calculatorService: CalculatorService,
    private _snackBar: MatSnackBar
  ) {
    this.products = this.calculatorService.getProducts();

    this.productsChangeSub = this.calculatorService.productsChanged.subscribe(
      (products: ProductInterface[]) => {
        this.products = products;
      }
    );
  }

  ngOnInit(): void {
    // Getting product's list from CalculatorService
  }

  ngOnDestroy(): void {
    this.productsChangeSub.unsubscribe();
  }

  getTotalCost() {
    return this.products
      .map((product) => product.price)
      .reduce((acc, value) => acc + value, 0);
  }

  // Table rows drag&drop method
  dropTable(event: CdkDragDrop<ProductInterface[]>) {
    const prevIndex = this.products.findIndex((d) => d === event.item.data);
    moveItemInArray(this.products, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  onDeleteProduct(index: number) {
    this.calculatorService.deleteProduct(index);
    this.table.renderRows();
  }

  openSnackbar(): void {
    this._snackBar.openFromComponent(SnackbarComponent, { duration: 6000 });
  }
  onEditProduct(): void {
    this.openSnackbar();
  }
}
