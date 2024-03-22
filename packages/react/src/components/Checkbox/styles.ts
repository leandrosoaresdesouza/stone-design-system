import { colors, radii, space } from '@stone-ui-fake/tokens';
import styled, { keyframes } from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${space[6]};
  height: ${space[6]};
  background-color: ${colors.gray100};
  border-radius: ${radii.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${colors.gray200};

  &[data-state='checked'] {
    background-color: ${colors.stone300};
  }

  &:focus,
  &[data-state='checked'] {
    border: solid 2px ${colors.stone300};
  }
`;

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${colors.white};
  width: ${space[4]};
  height: ${space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`;
