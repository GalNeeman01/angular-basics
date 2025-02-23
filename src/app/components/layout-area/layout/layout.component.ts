import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "../../home-area/home/home.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
