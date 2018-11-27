import {Test, TestingModule} from '@nestjs/testing';
import {HeroesService} from './heroes.service';
import {HeroEntity} from './Hero.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import {HeroesRepository} from './heroes.repository';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroesService,
        {
          provide: getRepositoryToken(HeroEntity),
          useClass: HeroesRepository,
        }],
    }).compile();
    service = module.get<HeroesService>(HeroesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // TODO: How can I test this?
  // it('can get all heroes', async () => {
  //   const heroes = await service.getAllHeroes();
  //   expect(heroes).toHaveLength(2);
  // });

});
