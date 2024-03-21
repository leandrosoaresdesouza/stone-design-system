import { ComponentProps, ElementType } from 'react';
import { HeadingContainer } from './styles';

export type HeadingSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | '5xl'
  | '6xl';

export interface HeadingProps extends ComponentProps<'h1'> {
  size?: HeadingSize;
  as?: ElementType;
}

export function Heading({ size = 'md', as, children, ...props }: HeadingProps) {
  return (
    <HeadingContainer size={size} {...props} as={as}>
      {children}
    </HeadingContainer>
  );
}
