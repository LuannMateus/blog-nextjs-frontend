import Link from 'next/link';
import { Author } from '../../model/Author';
import { StrapiImage } from '../../model/StrapiImage';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  slug: string;
  title: string;
  author: Author;
  cover: StrapiImage;
  excerpt: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/posts/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
