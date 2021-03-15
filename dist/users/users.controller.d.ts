import { User } from './user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    signUp(): void;
    findAll(): Promise<User[]>;
}
