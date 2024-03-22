import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  radii,
  space,
} from '@stone-ui-fake/tokens';

const VARIANTS = {
  primary: css`
    color: ${colors.white};
    background-color: ${colors.stone300};

    &:not(:disabled):hover {
      background-color: ${colors.stone500};
    }

    &:disabled {
      background-color: ${colors.gray200};
    }
  `,

  secondary: css`
    color: ${colors.stone500};
    border: solid 2px ${colors.stone500};

    &:not(:disabled):hover {
      color: ${colors.white};
      background-color: ${colors.stone500};
    }

    &:disabled {
      color: ${colors.gray200};
      border-color: ${colors.gray200};
    }
  `,

  tertiary: css`
    color: ${colors.gray700};

    &:not(:disabled):hover {
      color: ${colors.gray900};
    }

    &:disabled {
      color: ${colors.gray200};
    }
  `,
};

const SIZES = {
  sm: css`
    height: 38px;
  `,

  md: css`
    height: 46px;
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  all: unset;
  border-radius: ${radii.sm};
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.medium};
  font-family: ${fonts.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${space[4]};
  transition: 0.3s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space[2]};

  cursor: pointer;

  svg {
    width: ${space[4]};
    height: ${space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.gray100};
  }

  ${({ variant }) => variant && VARIANTS[variant]}
  ${({ size }) => size && SIZES[size]}
`;
