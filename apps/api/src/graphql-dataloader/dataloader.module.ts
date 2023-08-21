import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';

@Module({
  exports: [DataloaderService],
  providers: [DataloaderService],
})
export class DataloaderModule {}
