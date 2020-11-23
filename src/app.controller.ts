import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import * as config from 'config'
import { configInterface } from './main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    const httpconfig:configInterface=config.get('server');

     
    Logger.log(`yout port is ${httpconfig.port}`)
    
    return this.appService.getHello();
  }
}
