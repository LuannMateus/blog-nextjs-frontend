import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../model/PostStrapi';
import { SettingsStrapi } from '../model/SettingsStrapi';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const defaultLoadPostVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 2,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostVariables,
    ...variables,
  });

  return data;
};
