import { IsBoolean, IsIn, IsOptional } from 'class-validator';

export class QueryAllTodosDTO {
  @IsBoolean()
  @IsOptional()
  state?: boolean;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  order?: 'asc' | 'desc';

  @IsOptional()
  search?: string;
}
