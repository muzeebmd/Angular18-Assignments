import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  isRed = false;
  isBold = false;
  divStyle = { 'background-color': 'yellow', 'font-size': '20px' };
}
