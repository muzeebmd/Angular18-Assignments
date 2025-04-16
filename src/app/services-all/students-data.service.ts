import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Student {
  id: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {  
 
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  //Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/students`);
  }
  //Get Student by Id
  getStudentById(id: any): Observable<Student> {
    return this.http.get<any>(`${this.url}/students/${id}`);
  }
  //Add new Student
  addStudent(student:Student):Observable<any>{
    return this.http.post(`${this.url}/students/`,student);
  }
  // Update an existing student
  updateStudent(id: number, student:Student ): Observable<Student> {
    return this.http.put<any>(`${this.url}/students/${id}`, student);
  }

  // Delete a student by ID
  deleteStudent(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/students/${id}`);
  }

  //Deletes all students
  deleteAllStudents(): Observable<any> {
    return this.http.delete<any>(`${this.url}/students`);
  }
}
