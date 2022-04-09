import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from 'src/app/calculator/components/calculator/calculator.component';
import { FormComponent } from 'src/app/calculator/components/form/form.component';
import { TableComponent } from 'src/app/calculator/components/table/table.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CalculatorComponent, FormComponent, TableComponent],
})
export class CalculatorModule {}
