import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@ApiTags("Users")
@Controller('api/users')
export class UsersController {
    constructor(private usersService:UsersService) {
    }

    @ApiOkResponse({
        type: UserDto,
        description: "성공"
    })
    @ApiOperation({ summary: "내 정보 조회" })
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }
    
    @ApiOperation( { summary: "회원가입" })
    @Post()
    postUsers(@Body() body: JoinRequestDto) {
        this.usersService.postUsers(body.email, body.nickname, body.password);
    }
    
    @ApiOkResponse({
        description: "성공",
        type: UserDto
    })
    @ApiResponse({
        status: 500,
        description: '서버 에러',
    })
    @ApiOperation({ summary: "로그인" })
    @Post("login")
    logIn() {
        
    }

    @ApiOperation({ summary: "로그아웃" })
    @Post("logout")
    logOut() {

    }
}
