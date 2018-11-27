import {Injectable} from '@nestjs/common';
import {CreateHeroDto} from './CreateHeroDto';
import {Guid} from 'guid-typescript';
import {Dictionary} from 'typescript-collections';
import {Hero} from './Hero';

@Injectable()
export class HeroesService {
  heroCache: Dictionary<Guid, Hero> = new Dictionary<Guid, Hero>();

  getAllHeroes(): Array<Hero> {
    return this.heroCache.values();
  }

  createHero(createHeroDto: CreateHeroDto): Guid {
    const newGuid: Guid = Guid.create();
    this.heroCache.setValue(newGuid, new Hero(createHeroDto, newGuid));
    return newGuid.toJSON().value;
  }

  getHero(id: string): Hero | null {
    const fetchedHero = this.heroCache.getValue(Guid.parse(id));
    if (typeof fetchedHero !== 'undefined') {
      return fetchedHero;
    } else {
      return null;
    }
  }

  updateHero(hero: Hero) {
    if (Guid.validator.test(hero.id)) {
      this.heroCache.setValue(Guid.parse(hero.id), hero);
      return true;
    } else {
      return false;
    }
  }

  deleteHero(id: string) {
    const fetchedHero = this.heroCache.getValue(Guid.parse(id));
    if (typeof fetchedHero !== 'undefined') {
      this.heroCache.remove(Guid.parse(id));
      return true;
    } else {
      return null;
    }
  }
}