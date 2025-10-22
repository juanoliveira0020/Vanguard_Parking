import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';  // Importando hook de navegação

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Logo = styled.Image`
  width: 280px;
  height: 280px;
  margin-bottom: 30px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #d9d9d9;
  border-radius: 25px;
  width: 80%;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const LoginText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

const DividerText = styled.Text`
  margin: 10px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

const RegisterButton = styled.TouchableOpacity`
  background-color: #79219E;
  border-radius: 25px;
  width: 80%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const RegisterText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export default function LoginChoice() {
  const navigation = useNavigation();  // Usando o hook de navegação

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} />

      {/* Navegação para a tela de Login */}
      <LoginButton onPress={() => navigation.navigate('TelaDeLogin')}>
        <LoginText>Fazer Login</LoginText>
      </LoginButton>

      <DividerText>OU</DividerText>

      {/* Navegação para a tela de Cadastro */}
      <RegisterButton onPress={() => navigation.navigate('FazerCadastro')}>
        <RegisterText>Cadastrar-se</RegisterText>
      </RegisterButton>
    </Container>
  );
}
