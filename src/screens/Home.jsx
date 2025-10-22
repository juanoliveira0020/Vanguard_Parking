import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  padding: 40px 20px;
`;

const Logo = styled.Image`
  width: 230px;
  height: 230px;
  margin-bottom: 20px;
`;

const MenuContainer = styled.View`
  background-color: #79219E;
  padding: 20px;
  border-radius: 40px;
  width: 100%;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MenuButton = styled.TouchableOpacity`
  background-color: #d9d9d9;
  border-radius: 25px;
  width: 45%;
  height: 220px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #000;
`;

const FullWidthButton = styled.TouchableOpacity`
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const FullButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FullButtonIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const FullButtonText = styled.Text`
  font-size: 15px;
  color: #000;
`;

// Recebe navigation como prop
export default function Home({ navigation }) {
  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} />

      <MenuContainer>
        <ButtonRow>
          <MenuButton onPress={() => navigation.navigate('Entrada')}>
            <ButtonIcon source={require('../../assets/car .png')} />
            <ButtonText>Cadastrar Veículo</ButtonText>
          </MenuButton>

          <MenuButton onPress={() => navigation.navigate('VeiculosAtivos')}>
            <ButtonIcon source={require('../../assets/car .png')} />
            <ButtonText>Veículos no pátio</ButtonText>
          </MenuButton>
        </ButtonRow>

        <ButtonRow>
          <MenuButton onPress={() => navigation.navigate('Saida')}>
            <ButtonIcon source={require('../../assets/car .png')} />
            <ButtonText>Retirar Veículo</ButtonText>
          </MenuButton>

          <MenuButton onPress={() => navigation.navigate('Faturamento')}>
            <ButtonIcon source={require('../../assets/Faturamento icon.png')} />
            <ButtonText>Faturamento</ButtonText>
          </MenuButton>
        </ButtonRow>

        <FullWidthButton onPress={() => navigation.navigate('Historico')}>
          <FullButtonContent>
            <FullButtonIcon source={require('../../assets/Banco de dados icon.png')} />
            <FullButtonText>Histórico De Veículos</FullButtonText>
          </FullButtonContent>
        </FullWidthButton>
      </MenuContainer>
    </Container>
  );
}
