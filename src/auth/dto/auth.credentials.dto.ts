import { IsNotEmpty, isNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(9)
    username:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password:string;
}