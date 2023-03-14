import { Entity, Column, PrimaryGeneratedColumn, HasMany } from 'typeorm';

@Entity()
export class ParcoursSauvegarder extends Model {
    @PrimaryGeneratedColumn()
    Id: string;

    @ForeignKey(() => Role)
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
