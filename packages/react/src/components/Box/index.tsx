import { ComponentProps, ElementType } from 'react';
import { BoxContainer } from './styles';

export interface BoxProps extends ComponentProps<'div'> {
  as: ElementType;
}

export function Box({ as, children, ...props }: BoxProps) {
  return (
    <>
      <BoxContainer {...props} as={as}>
        {children}
      </BoxContainer>
    </>
  );
}
