import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent {
  height!: number;
  weight!: number;
  bmi!: number;
  bmiCategory!: string;

  calculateBMI() {
    const heightInMeters = this.height / 100;
    this.bmi = this.weight / (heightInMeters * heightInMeters);

    if (this.bmi < 18.5) {
      this.bmiCategory = 'underweight';
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.bmiCategory = 'normal weight';
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.bmiCategory = 'overweight';
    } else {
      this.bmiCategory = 'obese';
    }
  }
}
