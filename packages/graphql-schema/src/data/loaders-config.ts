import DataLoader from 'dataloader';
import { NodeType } from '@/shared/node.type';

export class LoadersConfig {
  private loaders: Map<
    typeof NodeType,
    DataLoader.BatchLoadFn<string, NodeType>
  >;

  register(
    loaders: Array<
      [type: typeof NodeType, loader: DataLoader.BatchLoadFn<string, NodeType>]
    >
  ) {
    this.loaders = new Map(loaders);
  }

  create(type: typeof NodeType) {
    if (!this.loaders.has(type)) {
      throw new Error(`Loader type '${type}' not found`);
    }

    return new DataLoader(this.loaders.get(type));
  }
}
