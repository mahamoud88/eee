import { AuthModule } from './auth/auth.module';
 
 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shard/http-error.filter';
import { TasksModule } from './tasks/tasks.module';
 
 
 
 
 

@Module({
 imports:[ TypeOrmModule.forRoot(typeOrmConfig), AuthModule,TasksModule  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    }
  
  
  
  ],
  
})
export class AppModule {}
