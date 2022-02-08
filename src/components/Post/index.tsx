import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent, HtmlContentProps } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & HtmlContentProps;

export const Post = ({
  id,
  title,
  author,
  cover,
  excerpt,
  categories,
  createdAt,
  html,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          id={id}
          title={title}
          author={author}
          cover={cover}
          excerpt={excerpt}
          categories={categories}
          createdAt={createdAt}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={html} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
