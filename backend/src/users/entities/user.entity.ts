import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Id: string;

  @Column()
  Username: string;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @ManyToOne(() => Role, (role) => role)
  role: Role;

  @Column()
  IdRole: string;

  @Column()
  Created_at: Date;

  static password: string;

}
