import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class HeroEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @PrimaryColumn({length: 500})
  name: string;

  @Column()
  hideout: string;
}