import {   IsNotEmpty, IsString, isString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateTaskDto{

@IsNotEmpty() 
title :string ;


@IsNotEmpty()
@IsString()
@MinLength(10, {
    message: "description is too short"
})
@MaxLength(50, {
    message: "description is too long"
})

description:string;


}