import { PostStrapi } from '../../model/PostStrapi';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts?: PostStrapi[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado aqui =(</Styled.NotFound>
      )}

      {posts.map((post: PostStrapi) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </Styled.Wrapper>
  );
};
