import { Trip } from 'src/parcours-sauvegarder/entities/parcours-sauvegarder.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Like } from 'src/likes/entities/like.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Id: string;
  // @OneToMany(() => Trip, (trip) => trip.UserIdCreated)
  // @OneToMany(() => Like, (like) => like.UserId)
  @OneToMany(() => Trip, (trip) => trip.UserIdCreated)
  trips: Trip[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @Column()
  Username: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  IdRole: string;

  @Column()
  Created_at: Date;

  static password: string;
}
