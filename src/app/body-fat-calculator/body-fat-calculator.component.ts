import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-fat-calculator',
  templateUrl: './body-fat-calculator.component.html',
  styleUrls: ['./body-fat-calculator.component.less']
})
export class BodyFatCalculatorComponent {
  bodyMassForm!: FormGroup;
  bfc!: number;
  bodyFat!: number;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.bodyMassForm = this.fb.group({
      waist: ['', Validators.compose([Validators.required, Validators.min(1)])],
      hip: ['', Validators.compose([Validators.required, Validators.min(1)])],
      weight: ['', Validators.compose([Validators.required, Validators.min(1)])],
      height: ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  calculateBodyFat() {
    const waist = this.bodyMassForm.get('waist')?.value;
    const hip = this.bodyMassForm.get('hip')?.value;
    const weight = this.bodyMassForm.get('weight')?.value;
    const height = this.bodyMassForm.get('height')?.value / 100; // სიმაღლე მეტრებში 
  
    const waistHipRatio = waist / hip;
    const bfc = weight / (height * height);
  
    // Use BMI and waist-to-hip ratio to calculate body fat percentage
    this.bfc = (1.2 * bfc) + (0.23 * waistHipRatio) - 10.8 - 5.4;
  }

  onSubmit() {
    if (this.bodyMassForm.valid) {
      this.calculateBodyFat();
    }

  }
  
}
