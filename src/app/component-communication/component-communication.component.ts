import { Component } from '@angular/core';
import { Task, TaskService } from '../services-all/task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';

import { TasksComponent } from './tasks-form/tasks-form.component';

@Component({
  selector: 'app-component-communication',
  imports: [TaskListComponent,TasksComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css'
})
export class ComponentCommunicationComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  editTask(updatedTask: Task) {
    this.taskService.updateTask(updatedTask);
  }
}
