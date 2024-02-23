import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {
    }


    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Post()
    postUsers(@Body() body: JoinRequestDto) {
        this.usersService.postUsers(body.email, body.nickname, body.password);
    }
    
    @Post("login")
    logIn() {
        
    }

    @Post("logout")
    logOut() {

    }
}
