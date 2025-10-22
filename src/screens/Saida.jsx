import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
  background: #fff;
  align-items: center;
`;

const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
`;

const Label = styled.Text`
  font-size: 15px;
  color: #000;
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  background: #d9d9d9;
  border-radius: 10px;
  height: 70px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Button = styled.TouchableOpacity`
  background-color: rgb(181, 64, 231);
  padding: 15px;
  border-radius: 30px;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 30px;
`;

const Price = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-top: 30px;
`;

export default function Saida({ navigation, setHistorico }) {
  const [placa, setPlaca] = useState('');
  const [valorPago, setValorPago] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleFinalizarSaida() {
    if (!placa.trim()) {
      alert('Por favor, insira a placa.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://parkingapisenai.azurewebsites.net/api/veiculos/saida', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa: placa.toUpperCase() }),
      });

      if (!response.ok) {
        throw new Error('Erro ao liberar saída');
      }

      const data = await response.json();

      alert(data.mensagem || 'Saída liberada com sucesso!');
      setValorPago(data.veiculo.valorPago);

      // Atualizar o histórico após a saída ser finalizada
      setHistorico(prevHistorico => 
        prevHistorico.map(veiculo =>
          veiculo.placa === data.veiculo.placa
            ? { ...veiculo, saida: data.veiculo.dataSaida, horarioSaida: data.veiculo.horarioSaida }
            : veiculo
        )
      );

      setPlaca('');
      
      // Se quiser navegar para outra tela, descomente:
      navigation.navigate('TelaDeSucesso');

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />

      <Title>Saída</Title>

      <Label>Insira a placa do veículo:</Label>
      <Input
        placeholder="Digite a placa"
        value={placa}
        onChangeText={setPlaca}
        autoCapitalize="characters"
        maxLength={8}
        editable={!loading}
      />

      <Button onPress={handleFinalizarSaida} disabled={loading}>
        <ButtonText>{loading ? 'Carregando...' : 'Finalizar Saída'}</ButtonText>
      </Button>

      {valorPago !== null && <Price>R$ {valorPago.toFixed(2)}</Price>}
    </Container>
  );
}
