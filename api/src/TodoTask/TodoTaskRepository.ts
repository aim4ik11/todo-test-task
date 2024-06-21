import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/Prisma/PrismaService';

@Injectable()
export class TodoTaskRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.TodoTaskUncheckedCreateInput) {
    return this.prismaService.todoTask.create({ data });
  }

  async findMany(args: Prisma.TodoTaskFindManyArgs) {
    return this.prismaService.todoTask.findMany({ ...args });
  }

  async findById(id: string) {
    return this.prismaService.todoTask.findUnique({ where: { id } });
  }

  async deleteById(id: string) {
    return this.prismaService.todoTask.delete({ where: { id } });
  }

  async updateById(id: string, data: Prisma.TodoTaskUncheckedUpdateInput) {
    return this.prismaService.todoTask.update({ where: { id }, data });
  }
}
