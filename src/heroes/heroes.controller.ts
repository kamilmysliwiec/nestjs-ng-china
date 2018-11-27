import {
  Body,
  Catch,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {Response} from 'express';
import {CreateHeroDto} from './CreateHeroDto';
import {HeroesService} from './heroes.service';
import {Hero} from './Hero';
import {AuthGuard} from '@nestjs/passport';
import {RolesGuard} from '../common/guards/roles.guard';
import {Roles} from '../common/decorators/roles.decorator';
import {plainToClass} from 'class-transformer';

// TODO: This should not have to have jwt since we set it as our default strategy
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Catch()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {

  }

  @Get('/')
  async getAll(): Promise<Array<Hero>> {
    return await this.heroesService.getAllHeroes();
  }

  @Get('/:id')
  async get(@Param('id')id: string, @Req() req) { // TODO: How can we type the return on this?
    const fetchedHero = await this.heroesService.getHero(id);
    const roles = [];
    req.user.roles.forEach((role: any) => roles.push(role.name));

    if (fetchedHero) {
      // TODO: How do I get the reflector to pass into here
      // new GetRolesFromRequest();
      return plainToClass(Hero, fetchedHero, {groups: roles});
    } else {
      throw new HttpException({error: 'Hero Not Found'}, HttpStatus.NOT_FOUND);
    }
  }

  @Post('/')
  async create(@Body() createHeroDto: CreateHeroDto, @Res() res: Response) {
    await this.heroesService.createHero(createHeroDto);
    res.sendStatus(HttpStatus.OK);
  }

  @Patch('/')
  async update(@Body() hero, @Res() res: Response) {
    if (await this.heroesService.updateHero(hero)) {
      res.sendStatus(HttpStatus.ACCEPTED);
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({error: 'Not a valid GUID'});
    }
  }

  @Roles('admin')
  @Delete('/:id')
  async delete(@Param('id')id: string, @Res() res: Response) {
    const deletedHero = await this.heroesService.deleteHero(id);
    if (deletedHero) {
      res.sendStatus(HttpStatus.NO_CONTENT);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({error: 'Nothing to Delete'});
    }
  }
}