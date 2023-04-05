import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Trip } from 'src/parcours-sauvegarder/entities/parcours-sauvegarder.entity';
@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  Id: string;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Trip, (trip) => trip.likes)
  trip: Trip;
}
