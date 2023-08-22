import * as DataLoader from 'dataloader';
import { NodeType } from '@/shared';

export class LoadersConfig {
  private loaders: Map<
    typeof NodeType,
    DataLoader.BatchLoadFn<string, NodeType>
  > = new Map<typeof NodeType, DataLoader.BatchLoadFn<string, NodeType>>();

  register(
    type: typeof NodeType,
    loader: DataLoader.BatchLoadFn<string, NodeType>,
  ) {
    if (this.loaders.has(type)) {
      throw new Error(`Loader type '${type}' already exists`);
    }

    this.loaders.set(type, loader);
  }

  create(type: typeof NodeType) {
    if (!this.loaders.has(type)) {
      throw new Error(`Loader type '${type}' not found`);
    }

    return new DataLoader(this.loaders.get(type));
  }
}
