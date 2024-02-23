import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
    @ApiProperty({
        example: "junlee5070@gmail.com",
        description: "이메일",
        required: true
    })
    public email: string;

    @ApiProperty({
        example: "HP657",
        description: "닉네임",
        required: true
    })
    public nickname: string;

    @ApiProperty({
        example: "asdf1234",
        description: "비밀번호",
        required: true
    })
    public password: string;
}