import { ConflictException } from "@nestjs/common";
 
import { BaseEntity, Column,Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Logger  extends BaseEntity{
@PrimaryGeneratedColumn()
id:number;
 
@Column()
Name:string;


@Column()
descrption:string;

@Column()
type:string;



}
