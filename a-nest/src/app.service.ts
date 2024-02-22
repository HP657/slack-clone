import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}


}
