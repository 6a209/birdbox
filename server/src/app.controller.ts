import { Controller, Get, Post, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post() 
  publish(): string {
    return this.appService.publish();
  }

  // @Get()
  // getFile(): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'public', '1.mp3'));
  //   return new StreamableFile(file);
  // }
}
