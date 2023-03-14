import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Like{
    @PrimaryGeneratedColumn()
    Id: string;

    @OneToMany(type => Role, role=> role.Id)
    @Column()
    UserId: string;

    @Column()
    ParcoursId: string;

    @Column()
    Like: boolean;
}
