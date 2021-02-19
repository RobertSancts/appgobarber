import React from 'react';
import { TextPropTypes } from 'react-native';

import { Container, TextInput } from './style';

interface TextProps extends TextProps {
  name: string;
  icon: string;
}

const Input: React.FC<TextProps> = () => (
  <Container>
    <TextInput />
  </Container>
);

export default Input;
