import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}
  
}
