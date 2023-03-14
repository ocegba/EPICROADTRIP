import { Entity, Column, PrimaryGeneratedColumn, HasMany } from 'typeorm';

@Entity()
export class Like extends Model {
    @PrimaryGeneratedColumn()
    Id: string;

    @ForeignKey(() => Role)
    @Column()
    UserId: string;

    @Column()
    ParcoursId: string;

    @Column()
    Like: boolean;
}
