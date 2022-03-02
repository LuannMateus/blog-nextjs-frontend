import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  defaultLoadPostVariables,
  loadPosts,
  StrapiPostAndSettings,
} from '../api/loadPosts';
import { PostsTemplate } from '../templates/PostsTemplate';

export type PaginationProps = {
  limit: number;
  start: number;
};

export default function Index({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  console.log(variables);

  return (
    <>
      <Head>
        <title>
          {setting?.blogName} - {setting?.blogDescription}
        </title>
        <meta name="description" content={setting?.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: { ...defaultLoadPostVariables },
    },
    revalidate: 24 * 60 * 60,
  };
};
