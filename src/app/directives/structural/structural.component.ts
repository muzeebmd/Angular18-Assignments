import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  showText = true;
  colors = ['Red', 'Blue', 'Green'];
  selectedColor: string = '';
}
