/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) 
    

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return "Usuario Creado"

  }
}
