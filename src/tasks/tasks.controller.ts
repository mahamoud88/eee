import { User } from './../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
 
import { TaskStauts } from './task.stauts.enum';
import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { validate } from 'class-validator';
import { TaskEntity } from './task.entity';
import { promises } from 'dns';
import { GetUser } from 'src/auth/get-user.decorator';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {

    private logger=new Logger('Tasks-logger');

    constructor(private tasksService : TasksService)
    {

    }
    @Get('/index')
    async index(
      @Query('page') page: number = 1,
      @Query('limit') limit: number = 10,
       @Query(ValidationPipe) filterDto: GetTasksFilterDto ,
      @GetUser() user: User
    ): Promise<Pagination<TaskEntity>> {
      limit = limit > 100 ? 100 : limit;
      return this.tasksService.paginate(filterDto,user,{
        page,
        limit,
        route: 'http://localhost:3000/tasks/index',
      });
    }




    @Get()
    getTasks(
      @Query(ValidationPipe) filterDto: GetTasksFilterDto,
      @GetUser() user: User,
    ): Promise<TaskEntity[]> {
      this.logger.verbose(`User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`);
      return this.tasksService.getTasks(filterDto, user);
    }
 @Get('/:id')
 getTask(@Param('id',ParseIntPipe) id:number,@Req() req) :Promise<TaskEntity>{

    const {user}=req;
    const task=this.tasksService.getTask(id,user);
   this.logger.log(`the user : ${user.username} is retrive the  task with task id ${JSON.stringify(task)}`);
    
    
    return task;

    }



@Post()
//@UsePipes(ValidationPipe)
creatask(
    @Body(ValidationPipe) createTaskDto:CreateTaskDto,
    @GetUser() user:User
    
    ):Promise<TaskEntity>{

     

  return    this.tasksService.creatask(createTaskDto,user);

 }

// //url pramter
 @Delete('/:id')
 deletetask(@Param('id',ParseIntPipe) id:number,  @GetUser() user:User):Promise<void> {

     
      return this.tasksService.deletetask(id,user);

}


@Patch('/:id')
updatetask(@Param('id',ParseIntPipe) id:number,@Body('status',) status:TaskStauts,   @GetUser() user:User):Promise<TaskEntity>{
     
   return this.tasksService.updatetask(id,status,user);

}





}
