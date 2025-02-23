import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { CalculatorComponent } from "../calculator/calculator.component";
import { TipComponent } from "../tip/tip.component";
import { SloganComponent } from "../slogan/slogan.component";
import { SmileyComponent } from "../smiley/smiley.component";

@Component({
  selector: 'app-home',
  imports: [SearchComponent, CalculatorComponent, TipComponent, SloganComponent, SmileyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    public reportedSmiley : string = "";

    public displaySmiley(smiley: string) : void {
        this.reportedSmiley = smiley;
    }
}
