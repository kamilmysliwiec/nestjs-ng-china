import {Test, TestingModule} from '@nestjs/testing';
import {HeroesService} from './heroes.service';
import {HeroEntity} from './Hero.entity';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Hero} from './Hero';

const hero1: Hero = {name: 'zack', id: '1', hideout: 'somewhere'};
const hero2: Hero = {name: 'also zack', id: '2', hideout: 'somewhere else'};
const twoHeroes = [hero1, hero2];
describe('HeroesService', () => {
  let service: HeroesService;

  beforeAll(async () => {
    const mockRepository = {
      findOne(id) {
        return hero1;
      },
      find() {
        return twoHeroes;
      },
      save() {
        return;
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroesService,
        {
          provide: getRepositoryToken(HeroEntity),
          useValue: mockRepository,
        }],
    }).compile();
    service = module.get<HeroesService>(HeroesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can get all heroes', async () => {
    const heroes = await service.getAllHeroes();
    expect(heroes).toHaveLength(2);
  });

  it('can save heroes', async () => {
    const spy = jest.spyOn(service, 'createHero');
    await service.createHero(hero1);
    expect(spy).toHaveBeenCalledWith(hero1);
  });

});
