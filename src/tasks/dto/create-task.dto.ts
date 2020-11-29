import { ApiProperty } from "@nestjs/swagger";
import {   IsNotEmpty, IsString, isString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateTaskDto{

    @ApiProperty({
        description: 'The title of a task',
        minimum: 1,
        default: 'title',
    })
@IsNotEmpty() 
title :string ;

@ApiProperty({
    description: 'The description of a task',
    minimum: 10,
    maximum:50,
    default: 'description',
})
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