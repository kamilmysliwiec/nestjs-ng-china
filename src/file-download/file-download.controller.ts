import {Controller, Get, HttpStatus, Logger, Param, Res} from '@nestjs/common';
import {Response} from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('file-download')
export class FileDownloadController {
  @Get('/:file_name')
  download(@Param('file_name') file_name: string, @Res() res: Response) {
    const fileStream = fs.createReadStream(path.join(`static_files/${file_name}`));
    fileStream
      .on('error', () => {
        Logger.error(`File Not Found: ${file_name}`);
        res.status(HttpStatus.NOT_FOUND).json({error: 'File Not Found'});
      });

    res.status(HttpStatus.OK);
    fileStream.pipe(res);
  }
}
