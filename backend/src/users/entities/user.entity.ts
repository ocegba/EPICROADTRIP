import { Entity, Column, PrimaryGeneratedColumn, HasMany } from 'typeorm';

@Entity()
export class User extends Model {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    Username: string;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @ForeignKey(() => Role)
    @Column()
    RoleId: string;

    @Column()
    Created_at: Date;
}
