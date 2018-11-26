import {Controller, Get, HttpStatus, Logger, Param, Res} from '@nestjs/common';
import {Response} from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

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

  @Get('passthrough/:count')
  jsonPassThrough(@Param('count') count: number, @Res() res: Response) {
    https.get(`https://jsonplaceholder.typicode.com/todos/${count}`, (response:any) => {
      if (response.statusCode !== HttpStatus.OK) {
        res.status(HttpStatus.NOT_FOUND).json({error: 'JSON Not Found'});
      } else {
        res.status(HttpStatus.OK);
        response.pipe(res);
      }
    });
  }

  @Get('/passthrough/:x/:y')
  downloadPassThrough(@Param('x') x: number, @Param('y') y: number, @Res() res: Response) {
    http.get(`http://placehold.it/${x}x${y}`, (response) => {
      if (response.statusCode !== HttpStatus.OK) {
        res.status(HttpStatus.NOT_FOUND).json({error: 'Download Not Found'});
      } else {
        res.status(HttpStatus.OK);
        response.pipe(res);
      }
    });
  }
}
