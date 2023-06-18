import DataLoader from 'dataloader';
import { Node } from '@/shared/node';

export class LoadersConfig {
  private loaders: Map<typeof Node, DataLoader.BatchLoadFn<string, Node>>;

  register(loaders: Array<[type: typeof Node, loader: DataLoader.BatchLoadFn<string, Node>]>) {
    this.loaders = new Map(loaders);
  }

  create(type: typeof Node) {
    if (!(this.loaders.has(type))) {
      throw new Error(`Loader type '${type}' not found`);
    }

    return new DataLoader(this.loaders.get(type));
  }
}