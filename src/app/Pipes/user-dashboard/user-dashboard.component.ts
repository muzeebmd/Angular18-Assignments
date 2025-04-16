import { Component } from '@angular/core';
import { ImpureJsonPipe } from "../../customPipes/impure-json.pipe";
import { ExclamationPipe } from "../../customPipes/exclamation.pipe";
import { CommonModule, CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  imports: [ImpureJsonPipe, ExclamationPipe,DatePipe,UpperCasePipe,CurrencyPipe,SlicePipe,CommonModule]
})
export class UserDashboardComponent {
  currentDate = new Date();
  users = [
    { name: 'john doe', joined: new Date(2022, 3, 10), balance: 2450.75 },
    { name: 'alice wonder', joined: new Date(2021, 10, 5), balance: 1340.50 },
    { name: 'robert fox', joined: new Date(2020, 1, 25), balance: 800.00 }
  ];

  userObj = { name: 'Admin', role: 'Superuser' };

  updateUserObj() {
    this.userObj = { ...this.userObj }; // triggers impure pipe
    this.userObj.name = 'Jane Doe';
    console.log('User updated:', this.userObj);
  }
}


