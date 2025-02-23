import { Component, EventEmitter, Output } from '@angular/core';
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

    @Output()
    public answerFound = new EventEmitter();

    public calculate() : void {
        this.result = eval(this.a + this.operator + this.b);

        if (this.result === 42) {
            this.answerFound.emit();
        }
    }
}
