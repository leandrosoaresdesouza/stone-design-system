import React, { ComponentProps } from 'react';
import { TextAreaContainer } from './styles';

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea({ ...props }: TextAreaProps) {
  return <TextAreaContainer {...props} />;
}
