import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { strongPasswordValidator } from '../../password-validator.validator';

@Component({
  selector: 'app-reactiveform',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  studentForm: FormGroup;
  submittedForm: any = null;
  isSubmitted = false;
  form: any;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with form controls and their validations
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Contact validation for 10 digits
      password: ['', [Validators.required, Validators.minLength(5), strongPasswordValidator()]]
    });
  }
  get password() {
    return this.studentForm.get('password');
  }

  // Submit form method
  onSubmit() {
    if (this.studentForm.invalid) {
      
      return;  // Don't proceed if the form is invalid
    }

    // Capture form data
    this.submittedForm = this.studentForm.value;
    this.isSubmitted = true;
    console.log('Form Submitted:', this.submittedForm);
  }

  // Reset form method
  resetForm() {
    this.studentForm.reset();  // Reset the form controls
    this.isSubmitted = false;  // Hide submitted data
  }
}
