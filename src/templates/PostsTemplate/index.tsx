import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../model/PostStrapi';
import { SettingsStrapi } from '../../model/SettingsStrapi';
import { Base } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
