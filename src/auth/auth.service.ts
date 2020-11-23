import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from './jwt.payload.interface';

@Injectable()
export class AuthService {



    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        
        private jwtService:JwtService
        )
        {

        }

async singup(authCredentialsDto:AuthCredentialsDto): Promise<void>{

 return    this.userRepository.singup(authCredentialsDto);

}

async signin(authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}>{
    const username= await this.userRepository.validateUserPassword(authCredentialsDto);


    if(!username){
        throw new  UnauthorizedException('invalid credentials')
    }
 
const payload:jwtPayload={username}
const accessToken= this.jwtService.sign(payload)

return {accessToken};


}

}
