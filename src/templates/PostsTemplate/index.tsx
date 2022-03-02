import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/loadPosts';
import { LoadMore } from '../../components/LoadMore';
import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../model/PostStrapi';
import { SettingsStrapi } from '../../model/SettingsStrapi';
import { Base } from '../Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [postsState, setPostsState] = useState(posts);
  const [variablesState, setVariablesState] = useState(variables);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setIsButtonDisabled(true);

    const newVariables = {
      ...variablesState,
      start: variablesState.start + variablesState.limit,
      limit: variablesState.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setIsButtonDisabled(false);
    setVariablesState(newVariables);
    setPostsState((prevState) => [...prevState, ...morePosts.posts]);
  };

  return (
    <Base settings={settings}>
      <PostGrid posts={postsState} />
      <Styled.LoadMoreContainer>
        <LoadMore onClick={handleLoadMorePosts} isDisabled={isButtonDisabled}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </LoadMore>
      </Styled.LoadMoreContainer>
    </Base>
  );
};
