import {Controller, Get, HttpStatus} from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {

    constructor() {

    }

    @Get()
    healthcheck() {
        return {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            platform: process.platform,
            status: HttpStatus.OK,
        };
    }
}
