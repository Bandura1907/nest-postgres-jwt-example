import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'All users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAllUsers()
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban")
    banUser(@Body() dto: BanUserDto) {
        return this.userService.ban(dto)
    }
}
