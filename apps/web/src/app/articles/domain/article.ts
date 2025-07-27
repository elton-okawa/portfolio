export type Article = {
  slug: string;
  title: string;
  description: string;
  updatedAt: Date;
};

export const articles: Article[] = [
  {
    slug: 'hello-world',
    title: 'Hello world!',
    description: 'First article',
    updatedAt: new Date('2023-08-27T15:32:15'),
  },
];
