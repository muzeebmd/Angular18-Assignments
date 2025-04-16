import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  title = 'Simple-form';
  // Properties for data binding
  userName: string = '';
  userCity: string = '';
  userEmail: string = '';

  // Method to handle button click event
  updateUser() {
    alert(`User Updated: ${this.userName}, ${this.userCity}, ${this.userEmail}`);
  }
}
