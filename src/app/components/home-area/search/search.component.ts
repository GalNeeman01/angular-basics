import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    public tooltip : string = "bitch";

    public textToSearch : string = "";

    public search() : void {
        alert("Searching for " + this.textToSearch);

        this.textToSearch = "";
    }
}
