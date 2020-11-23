 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config'
import { Logger } from '@nestjs/common';

process.env.NODE_ENV='production'
Logger.log(process.env.NODE_ENV)
 const httpconfig:configInterface=config.get('server');

 const port=process.env.Port||httpconfig.port;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   
  await app.listen(httpconfig.port);
  Logger.log(`the app is run under port ${port}`)
}



bootstrap();

export interface configInterface{

  port: number;
  host: string;
   
  username:string;
  password:string;
  dbtype:any;
  database:string;
  expiresin:any;
  synchronize:boolean;
  secret:string;
}
