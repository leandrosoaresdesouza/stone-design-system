import { colors, fontSizes, fonts, lineHeights } from '@stone-ui-fake/tokens';
import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

const SIZES = {
  sm: css`
    font-size: ${fontSizes.xl};
  `,
  md: css`
    font-size: ${fontSizes['2xl']};
  `,
  lg: css`
    font-size: ${fontSizes['4xl']};
  `,
  xl: css`
    font-size: ${fontSizes['5xl']};
  `,
  '2xl': css`
    font-size: ${fontSizes['6xl']};
  `,
  '4xl': css`
    font-size: ${fontSizes['7xl']};
  `,
  '5xl': css`
    font-size: ${fontSizes['8xl']};
  `,
  '6xl': css`
    font-size: ${fontSizes['9xl']};
  `,
};

export const HeadingContainer = styled.h2<HeadingProps>`
  font-family: ${fonts.default};
  line-height: ${lineHeights.shorter};
  margin: 0;
  color: ${colors.gray800};

  ${({ size }) => size && SIZES[size]}
`;
