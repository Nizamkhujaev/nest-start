import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  getUsers() {
    return this.userServices.fetchUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    return this.userServices.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.fetchUserById(id);
  }
}
