import { EntityRepository, Repository } from "typeorm";
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'; 
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';


@EntityRepository(User)
export class UserRepository extends Repository<User>{

async singup(authCredentialsDto:AuthCredentialsDto){

const{username,password}=authCredentialsDto;



//const salt=await bcrypt.genSalt();
//console.log(salt);
const user=new User();

//const exist=this.findOne({username});

//if(exist){
    //throw new Error(" ");
    
//}

user.username=username;
user.salt=await bcrypt.genSalt();
user.password=await this.hasspass(password,user.salt) 

 //console.log(user.password)

            try
            {
                await user.save()
                return user.username;
            }

            catch(error)
             {
                if(error.code==='23505')
                {
                      throw new ConflictException('user name is exist')
                }
                else
                {
                      throw new InternalServerErrorException();
                }

            }


}


async validateUserPassword(authCredentialsDto:AuthCredentialsDto):Promise<string>{

    const {username,password}=authCredentialsDto;
    const user=await this.findOne({username});
 
    if(user&&await user.vlaidatepassword(password)){
        return user.username
    }

    else{
        return null
    }

}


private async hasspass(password:string,salt:string):Promise<string>{

   return await bcrypt.hash(password,salt);

}


}