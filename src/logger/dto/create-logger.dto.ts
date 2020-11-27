import { IsNotEmpty,IsString } from "class-validator";

export class CreateLoggerDto {
    @IsNotEmpty()
    @IsString()
    Name:string; 
    @IsNotEmpty()
    @IsString()
    descrption:string;
    @IsNotEmpty() 
    @IsString()
    type:string;
    

}
