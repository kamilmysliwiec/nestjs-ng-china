import {CreateHeroDto} from './CreateHeroDto';
import {HeroEntity} from './Hero.entity';

export class Hero implements HeroEntity {
  id: string;
  name: string;

  constructor(createHeroDto: CreateHeroDto, guid: string) {
    this.id = guid;
    this.name = createHeroDto.name;
  }

}