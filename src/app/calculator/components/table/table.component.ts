import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { ProductInterface } from 'src/app/calculator/types/product.interface';
import { CalculatorService } from 'src/app/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @ViewChild('table') table!: MatTable<ProductInterface>;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'category',
    'price',
    'action',
  ];
  products: ProductInterface[];

  constructor(private calculatorService: CalculatorService) {
    // Getting product's list from CalculatorService
    this.products = this.calculatorService.getProducts();
  }

  // Drag&Drop Method
  dropTable(event: CdkDragDrop<ProductInterface[]>) {
    const prevIndex = this.products.findIndex((d) => d === event.item.data);
    moveItemInArray(this.products, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
}
