/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input />
      <Input />

      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
