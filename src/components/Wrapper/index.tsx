import React from 'react';
import * as Styled from './styled';

const Wrapper = (children: string) => (
  <Styled.Positioner>
    <Styled.Contents>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Contents>
  </Styled.Positioner>
);

export default Wrapper;
