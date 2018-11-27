import {Body, Controller, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import {UsersService} from './users.service';
import {Response} from 'express';
import {CreateUserDto} from './UserDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get('/:username')
  async getUser(@Param('username')username: string, @Res() res: Response) {
    const fetchedUser = await this.usersService.findByUsername(username);
    if (fetchedUser) {
      res.status(HttpStatus.OK).json(fetchedUser);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({error: 'User Not Found'});
    }
  }

  @Post('/')
  async create(@Body() userDto: CreateUserDto, @Res() res: Response) {
    await this.usersService.createUser(userDto);
    res.sendStatus(HttpStatus.OK);
  }
}