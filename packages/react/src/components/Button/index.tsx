import { ComponentProps, ElementType } from 'react';
import { ButtonContainer } from './styles';
import { TailSpin } from 'react-loader-spinner';
import { colors } from '@stone-ui-fake/tokens';

export type VariantProps = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType;
  size?: 'sm' | 'md';
  isLoading?: boolean;
  variant: VariantProps;
}

export function Button({
  isLoading,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} size={size} {...props}>
      {isLoading ? (
        <>
          {children}
          <TailSpin
            color={colors.stone300}
            ariaLabel="tail-spin-loading"
            radius="4"
          />
        </>
      ) : (
        <>{children}</>
      )}
    </ButtonContainer>
  );
}
