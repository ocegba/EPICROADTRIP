import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ParcoursSauvegarder {
    @PrimaryGeneratedColumn()
    Id: string;

    @OneToMany(type => Role, role=> role.Id)
    @Column()
    UserId: string;

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
}
