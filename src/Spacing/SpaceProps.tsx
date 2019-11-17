import styled from 'styled-components';
import {
  space,
  margin,
  padding,
  SpaceProps,
  MarginProps,
  PaddingProps
} from 'styled-system';

export const Heading = styled.h2<SpaceProps>`
  ${space}
`;

export const Paragraph = styled.p<MarginProps & PaddingProps>`
  ${margin}
  ${padding}
`;
