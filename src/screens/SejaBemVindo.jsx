import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px;
`;

const TextWelcome = styled.Text`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  color: black;
`;

const Logo = styled.Image`
  width: 350px;
  height: 350px;
`;

const Line = styled.View`
  height: 8px;
  background: #79219E;
  width: 90%;
  margin-top: 30px;
  border-radius: 8px;
`;

export default function TelaDeCadastro({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Volta para a Home após 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <TextWelcome>Seja bem vindo a{'\n'}Vanguard Parking.</TextWelcome>
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />
      <Line />
    </Container>
  );
}


