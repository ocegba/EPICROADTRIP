import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Dislike {
  @PrimaryGeneratedColumn()
  Id: string;

  @OneToMany((type) => Role, (role) => role.Id)
  @Column()
  UserId: string;

  @Column()
  ParcoursId: string;

  @Column()
  DisLike: boolean;
}
