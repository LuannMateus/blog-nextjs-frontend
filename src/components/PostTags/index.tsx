import * as Styled from './styles';
import { PostTags as TPostTags } from '../../model/PostTags';
import Link from 'next/link';

export type PostTagsProps = {
  tags?: TPostTags[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
