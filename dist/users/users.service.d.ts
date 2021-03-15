import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    find(): Promise<User[]>;
    signUp(): Promise<void>;
    findOne(username: string): Promise<User | undefined>;
}
