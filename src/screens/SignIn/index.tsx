import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo_register.svg'; 
import LoginSvg from '../../assets/login.svg'; 

import { useAuth } from '../../hooks/auth';
import { SignInSocialButton } from "../../Components/SignInSocialButton";

import { 
  Container, 
  Header, 
  TitleWrapper, 
  Title, 
  SignInTitle, 
  Footer, 
  FooterWrapper
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SignIn({navigation}: any) {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
      setIsLoading(false);    
    }    
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Apple');
      setIsLoading(false);    
    }    
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Agende seu horário {'\n'} 
            de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'} 
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton 
            title="Email e senha" 
            svg={LoginSvg}
            onPress={() => navigation.navigate('Login')}
          />
          <SignInSocialButton 
            title="Entrar com Google" 
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          { 
            Platform.OS === 'ios' && 
            <SignInSocialButton 
              title="Entrar com Apple" 
              svg={AppleSvg} 
              onPress={handleSignInWithApple}
            />
          }
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Ainda não tem conta? Cadrastre-se</Text>
          </TouchableOpacity>
        </FooterWrapper>
        { isLoading && 
          <ActivityIndicator 
            color={theme.colors.shape}
            style={{ marginTop: 18 }} 
          />
        }
      </Footer>
    </Container>
  );
}