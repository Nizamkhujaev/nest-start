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
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { username: 'Saidabror', email: 'nizamkhujaev@gmail.com' };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    console.log(user);
    return user;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return { id };
  }
}
