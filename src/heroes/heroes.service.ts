import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateHeroDto} from './CreateHeroDto';
import {Guid} from 'guid-typescript';
import {Hero} from './Hero';
import {HeroEntity} from './Hero.entity';
import {Repository} from 'typeorm';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(HeroEntity)
    private readonly heroRepository: Repository<HeroEntity>) {

  }

  async getAllHeroes(): Promise<Array<Hero>> {
    return await this.heroRepository.find();
  }

  async createHero(createHeroDto: CreateHeroDto): Promise<Guid> {
    const newGuid: Guid = Guid.create();
    const guidString = newGuid.toJSON().value;
    await this.heroRepository.save(new Hero(createHeroDto, guidString));
    return newGuid.toJSON().value;
  }

  async getHero(id: string): Promise<Hero> | null {
    const fetchedHero = await this.heroRepository.findOne(id);
    if (typeof fetchedHero !== 'undefined') {
      return fetchedHero;
    } else {
      return null;
    }
  }

  async updateHero(hero: Hero) {
    if (Guid.validator.test(hero.id)) {
      // TODO: Make sure this is working
      const status = await this.heroRepository.update(hero.id, hero);
      return true;
    } else {
      return false;
    }
  }

  async deleteHero(id: string) {
    const result = await this.heroRepository.delete(id);
    if (result.raw.affectedRows > 0) {
      return true;
    } else {
      return null;
    }
  }
}