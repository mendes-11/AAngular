import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    CommonModule,
    NavComponent,
  
  ],
})
export class MainComponent {

}
