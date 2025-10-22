import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 270px;
  height: 270px;
`;

const TextMessage = styled.Text`
  margin-top: 40px;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
`;

const Line = styled.View`
  height: 8px;
  background: #79219E;
  width: 80%;
  margin-top: 30px;
  border-radius: 10px;
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
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />
      <TextMessage>Veículo {'\n'} Cadastrado</TextMessage>
      <Line />
    </Container>
  );
}
