import React, { ComponentProps } from 'react';
import { Input } from './styles';

export interface TextInputProps extends ComponentProps<'input'> {}

export function TextInput({ ...props }: TextInputProps) {
  return <Input {...props} />;
}
