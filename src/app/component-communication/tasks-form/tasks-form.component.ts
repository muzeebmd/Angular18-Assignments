import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
  import { Task,  } from '../../services-all/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.css'
})
export class TasksComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  
  // Ensure task is initialized with a default value
  task: Task = { id: 0, title: '', description: '', completed: false };

  onSubmit() {
    this.taskAdded.emit(this.task);
    this.task = { id: 0, title: '', description: '', completed: false }; // Reset after submission
}
}

