import {Guid} from 'guid-typescript';
import {CreateHeroDto} from './CreateHeroDto';

export class Hero {
  id: string;
  name: string;

  constructor(createHeroDto: CreateHeroDto, guid: Guid) {
     this.id = guid.toJSON().value;
     this.name = createHeroDto.name;
  }

}