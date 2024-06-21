import { Injectable } from '@nestjs/common';
import { TodoTaskRepository } from './TodoTaskRepository';
import { CreateTodoDTO } from './CreateTaskDTO';
import { Prisma } from '@prisma/client';
import { QueryAllTodosDTO } from './QueryAllTodosDTO';
import { UpdateTaskDTO } from './UpdateTaskDTO';

@Injectable()
export class TodoTaskService {
  constructor(private readonly todoTaskRepository: TodoTaskRepository) {}

  async createTask(task: CreateTodoDTO) {
    return this.todoTaskRepository.create(task);
  }

  async getTasks(query: QueryAllTodosDTO) {
    const where: Prisma.TodoTaskWhereInput = {
      state: query.state,
      title: {
        contains: query.search,
      },
    };

    const orderBy: Prisma.TodoTaskOrderByWithRelationInput = {
      priority: query.order,
    };

    return this.todoTaskRepository.findMany({ where, orderBy });
  }

  async getTaskById(id: string) {
    return this.todoTaskRepository.findById(id);
  }

  async deleteTaskById(id: string) {
    return this.todoTaskRepository.deleteById(id);
  }

  async updateTaskById(id: string, body: UpdateTaskDTO) {
    return this.todoTaskRepository.updateById(id, body);
  }
}
