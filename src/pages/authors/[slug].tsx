import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  defaultLoadPostVariables,
  loadPosts,
  StrapiPostAndSettings,
} from '../../api/loadPosts';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function AuthorsPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author.displayName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data = null;
  const variables = { authorSlug: ctx.params.slug as string };

  try {
    data = await loadPosts(variables);
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
      variables: {
        ...defaultLoadPostVariables,
        ...variables,
      },
    },
    revalidate: 24 * 60 * 60,
  };
};
