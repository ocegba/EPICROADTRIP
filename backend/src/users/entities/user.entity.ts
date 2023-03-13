import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    RoleId: string;

    @Column()
    Created_at: Date;

}
