import { ComponentProps, ElementType } from 'react';
import { TextContainer } from './styles';

export type TextSizeProps =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export interface TextProps extends ComponentProps<'p'> {
  size?: TextSizeProps;
  as?: ElementType;
}

export function Text({ size = 'xl', as, children, ...props }: TextProps) {
  return (
    <TextContainer size={size} {...props} as={as}>
      {children}
    </TextContainer>
  );
}
