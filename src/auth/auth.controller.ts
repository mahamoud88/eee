import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Logger, Post, Get,Req, UseGuards, UsePipes,ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

import * as config from 'config';

import { configInterface } from 'src/main';


@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){
        
    }

    
 
    @Post('/singup')
    singup(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<void>{
     
    return this.authService.singup(authCredentialsDto);
    }

    @Post('/signin')
    sigin(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto ):Promise<{accessToken:string}>{

        return this.authService.signin(authCredentialsDto); 
    }




   @Post('/test')
   @UseGuards(AuthGuard())
   test(@GetUser() user:User){
   //const dbUser = this.configService.get<EnvironmentVariables>('db2' );
    console.log("dbUser.host");

 }


 
}
