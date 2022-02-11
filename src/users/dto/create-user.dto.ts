import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'email', description: 'email'})
    @IsString({message: "May be string"})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string

    @ApiProperty({example: 'pass', description: 'password'})
    @IsString({message: "May be string"})
    @Length(4, 16, {message: "min length 4 max 16"})
    readonly password: string
}