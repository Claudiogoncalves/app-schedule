import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import { useAuth } from '../../hooks/auth';
import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon, 
} from './styles';

interface Props {
  title: string;
}

export function Dashboard() {
  const { signOut, user } = useAuth();

  const photo = { uri: user.photo }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={photo} />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
          </UserInfo>
          <Icon name='power' onPress={signOut} />
        </UserWrapper>        
      </Header>
    </Container>
  )
}
