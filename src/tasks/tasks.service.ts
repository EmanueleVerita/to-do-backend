import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  create(title: string): Promise<Task> {
    const task = this.taskRepo.create({ title });
    return this.taskRepo.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  async toggle(id: number): Promise<Task> {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new Error('Task not found');
    task.completed = !task.completed;
    return this.taskRepo.save(task);
  }

  async delete(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
