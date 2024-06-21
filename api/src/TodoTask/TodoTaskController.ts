import {
  Body,
  Post,
  Controller,
  Query,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateTodoDTO } from './CreateTaskDTO';
import { QueryAllTodosDTO } from './QueryAllTodosDTO';
import { TodoTaskService } from './TodoTaskService';
import { TodoTaskByIdPipe } from './TodoTaskByIdPipe';
import { UpdateTaskDTO } from './UpdateTaskDTO';

@Controller({ path: '/tasks' })
export class TodoTaskController {
  constructor(private readonly todoTaskService: TodoTaskService) {}
  @Post()
  async create(@Body() body: CreateTodoDTO) {
    return this.todoTaskService.createTask(body);
  }

  @Get()
  async getAll(@Query() query: QueryAllTodosDTO) {
    return this.todoTaskService.getTasks(query);
  }

  @Get(':id')
  async getById(@Param('id', TodoTaskByIdPipe) id: string) {
    return this.todoTaskService.getTaskById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id', TodoTaskByIdPipe) id: string) {
    return this.todoTaskService.deleteTaskById(id);
  }

  @Patch(':id')
  async updateById(
    @Param('id', TodoTaskByIdPipe) id: string,
    @Body() body: UpdateTaskDTO
  ) {
    return await this.todoTaskService.updateTaskById(id, body);
  }
}
