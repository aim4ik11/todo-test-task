import { IsNotEmpty, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateTodoDTO {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  priority: number;
}
