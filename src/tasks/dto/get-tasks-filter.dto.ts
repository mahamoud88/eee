import { TaskStauts } from '../task.stauts.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStauts.Complete, TaskStauts.Done, TaskStauts.INPROGRESS])
  status: TaskStauts;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
