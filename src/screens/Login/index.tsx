import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../Components/Form/Button';
import { Input } from '../../Components/Form/Input/Input';
import { useNavigation } from '@react-navigation/native';

import { Register } from '../Register';

import { Container, Header, Title, Form, Fields, BackButton } from './styles';

export function Login({navigation}: any) {
  const navigationScreen = useNavigation();

  function handleRegister() {
    navigation.navigate({
      screen: 'Register',
      params: undefined,
    })
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#FFFFFF" />
        </BackButton>
        <View style={{ display: 'flex',width: '100%', alignItems: 'center', marginLeft: -50 }}>
          <Title>Login</Title>
        </View>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Fields>

        <Button title="Entrar" />
      </Form>
    </Container>
  );
}