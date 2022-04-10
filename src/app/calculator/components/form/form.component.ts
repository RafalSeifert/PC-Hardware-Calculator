import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from 'src/app/calculator/types/product.interface';
import { CalculatorService } from 'src/app/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  categories: string[] = [
    'Computer components',
    'Peripherals',
    'Software',
    'Other',
  ];
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addProduct() {
    const newProduct: ProductInterface = {
      id: Math.random(),
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category: this.productForm.value.category,
      price: this.productForm.value.price,
    };
    this.calculatorService.addProduct(newProduct);
    this.productForm.reset();
  }
}
