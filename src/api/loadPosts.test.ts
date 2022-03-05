import request from 'graphql-request';
import config from '../config';
import { defaultLoadPostVariables, loadPosts } from './loadPosts';

jest.mock('graphql-request');

jest.mock('../graphql/queries.ts', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY',
  };
});

describe('loadPosts', () => {
  it('Should call request with default variables', async () => {
    await loadPosts();

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultLoadPostVariables,
    );
  });

  it('Should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      ...defaultLoadPostVariables,
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});
