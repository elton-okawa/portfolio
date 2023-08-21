import { Injectable } from '@nestjs/common';
import { LoadersConfig } from './loaders-config';
import { NodeType } from '@/shared';
import DataLoader from 'dataloader';
import { LazyDataloader } from './lazy-dataloader';

@Injectable()
export class DataloaderService {
  private loadersConfig = new LoadersConfig();

  register(
    type: typeof NodeType,
    loader: DataLoader.BatchLoadFn<string, NodeType>,
  ) {
    this.loadersConfig.register(type, loader);
  }

  create() {
    return new LazyDataloader(this.loadersConfig);
  }
}
