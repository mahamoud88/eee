import { User } from './../auth/user.entity';
import { TaskStauts } from './task.stauts.enum';
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";

import {TaskEntity} from './task.entity'
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{
    private logger = new Logger('TaskRepository');

    async getTasks(
        filterDto: GetTasksFilterDto,
        user: User,
      ): Promise<TaskEntity[]> {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
    
        query.where('task.userId = :userId', { userId: user.id });
    
        if (status) {
          query.andWhere('task.status = :status', { status });
        }
    
        if (search) {
          query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }
    
        try {
          const tasks = await query.getMany();
          return tasks;
        } catch (error) {
          this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, error.stack);
          throw new InternalServerErrorException();
        }
      }
    
    async creatask(createTaskDto:CreateTaskDto,user:User):Promise<TaskEntity>{


        const {title,description}=createTaskDto;
        const task=new TaskEntity();
    
        task.title=title;
        task.description=description;
        task.status=TaskStauts.INPROGRESS;
        task.user=user;
        await task.save();

        delete task.user;
    
        return task;
         
    }

}