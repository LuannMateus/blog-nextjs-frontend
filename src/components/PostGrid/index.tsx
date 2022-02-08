import { PostCard, PostCardProps } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
      )}

      {posts.map((post: PostCardProps) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </Styled.Wrapper>
  );
};
