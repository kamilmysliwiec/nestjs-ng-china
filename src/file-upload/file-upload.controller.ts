import {Controller, FileInterceptor, FilesInterceptor, Logger, Post, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';

@Controller('file-upload')
export class FileUploadController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    Logger.log(file);
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files) {
    Logger.log(files);
  }
}
