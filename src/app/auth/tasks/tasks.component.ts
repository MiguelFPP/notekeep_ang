import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/sevices/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  loading: boolean = false;
  content: string;

  constructor(private _taskService: TaskService) {
    this.content = '';
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.loading = true;
    this._taskService.getTasks().subscribe(
      ({ data }) => {
        this.tasks = data;
        console.log(this.tasks);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
