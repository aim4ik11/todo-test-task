import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./PrismaService";
import { TodoTaskRepository } from "src/TodoTask/TodoTaskRepository";

@Global()
@Module({
  providers: [PrismaService, TodoTaskRepository],
  exports: [PrismaService, TodoTaskRepository],
})
export class PrismaModule {}
