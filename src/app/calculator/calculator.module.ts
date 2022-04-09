import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CalculatorComponent } from 'src/app/calculator/components/calculator/calculator.component';
import { FormComponent } from 'src/app/calculator/components/form/form.component';
import { TableComponent } from 'src/app/calculator/components/table/table.component';

// Material Modules

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
  ],
  declarations: [CalculatorComponent, FormComponent, TableComponent],
})
export class CalculatorModule {}
