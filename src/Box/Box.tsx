import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system';

type BoxProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  border-radius: 4px;
  border: 1px solid #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .125);
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;
