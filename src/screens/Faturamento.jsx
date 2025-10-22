import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação

const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding: 20px;
  align-content: center;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const FilterContainer = styled.View`
  background-color: #e0d6e5;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const FilterText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const DateButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 20px;
  align-self: center;
  margin-bottom: 10px;
`;

const DateText = styled.Text`
  font-size: 14px;
  color: #000;
`;

const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-color: #79219E;
`;

const Cell = styled.Text`
  font-size: 14px;
  color: #000;
  width: 33%;
  text-align: center;
`;

const TotalContainer = styled.View`
  background-color: #e0d6e5;
  padding: 15px;
  border-radius: 20px;
  margin-top: 20px;
  align-items: center;
`;

const TotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const MediaText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #444;
`;

export default function Faturamento() {
  return (
    <Container>
     <Logo source={require('../../assets/icon do estacionamento.png')} />
      <Title>Faturamento</Title>

      {/* Filtro de data e pesquisa */}
      <FilterContainer>
        <FilterText>Filtrar</FilterText>
        <DateButton>
          <DateText>Início / Término</DateText>
        </DateButton>

        <DateButton>
          <DateText>Filtrar</DateText>
        </DateButton>
      </FilterContainer>

      {/* Tabela de dados */}
      <TableHeader>
        <Cell>Placa</Cell>
        <Cell>Data</Cell>
        <Cell>Valor</Cell>
        <Cell>Tipo</Cell>
      </TableHeader>

      <TableRow>
        <Cell>UWM-Q21</Cell>
        <Cell>12/12/2023</Cell>
        <Cell>R$ 777,77</Cell>
        <Cell>Débito</Cell>
      </TableRow>

      <TableRow>
        <Cell>UPM54-Q21</Cell>
        <Cell>13/12/2023</Cell>
        <Cell>R$ 500,00</Cell>
        <Cell>Crédito</Cell>
      </TableRow>

      <TableRow>
        <Cell>YOXZ-Q71</Cell>
        <Cell>14/12/2023</Cell>
        <Cell>R$ 300,00</Cell>
        <Cell>Débito</Cell>
      </TableRow>

      {/* Total e Média */}
      <TotalContainer>
        <TotalText>Total: R$ 777.777,00</TotalText>
        <MediaText>Média: R$ 77,00</MediaText>
      </TotalContainer>
    </Container>
  );
}
