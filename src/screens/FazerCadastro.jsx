import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 40px 20px 20px 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-bottom: 30px;
  margin-top: 40px;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #000;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background: #d9d9d9;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #79219E;
  width: 100%;
  padding: 18px;
  border-radius: 30px;
  align-items: center;
  margin-top: 25px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export default function FazerCadastro() {
  const navigation = useNavigation();

  // Estados para os inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleConfirm = async () => {
    // Objeto com os dados para enviar
    const data = { nome, email, senha };

    try {
      const response = await fetch('https://parkingapisenai.azurewebsites.net/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Navegar pra tela de login após sucesso
        navigation.navigate('TelaDeLogin');
      } else {
        alert('Erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      alert('Erro na conexão com o servidor.');
      console.error(error);
    }
  };

  return (
    <Container>
      <Logo source={require('../../assets/icon do estacionamento.png')} resizeMode="contain" />

      <Label>Nome</Label>
      <Input
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Label>Email</Label>
      <Input
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Label>Senha</Label>
      <Input
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button onPress={handleConfirm}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </Container>
  );
}
