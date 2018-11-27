import {Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {Response} from 'express';
import {CreateHeroDto} from './CreateHeroDto';
import {HeroesService} from './heroes.service';
import {Hero} from './Hero';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {

  }

  @Get('/')
  async getAll(): Promise<Array<Hero>> {
    return await this.heroesService.getAllHeroes();
  }

  @Get('/:id')
  async get(@Param('id')id: string, @Res() res: Response) { // TODO: How can we type the return on this?
    const fetchedHero = await this.heroesService.getHero(id);
    if (fetchedHero) {
      res.status(HttpStatus.OK).json(fetchedHero);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({error: 'Hero Not Found'});
    }
  }

  @Post('/')
  async create(@Body() createHeroDto: CreateHeroDto, @Res() res: Response) {
    const newHeroGuid = await this.heroesService.createHero(createHeroDto);
    res.status(HttpStatus.OK);
    res.send({id: newHeroGuid});
  }

  @Patch('/')
  async update(@Body() hero, @Res() res: Response) {
    if (await this.heroesService.updateHero(hero)) {
      res.sendStatus(HttpStatus.ACCEPTED);
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({error: 'Not a valid GUID'});
    }
  }

  // TODO: Wrap this in a permission so only Admin users can delete
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