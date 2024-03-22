import { colors, fontSizes, fonts, lineHeights } from '@stone-ui-fake/tokens';
import styled, { css } from 'styled-components';
import { TextProps } from '.';

const SIZES = {
  xxs: css`
    font-size: ${fontSizes.xxs};
  `,
  xs: css`
    font-size: ${fontSizes.xs};
  `,
  sm: css`
    font-size: ${fontSizes.sm};
  `,
  md: css`
    font-size: ${fontSizes.md};
  `,
  lg: css`
    font-size: ${fontSizes.lg};
  `,
  xl: css`
    font-size: ${fontSizes.xl};
  `,
  '2xl': css`
    font-size: ${fontSizes['2xl']};
  `,
  '4xl': css`
    font-size: ${fontSizes['4xl']};
  `,
  '5xl': css`
    font-size: ${fontSizes['5xl']};
  `,
  '6xl': css`
    font-size: ${fontSizes['6xl']};
  `,
  '7xl': css`
    font-size: ${fontSizes['7xl']};
  `,
  '8xl': css`
    font-size: ${fontSizes['8xl']};
  `,
  '9xl': css`
    font-size: ${fontSizes['9xl']};
  `,
};

export const TextContainer = styled.p<TextProps>`
  font-family: ${fonts.default};
  line-height: ${lineHeights.base};
  margin: 0;
  color: ${colors.gray800};

  ${({ size }) => size && SIZES[size]}
`;
