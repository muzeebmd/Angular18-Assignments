import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../services-all/students-data.service';  // Ensure correct path to your service
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { FormsModule } from '@angular/forms';
import id from '@angular/common/locales/id';
@Component({  
  selector: 'app-api-communication',
  templateUrl: './api-communication.component.html',
  styleUrls: ['./api-communication.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ApiCommunicationComponent implements OnInit {

  fetchStudents: any[] = [];  // This will hold the list of students
  students: any;
  newStudent: any = { id: '', name: '', age: 0 };
  studentId: number = 0;

  studentToUpdate: any = { id: null, name: '', age: null };

  constructor(private studentsDataService: StudentsDataService) { }

  ngOnInit(): void {
    //this.fetchStudents();
  }
  //Fetches all students
  fetchStudentsList(): void {
    this.studentsDataService.getAllStudents().subscribe(
      (data: any[]) => {
        this.fetchStudents = data;  // Set the fetched data to fetchStudents
      },
      (error) => {
        console.error('Error Fetching Students:', error);  // Log any error
        alert('There was an error fetching the students.');
      }
    );
  }
  //Fetches student by ID
  getStudentById(id: number): void {
    if (!id || id <= 0) {
      alert("Please enter a valid Student ID");
      return;
    }

    this.studentsDataService.getStudentById(id).subscribe(
      (data: any) => {
        alert("Student fetched successfully!");
        console.log('Fetched Student:', data);
        this.students = data;
      },
      (error) => {
        console.error('Error Fetching Students:', error);
        alert('There was an error fetching the students.'); // Log any error
      }
    );
  }
  //Add new Student
  addStudent(): void {
    if (this.newStudent.name && this.newStudent.age > 0) {
      this.studentsDataService.addStudent(this.newStudent).subscribe(
        (data) => {
          alert("Student added successfully!");
          this.fetchStudentsList();
          this.newStudent = { id: '', name: '', age: 0 };
        },
        (error: any) => {
          console.error("error adding student:", error);
          alert("There was an error adding the student.")
        }
      )
    } else {
      alert("please provide valid name and age");
    }
  }

  // Update Student 
  editStudent(student: any): void {
    // Assign the student data to studentToUpdate
    this.studentToUpdate = { ...student };
  }

  // Update the student by ID
  updateStudent(): void {
    if (this.studentToUpdate.id) {
      this.studentsDataService.updateStudent(this.studentToUpdate.id, this.studentToUpdate).subscribe(
        () => {
          alert('Student updated successfully!');
          this.fetchStudentsList();  // Refresh the student list
          this.studentToUpdate = { id: null, name: '', age: null };  // Reset the form after update
        },
        (error) => {
          console.error('Error updating student:', error);
          alert('There was an error updating the student.');
        }
      );
    } else {
      alert('Invalid Student ID!');
    }
  }

  //Delete Student By Id
  deleteStudent(id: any): void {

    this.studentsDataService.deleteStudent(id).subscribe(
      () => {
        alert('Student deleted successfully!');
        this.fetchStudentsList();  // Refresh the student list
      },
      (error) => {
        console.error('Error Deleting Student:', error);
        alert('There was an error deleting the student.');
      }
    );
  }
  //Deletes all Students
  deleteAllStudents(): void {
    this.studentsDataService.deleteAllStudents().subscribe(
      () => {
        alert('All students have been deleted!');
        this.fetchStudentsList();  // Refresh the student list
      },
      (error: any) => {
        console.error('Error deleting students:', error);
        alert('There was an error deleting the students.');
      }
    );
  }

}
