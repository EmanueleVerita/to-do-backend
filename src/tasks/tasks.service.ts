import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  toggleCompleted(id: number): Task | undefined {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    return task;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
