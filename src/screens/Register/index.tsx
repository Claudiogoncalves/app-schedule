import React from 'react';
import { View } from 'react-native';
import { Button } from '../../Components/Form/Button';
import { Input } from '../../Components/Form/Input/Input';

import { Container, Header, Title, Form, Fields } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}