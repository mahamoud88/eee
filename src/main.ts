import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
 
import { NestFactory } from '@nestjs/core';
 
import { AppModule } from './app.module';
import * as config from 'config'
import { Logger } from '@nestjs/common';

//process.env.NODE_ENV='development'
//Logger.log(process.env.NODE_ENV)
 const httpconfig:configInterface=config.get('server');

 const port=process.env.Port||httpconfig.port;


 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');

  // const options = new DocumentBuilder()
  // .setTitle('api example')
  // .setDescription('The  API description')
  // .setVersion('1.0')
  // .addTag('cats')
  // .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

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
