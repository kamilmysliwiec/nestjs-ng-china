import {Repository} from 'typeorm';
import {HeroEntity} from './Hero.entity';

export class HeroesRepository extends Repository<HeroEntity> {

}
