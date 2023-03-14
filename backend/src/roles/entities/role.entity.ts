import { Entity, Column, PrimaryGeneratedColumn, HasMany } from 'typeorm';

@Entity()
export class Role extends Model {
    @HasMany(() => User)
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    Name: string;
}
