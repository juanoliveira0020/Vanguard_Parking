import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const Label = styled.Text`
  font-size: 15px;
  color: #000;
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  background-color: #d9d9d9;
  border-radius: 20px;
  height: 70px;
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
`;

const Button = styled.TouchableOpacity`
  background-color: #79219E;
  padding: 27px 30px;
  border-radius: 50px;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

const TimeText = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  color: #000;
`;

export default function Entrada({ navigation }) {
  const [placa, setPlaca] = useState('');
  const [horarioEntrada, setHorarioEntrada] = useState('');

  async function handleConfirmarEntrada() {
    if (!placa.trim()) {
      alert('Por favor, insira a placa.');
      return;
    }

    try {
      const response = await fetch('https://parkingapisenai.azurewebsites.net/api/veiculos/entrada', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa }),
      });

      if (response.ok) {
        const json = await response.json();

        // Exemplo: salvar o horário e mostrar na tela
        setHorarioEntrada(json.veiculo.horarioEntrada);

        alert(json.mensagem || 'Entrada realizada com sucesso!');

        // Se quiser, pode navegar para outra tela:
        // navigation.navigate('TelaDeCadastro');

      } else {
        alert('Erro ao registrar entrada.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o servidor.');
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />

      <Title>Entrada</Title>

      <Label>Insira a placa do veículo:</Label>
      <Input 
        value={placa}
        onChangeText={setPlaca}
        placeholder="Digite a placa"
        autoCapitalize="characters"
        maxLength={8}
      />

      <Button onPress={handleConfirmarEntrada}>
        <ButtonText>Confirmar Entrada</ButtonText>
      </Button>

      {horarioEntrada ? (
        <TimeText>Horário da Entrada: {horarioEntrada.slice(0, 5)}</TimeText>
      ) : (
        <TimeText>Aguardando entrada...</TimeText>
      )}
    </Container>
  );
}
