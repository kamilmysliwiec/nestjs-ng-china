import { Module } from '@nestjs/common';
import { UiLogsGateway } from './ui-logs.gateway';

@Module({
  providers: [UiLogsGateway],
})
export class UiLogsModule {}
