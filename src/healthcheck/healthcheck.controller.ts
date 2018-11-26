import {Controller, Get, HttpStatus} from '@nestjs/common';
import * as fs from 'fs';

@Controller('healthcheck')
export class HealthcheckController {
  appVersion: string;

  constructor() {
    const packageJSON: any = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    this.appVersion = packageJSON.version;
  }

  @Get()
  healthcheck() {
    return {
      appVersion: this.appVersion,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform,
      status: HttpStatus.OK,
    };
  }
}
