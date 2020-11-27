import { AuthModule } from './auth/auth.module';
 
 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shard/http-error.filter';
 
 
 
 
 

@Module({
 imports:[ TypeOrmModule.forRoot(typeOrmConfig), AuthModule,  ],
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
