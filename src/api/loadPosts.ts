import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../model/PostStrapi';
import { SettingsStrapi } from '../model/SettingsStrapi';

export type LoadPostVariables = {
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
};

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<StrapiPostAndSettings> => {
  const defaultVariables: LoadPostVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
