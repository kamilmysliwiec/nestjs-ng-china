import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class Hero {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose({groups: ['admin']})
  hideout: string;

  constructor(partial: Partial<Hero>) {
    Object.assign(this, partial);
  }

}