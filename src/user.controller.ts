import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserDTO } from './dto/index';

let USER = [];

@Controller('/users')
export class UserController {

  @Post('/add-user')
  addUser(@Body() createUserDto: CreateUserDTO) {
    USER.push(createUserDto);
    return {
      status: true,
      message: 'User added successfully'
    }
  }


  @Get()
  getUsers() {
    return USER;
  }


  @Get(':id')
  getUser(@Param('id') id: number) {
    return USER.find((user) => +user.id === +id);
  }

  @Put('/put-user/:id')
  updateUser(@Param('id') id: number, @Body() createUserDto: CreateUserDTO) {
    const userIndex = USER.findIndex((user) => +user.id === +id);
    if (userIndex > -1) {
      USER[userIndex] = createUserDto;
      return {
        status: true,
        message: 'User updated successfully'
      }
    } else {
      return {
        status: false,
        message: 'User not found'
      }
    }
  }

  @Delete('/delete-user/:id')
  deleteUsers(@Param('id') id: number,) {
    USER = USER.filter((user) => +user.id !== +id);
    if (USER) {
      return {
        status: true,
        message: 'User deleted successfully'
      }
    } else {
      return {
        status: false,
        message: 'User not found'
      }
    }
  }


}
