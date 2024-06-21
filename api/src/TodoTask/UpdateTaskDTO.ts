import { IsOptional, IsNumber, Min, Max, IsBoolean } from 'class-validator';

export class UpdateTaskDTO {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  priority?: number;

  @IsBoolean()
  @IsOptional()
  state?: boolean;
}
