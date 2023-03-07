import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    findByEmail(Email: string): Promise<User | undefined>;
    findOne(id: number): Promise<User | undefined>;
}
