import { AuthModule } from './../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './task.repository';

@Module({
  imports:[
   AuthModule,
  TypeOrmModule.forFeature([TaskRepository])
  
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
