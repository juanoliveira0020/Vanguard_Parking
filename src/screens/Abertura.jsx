import React, { useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 270px;
  height: 270px;
`;

export default function Abertura({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TelaDeEscolhaLogin'); //será direcionado a tela para escolha de login
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />
    </Container>
  );
}


