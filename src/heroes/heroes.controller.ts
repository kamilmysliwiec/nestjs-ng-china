import {Controller, Delete, Get, Logger, Patch, Post, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';

@Controller('heroes')
export class HeroesController {
  @Get('/')
  getAll(@Req() req: Request,
         @Res() res: Response) {
    Logger.error('omg');
    res.status(200);
    res.json({'omg': 'omg'});
  }

  @Get('/:id')
  get(id: number) {

  }

  @Post('/')
  create() {

  }

  @Patch('/:id')
  update(id: number) {

  }

  // TODO: Wrap this in a permissionn so only Admin users can delete
  @Delete('/:id')
  delete(id: number) {

  }
}