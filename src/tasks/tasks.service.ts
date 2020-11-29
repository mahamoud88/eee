import { User } from './../auth/user.entity';
import { TaskRepository } from './task.repository';
import {  TaskStauts } from './task.stauts.enum';
import { Injectable, Logger, NotFoundException, UnsupportedMediaTypeException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
 
import { InjectRepository } from '@nestjs/typeorm';

import { TaskEntity } from './task.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
 

@Injectable()
export class TasksService {


    private logger=new Logger("serviceLogget");
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository:TaskRepository,
        ){

    }

 


    async getTasks(
        filterDto: GetTasksFilterDto,
        user: User,
      ): Promise<TaskEntity[]> {
        return this.taskRepository.getTasks(filterDto, user);
      }

 


async getTask(id:number,user:User) :Promise<TaskEntity>{
    const found= await this.taskRepository.findOne({where :{id,userId: user.id}}); 
    if(!found){
        this.logger.error(`the task with id ${id} is not found `)
        throw new NotFoundException(`the task with id ${id } is not found`);

    }
    
    return found;


    }
    



 



async creatask(createTaskDto:CreateTaskDto,user:User):Promise<TaskEntity>{


   
    return this.taskRepository.creatask(createTaskDto,user);
     
}

 

async deletetask(id:number,user:User):Promise<void>{
     

  const result=  await this.taskRepository.delete({id,userId:user.id});

  if(result.affected===0){


    throw new NotFoundException(`the task with id ${id } is not found`);


  }

     
}

async updatetask(id:number,status:TaskStauts,user:User):Promise<TaskEntity>{
 
    const task= await this.getTask(id,user);

    task.status=status;

    await task.save();
    return task;

}

}
