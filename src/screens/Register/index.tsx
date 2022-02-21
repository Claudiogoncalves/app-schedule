import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../Components/Form/Button';
import { Input } from '../../Components/Form/Input/Input';

import { Container, Header, Title, Form, Fields, BackButton } from './styles';

export function Register({ navigation }: any) {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#FFFFFF" />
        </BackButton>
        <View style={{ display: 'flex',width: '100%', alignItems: 'center', marginLeft: -50 }}>
          <Title>Cadastro</Title>
        </View>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
          <Input placeholder='Telefone' />
          <Input placeholder='Senha*' password={true} />
          <Input placeholder='Confirmar senha*' password={true} />
        </Fields>

        <Button title="Criar conta" />
      </Form>
    </Container>
  );
}