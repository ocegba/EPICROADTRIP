import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
