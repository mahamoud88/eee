import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Logger, Post, Get,Req, UseGuards,HttpStatus, UsePipes,ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

import * as config from 'config';

import { configInterface } from 'src/main';


@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){
        
    }

    
 
    @Post('/singup')
    singup(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}>{
     
    return this.authService.singup(authCredentialsDto);
    }

    @Post('/signin')
    sigin(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto ):Promise<{accessToken:string}>{

        return this.authService.signin(authCredentialsDto); 
    }


  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {

console.log('ssss')

  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/redirect2")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req)  {
    return this.authService.facebookLogin(req);
  }

   @Post('/test')
   @UseGuards(AuthGuard())
   test(@GetUser() user:User){
   //const dbUser = this.configService.get<EnvironmentVariables>('db2' );
   console.log(user);
    console.log("dbUser.host");

 }


 
}
