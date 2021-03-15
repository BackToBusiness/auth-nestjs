import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    // @UseGuards(LocalAuthGuard)
    // @Post('login')
    // async login(@Request() req) {
    //     return req.user;
    // }

    @UseGuards(AuthGuard('google'))
    @Get()
    async googleAuth(@Request() req) { }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Request() req) {
        return this.authService.googleLogin(req)
    }
}
