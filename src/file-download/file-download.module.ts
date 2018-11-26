import { Module } from '@nestjs/common';
import { FileDownloadController } from './file-download.controller';

@Module({
  controllers: [FileDownloadController],
})
export class FileDownloadModule {}
