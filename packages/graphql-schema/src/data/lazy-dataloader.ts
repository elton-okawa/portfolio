import { Node } from "@/shared/node";
import { LoadersConfig } from "./loaders-config";
import DataLoader from "dataloader";

export class LazyDataloader {
  private loaders: Map<typeof Node, DataLoader<string, Node>> = new Map();

  constructor(private config: LoadersConfig) {}
  
  get<T extends typeof Node>(type: T): DataLoader<string, InstanceType<T>> {
    if (!this.loaders.has(type)) {
      this.loaders.set(type, this.config.create(type));
    }

    return this.loaders.get(type) as DataLoader<string, InstanceType<T>>;
  }
}