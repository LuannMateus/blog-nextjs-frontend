import { Author } from '../../model/Author';
import { Category } from '../../model/Category';
import { PostTags } from '../../model/PostTags';
import { StrapiImage } from '../../model/StrapiImage';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = {
  id: string;
  title: string;
  author: Author;
  excerpt: string;
  cover: StrapiImage;
  tags: PostTags[];
  categories: Category[];
  createdAt: string;
  content: string;
  slug: string;
};

export const Post = ({
  id,
  title,
  author,
  cover,
  excerpt,
  categories,
  createdAt,
  content,
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
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
