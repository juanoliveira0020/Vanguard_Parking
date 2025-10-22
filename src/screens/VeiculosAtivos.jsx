import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding: 20px;
  align-content: center;
`;

const Logo = styled.Image`
  width: 220px;
  height: 220px;
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
  border-radius: 40px;
  padding: 40px;
  width: 100%;
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

const SearchInput = styled.TextInput`
  background-color: #fff;
  border-radius: 20px;
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
`;

const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

const Cell = styled.Text`
  font-size: 13px;
  color: #000;
  width: 33%;
  text-align: center;
`;

export default function Historico() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Se precisar de token, coloque aqui
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTc1NjU5NTM5OSwiZXhwIjoxNzU2NTk4OTk5fQ.dV6MYOVTvHwcC2byblb7oh6OhZ3WqC3QF9DThWRq5g0';

  useEffect(() => {
    fetch('https://parkingapisenai.azurewebsites.net/api/veiculos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: token } : {}),
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Erro HTTP ${response.status}: ${text}`);
        }
        return response.json();
      })
      .then((json) => {
        // Filtra apenas os veículos ativos (sem 'saida')
        const veiculosAtivos = json.filter(item => !item.saida);
        setData(veiculosAtivos); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar histórico:', error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} />

      <Title>Histórico</Title>

      <FilterContainer>
        <DateButton>
          <DateText>dia / mes / ano ✎</DateText>
        </DateButton>

        <SearchInput placeholder="Pesquisar a Placa" placeholderTextColor="#888" />

        <TableHeader>
          <Cell>Placa</Cell>
          <Cell>Entrada</Cell>
          <Cell>Saída</Cell>
        </TableHeader>

        {loading ? (
          <Cell>Carregando...</Cell>
        ) : data.length === 0 ? (
          <Cell>Nenhum registro encontrado.</Cell>
        ) : (
          data.map((item, index) => (
            <TableRow key={index}>
              <Cell>{item.placa}</Cell>
              <Cell>{item.entrada}</Cell>
              <Cell>{item.saida || 'Em aberto'}</Cell> 
            </TableRow>
          ))
        )}
      </FilterContainer>
    </Container>
  );
}
