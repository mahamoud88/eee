//import { TaskEntity } from './../tasks/task.entity';
import { Type } from 'class-transformer';
//import { Task } from './../../dist/task.model.d';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt'


@Entity()
@Unique(['username'])
export class User extends BaseEntity{
 
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    password:string;
    @Column()
    salt:string;

// @OneToMany(type =>TaskEntity,task=>task.user,{eager:true})
//   tasks:TaskEntity[]
    
    async vlaidatepassword(password:string):Promise<boolean>{

        const hashpass=await bcrypt.hash(password,this.salt);

        return hashpass==this.password;
 

    }

}