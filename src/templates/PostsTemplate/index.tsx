import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../model/PostStrapi';
import { SettingsStrapi } from '../../model/SettingsStrapi';
import { Base } from '../Base';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostTemplate = ({ settings, posts = [] }: PostTemplateProps) => {
  return (
    <Base settings={settings}>
      <PostGrid posts={posts} />
    </Base>
  );
};
