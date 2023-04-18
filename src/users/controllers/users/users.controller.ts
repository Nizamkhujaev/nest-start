import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Saidabror', email: 'nizamkhujaev@gmail.com' };
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    console.log(user);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
  }
}
