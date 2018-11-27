import {Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class RoleEntity {
  @PrimaryColumn({nullable: false})
  name: string;
}