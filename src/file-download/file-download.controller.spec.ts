import { Test, TestingModule } from '@nestjs/testing';
import { FileDownloadController } from './file-download.controller';

describe('FileDownload Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FileDownloadController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FileDownloadController = module.get<FileDownloadController>(FileDownloadController);
    expect(controller).toBeDefined();
  });
});
