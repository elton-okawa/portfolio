import { Entity } from '@/shared/entity';

export class Article extends Entity {
  slug: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
