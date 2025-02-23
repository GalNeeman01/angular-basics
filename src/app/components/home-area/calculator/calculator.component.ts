import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
    public a : number = 0;
    public b : number = 0;
    public operator : string = "*";
    public result : number = 0;

    public calculate() : void {
        this.result = eval(this.a + this.operator + this.b);
    }
}
