import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  categories: string[] = [
    'Computer components',
    'Peripherals',
    'Software',
    'Other',
  ];
}
