import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {

    @IsString({message: "May be string"})
    readonly value: string

    @IsNumber({}, {message: "May be number"})
    readonly userId: number
}