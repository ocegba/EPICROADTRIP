import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    me(request: any): Promise<import("./entities/user.entity").User>;
}
