import {Entity, JoinTable, ManyToMany, PrimaryColumn} from 'typeorm';
import {RoleEntity} from './Role.entity';

@Entity()
export class UsersEntity {
  @PrimaryColumn()
  username: string;

  @ManyToMany(type => RoleEntity, role => role.name, {cascade: ["update"]})
  @JoinTable()
  roles: Array<RoleEntity>;
}