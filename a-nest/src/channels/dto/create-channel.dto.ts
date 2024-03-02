import { ApiProperty } from '@nestjs/swagger';

export class CreateChannelDto {
  @ApiProperty({
    example: '채널방',
    description: '채널명',
  })
  public name: string;
}
