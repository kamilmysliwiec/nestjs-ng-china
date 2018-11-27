import {Test} from '@nestjs/testing';
import {HeroesController} from './heroes.controller';
import {HeroesService} from './heroes.service';
import {Hero} from './Hero';

describe('HeroesController', () => {
  let heroesController: HeroesController;
  let heroesService: HeroesService;
  let hero1: Hero;
  let hero2: Hero;
  let twoHeroes: Array<Hero>;

  beforeEach(async () => {
    hero1 = {name: 'zack', id: '1', hideout: 'somewhere'};
    hero2 = {name: 'also zack', id: '2', hideout: 'somewhere else'};
    twoHeroes = [hero1, hero2];
    const module = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [{
        provide: HeroesService,
        useValue: {
          getHero(id) {
            return hero1;
          },
        },
      }],
    }).compile();

    heroesController = module.get<HeroesController>(HeroesController);
    heroesService = module.get<HeroesService>(HeroesService);
  });
  it('should return the sanitized hero for no admins', async () => {
    const hero = await heroesController.get('1', {user: {roles: [{name: 'user'}]}});
    delete(hero1.hideout);
    expect(hero1).toEqual(hero);
  });

  it('should return the full hero for admins', async () => {
    const hero = await heroesController.get('1', {user: {roles: [{name: 'admin'}]}});
    expect(hero1).toEqual(hero);
  });
});
