import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  radii,
  space,
} from '@stone-ui/tokens';
import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${colors.white};
  padding: ${space[3]} ${space[4]};
  border-radius: ${radii.sm};
  box-sizing: 'border-box';
  border: solid 2px ${colors.gray200};

  font-family: ${fonts.default};
  font-size: ${fontSizes.sm};
  color: ${colors.gray500};
  font-weight: ${fontWeights.regular};

  &:focus {
    border-color: ${colors.stone300};
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.gray400};
  }
`;
