import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Like } from 'src/likes/entities/like.entity';
@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  Id: string;

  @ManyToOne(() => User, (user) => user.Id)
  @Column()
  UserIdCreated: string;

  @OneToMany(() => Like, (like) => like.trip)
  likes: Like[];

  @Column()
  Adresse: string;

  @Column()
  Drink: boolean;

  @Column()
  Eat: boolean;

  @Column()
  Travel: boolean;

  @Column()
  Sleep: boolean;

  @Column()
  Enjoy: boolean;

  @Column()
  Published: boolean;

  @Column()
  LikesNumbers: number;
}
