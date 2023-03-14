import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
    @OneToMany(type => User, user => user.RoleId)
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    Name: string;
}
