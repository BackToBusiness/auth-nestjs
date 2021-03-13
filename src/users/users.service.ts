import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async find(): Promise<User[]> {
        return this.usersRepository.find()
    }

    async signUp() {
        let user = new User()
        user.username = 'marcospsmoraes'
        user.password = bcrypt.hashSync('teste123', 8)
        console.log(user.password);
        user.save()
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ username: username });
    }

}
