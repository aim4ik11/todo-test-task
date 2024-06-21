import { Module } from '@nestjs/common';
import { TodoTaskController } from './TodoTaskController';
import { TodoTaskService } from './TodoTaskService';
import { PrismaModule } from 'src/Prisma/PrismaModule';

@Module({
  controllers: [TodoTaskController],
  providers: [TodoTaskService],
  imports: [PrismaModule],
})
export class TodoTaskModule {}
