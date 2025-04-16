import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateformComponent } from "./templateform/templateform.component";

@Component({
  selector: 'app-forms',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}
