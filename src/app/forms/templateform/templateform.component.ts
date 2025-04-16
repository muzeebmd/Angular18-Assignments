import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, CommonModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
// Declare a student object to store form data
student = {
  name: '',
  age: null,
  email: '',
  course: ''
};

courses = ['Math', 'Science', 'History', 'Art', 'Computer Science'];

isSubmitted = false;
submittedForm: any;
studentForm: any;
onSubmit(form: NgForm) {
  if(form.invalid){
    //console.log('invalid form',form);
    return ;
  }
  this.submittedForm = { ...this.student }; // Create a copy to preserve original
  this.isSubmitted = true;
  console.log('FormSubmitted:',this.submittedForm);
}
resetForm(form: NgForm) {
  this.isSubmitted = false;
  form.resetForm();
}
}

