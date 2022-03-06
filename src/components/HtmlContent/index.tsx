import Prism from 'prismjs';
import { useEffect } from 'react';
import { PrismWrapper } from './prismVscodeDarkStyle';
import * as Styled from './styles';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    Prism.highlightAll();

    document.querySelectorAll('iframe[src*=ads]').forEach((el) => el.remove());
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </PrismWrapper>
  );
};
