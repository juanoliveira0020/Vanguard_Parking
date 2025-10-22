import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
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
  background-color: #79219E;
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
  color: white;
  width: 33%;
  text-align: center;
`;

export default function Historico() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTc1NjU5NTM5OSwiZXhwIjoxNzU2NTk4OTk5fQ.dV6MYOVTvHwcC2byblb7oh6OhZ3WqC3QF9DThWRq5g0';

  const fetchHistorico = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://parkingapisenai.azurewebsites.net/api/veiculos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro HTTP ${response.status}: ${text}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Erro ao carregar histórico:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Atualiza quando a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      fetchHistorico();
    }, [])
  );

  // Função para formatar datas
  const formatDate = (dateString) => {
    if (!dateString) {
      return 'Sem entrada';
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  // Filtra dados pela placa
  const filteredData = data.filter((item) =>
    item.placa.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} />

      <Title>Histórico</Title>

      <FilterContainer>
        <DateButton>
          <DateText>dia / mes / ano ✎</DateText>
        </DateButton>

        <SearchInput
          placeholder="Pesquisar a Placa"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />

        <TableHeader>
          <Cell>Placa</Cell>
          <Cell>Entrada</Cell>
          <Cell>Saída</Cell>
        </TableHeader>

        {loading ? (
          <Cell>Carregando...</Cell>
        ) : filteredData.length === 0 ? (
          <Cell>Nenhum registro encontrado.</Cell>
        ) : (
          filteredData.map((item, index) => (
            <TableRow key={index}>
              <Cell>{item.placa}</Cell>
              <Cell>{formatDate(item.dataEntrada || item.entrada)}</Cell>
              <Cell>{item.dataSaida ? formatDate(item.dataSaida) : 'Em aberto'}</Cell>
            </TableRow>
          ))
        )}
      </FilterContainer>
    </Container>
  );
}
