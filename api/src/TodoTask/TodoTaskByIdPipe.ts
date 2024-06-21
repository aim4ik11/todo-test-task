import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { TodoTaskRepository } from './TodoTaskRepository';

@Injectable()
export class TodoTaskByIdPipe
  implements PipeTransform<string, Promise<string>>
{
  constructor(private todoTaskRepository: TodoTaskRepository) {}

  async transform(id: string): Promise<string> {
    const auction = await this.todoTaskRepository.findById(id);
    if (!auction) {
      throw new NotFoundException('Could not find such task');
    }
    return id;
  }
}
