import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export abstract class HeroEntity {
  @PrimaryColumn()
  id: string;

  @Column({length: 500})
  name: string;

}