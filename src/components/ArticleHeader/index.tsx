import * as Styled from './styles';
import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading as="h2" size="huge">
        {title}
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover} alt={title} />
      <ArticleMeta
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
    </Styled.Wrapper>
  );
};
