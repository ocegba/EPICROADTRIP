import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @OneToMany(() => User, (user) => user.RoleId)
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Name: string;

  @Column()
  RoleId: string;
}
