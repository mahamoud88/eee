import { User } from './../auth/user.entity';
import { TaskStauts } from './task.stauts.enum';
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class TaskEntity  extends BaseEntity
{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @UpdateDateColumn()
    updatedate:Date;


    @Column()
    description:string;

    @Column()    status:TaskStauts;

    @ManyToOne(type=>User ,user=>user.tasks,{eager:false}) 
    user:User
    
    @Column()
    userId:number;
}