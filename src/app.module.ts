import { AuthModule } from './auth/auth.module';
 
 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { CourseModule } from './course/course.module';
 
 
 
 

@Module({
 imports:[ TypeOrmModule.forRoot(typeOrmConfig), AuthModule, CourseModule,],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
