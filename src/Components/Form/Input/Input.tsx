import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface Props extends TextInputProps {
  password?: boolean;
}

export function Input({ password, ...rest }: Props) {
  return (
    <Container {...rest} secureTextEntry={password} />
  )
}