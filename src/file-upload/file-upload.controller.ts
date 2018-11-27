import {Controller, FileInterceptor, FilesInterceptor, HttpStatus, Post, Res, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import {Response} from 'express';

@Controller('file-upload')
export class FileUploadController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file, @Res() res: Response) {
    fs.createWriteStream(path.join(`static_files/${file.originalname}`));
    res.sendStatus(HttpStatus.ACCEPTED);
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files,  @Res() res: Response) {
    //TODO: This should handle duplicate file errors
    files.forEach((file) => {
      fs.createWriteStream(path.join(`static_files/${file.originalname}`));
    });
    res.sendStatus(HttpStatus.ACCEPTED);
  }
}
