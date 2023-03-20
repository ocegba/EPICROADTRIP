import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Username: string;

  @Column()
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
