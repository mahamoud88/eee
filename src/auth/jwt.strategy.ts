import { jwtPayload } from './jwt.payload.interface';
import { UserRepository } from './user.repository';
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import{Strategy,ExtractJwt} from 'passport-jwt'
import { UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';

export class JwtStrategy extends PassportStrategy(Strategy){
constructor(
    @InjectRepository(UserRepository)
    private userRepository:UserRepository,
){
    super({

jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey:'topSecret51',
    })
}


async validate(payload:jwtPayload):Promise<User>{

const{username}=payload;

const user=this.userRepository.findOne({username});

if(!user){
    throw new UnauthorizedException();
}

return user;

}


 




}