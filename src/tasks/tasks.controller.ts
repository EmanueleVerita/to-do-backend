import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Patch(':id')
  toggleCompleted(@Param('id') id: string) {
    return this.tasksService.toggle(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.tasksService.delete(+id);
    return { message: 'Task deleted' };
  }
}
