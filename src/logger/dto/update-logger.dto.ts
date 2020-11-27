 
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateLoggerDto } from './create-logger.dto';

export class UpdateLoggerDto   {
 
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
