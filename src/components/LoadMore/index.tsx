import { ReactNode } from 'react';
import * as Styled from './styles';

export type LoadMoreProps = {
  isDisabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};

export const LoadMore = ({
  isDisabled = false,
  onClick,
  children,
}: LoadMoreProps) => {
  return (
    <Styled.Wrapper disabled={isDisabled} onClick={onClick}>
      {children}
    </Styled.Wrapper>
  );
};
