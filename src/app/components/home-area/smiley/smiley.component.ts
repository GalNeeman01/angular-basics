import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-smiley',
  imports: [],
  templateUrl: './smiley.component.html',
  styleUrl: './smiley.component.css'
})
export class SmileyComponent {
    @Output()
    public smileySelected = new EventEmitter<string>(); // Create event
    
    public handleClick(event: Event) : void {
        const smiley = ((event.target) as HTMLButtonElement).innerText;
        this.smileySelected.emit(smiley); // Raising the event
    }
}
