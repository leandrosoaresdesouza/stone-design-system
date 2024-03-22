import * as Avatar from '@radix-ui/react-avatar';
import { colors, radii, space } from '@stone-ui-fake/tokens';
import styled from 'styled-components';

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: ${radii.full};
  display: inline-block;
  width: ${space[12]};
  height: ${space[12]};
  overflow: hidden;
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit; // inherits from father
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray200};
  color: ${colors.gray800};

  svg {
    width: ${space[6]};
    height: ${space[6]};
    color: ${colors.white};
  }
`;
