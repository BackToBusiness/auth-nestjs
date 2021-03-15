import { Controller, Get, Post, UseGuards, Request, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService) { }

    @Post()
    signUp() {
        this.usersService.signUp()
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.find()
    }
}