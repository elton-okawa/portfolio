import { NodeType } from '@/shared/node.type';
import { LoadersConfig } from './loaders-config';
import DataLoader from 'dataloader';

export class LazyDataloader {
  private loaders: Map<typeof NodeType, DataLoader<string, NodeType>> =
    new Map();

  constructor(private config: LoadersConfig) {}

  get<T extends typeof NodeType>(type: T): DataLoader<string, InstanceType<T>> {
    if (!this.loaders.has(type)) {
      this.loaders.set(type, this.config.create(type));
    }

    return this.loaders.get(type) as DataLoader<string, InstanceType<T>>;
  }
}
