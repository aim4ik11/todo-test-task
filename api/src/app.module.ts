import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoTaskModule } from './TodoTask/TodoTaskModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TodoTaskModule,
  ],
})
export class AppModule {}
