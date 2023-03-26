import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @Column()
  Id: string;

  @Column()
  Username: string;

  @Column()
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @OneToMany((type) => Role, (role) => role.Id)
  @Column()
  RoleId: string;

  @Column()
  Created_at: Date;
}
