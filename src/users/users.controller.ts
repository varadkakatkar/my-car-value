import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: Partial<User>) {
    await this.userService.update(parseInt(id), body);
    return { message: 'user updated successfully' };
  }
  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    await this.userService.remove(parseInt(id));
    return { message: 'user deleted successfully' };
  }
}
