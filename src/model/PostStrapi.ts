import { Author } from './Author';
import { PostTags } from './PostTags';
import { StrapiImage } from './StrapiImage';
import { Category } from './Category';

export type PostStrapi = {
  id: string;
  title: string;
  author: Author;
  excerpt: string;
  content: string;
  cover: StrapiImage;
  tags: PostTags[];
  categories: Category[];
  slug: string;
  allowComments: boolean;
  createdAt: string;
};
