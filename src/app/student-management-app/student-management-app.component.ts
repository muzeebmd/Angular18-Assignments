import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services-all/student-service.service';

// import { Student } from './student.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../services-all/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student-management-app.component.html',
  styleUrls: ['./student-management-app.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  studentForm!: FormGroup;
  isEdit = false;
  selectedId: number | null = null;
  alertMsg = '';

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.loadStudents();
    this.studentForm = this.fb.group({
      rollno: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      branch: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });


  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => this.students = data,
      error: (err: any) => this.alertMsg = err.message
    });
  }
  onSubmit(): void {
    if (this.studentForm.invalid) return;

    const studentData = this.studentForm.value;

    if (this.isEdit && this.selectedId !== null) {
      this.studentService.updateStudent(this.selectedId, studentData).subscribe({
        next: () => {
          this.alertMsg = 'Student updated successfully!';
          this.resetForm();
          this.loadStudents();
        },
        error: (err: { message: string; }) => this.alertMsg = err.message
      });
    } else {
      this.studentService.addStudent(studentData).subscribe({
        next: () => {
          this.alertMsg = 'Student added successfully!';
          this.resetForm();
          this.loadStudents();
        },
        error: (err: { message: string; }) => this.alertMsg = err.message
      });
    }
  }

  onEdit(student: Student): void {
    this.isEdit = true;
    this.selectedId = student.id || null;
    this.studentForm.patchValue({
      rollno: student.rollno,
      name: student.name,
      branch: student.branch,
      email: student.email
    });
  }

  onDelete(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.alertMsg = 'Student deleted successfully!';
          this.loadStudents();
        },
        error: (err: { message: string; }) => this.alertMsg = err.message
      });
    }
  }

  onDeleteAll(): void {
    if (confirm('Delete all students?')) {
      this.students.forEach(student => {
        if (student.id) {
          this.studentService.deleteStudent(student.id).subscribe({
            next: () => {
              this.alertMsg = 'All students deleted successfully!';
              this.loadStudents();
            },
            error: (err: { message: string; }) => this.alertMsg = err.message
          });
        }
      });
    }
  }

  resetForm(): void {
    this.studentForm.reset();
    this.isEdit = false;
    this.selectedId = null;
  }
}