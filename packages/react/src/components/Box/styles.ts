import styled from 'styled-components';
import { colors, radii, space } from '@stone-ui/tokens';

export const BoxContainer = styled.div`
  padding: ${space[6]};
  border-radius: ${radii.md};
  background-color: ${colors.white};
  border: solid 1px ${colors.gray100};
`;
