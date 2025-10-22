import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe aqui as telas que quer visualizar no momento
import Home from './src/screens/Home';
import Abertura from './src/screens/Abertura';
import Entrada from './src/screens/Entrada';
import FazerCadastro from './src/screens/FazerCadastro';
import Historico from './src/screens/Historico';
import Saida from './src/screens/Saida';
import SejaBemVindo from './src/screens/SejaBemVindo';
import TelaDeCadastro from './src/screens/TelaDeCadastro';
import TelaDeEntrada from './src/screens/TelaDeLogin';
import TelaDeEscolhaLogin from './src/screens/TelaDeEscolhaLogin';
import TelaDeSucesso from './src/screens/TelaDeSucesso';
import VeiculosAtivos from './src/screens/VeiculosAtivos';
import Faturamento from './src/screens/Faturamento';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <NavigationContainer>

          {/* initialRouteName define a tela inicial, e headerShown: false remove o header padrão */}
        <Stack.Navigator initialRouteName="Abertura" screenOptions={{ headerShown: false }}>



           {/* Cada Stack.Screen representa uma tela, com um nome e componente associado */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Abertura" component={Abertura} />
          <Stack.Screen name="Entrada" component={Entrada} />
          <Stack.Screen name="FazerCadastro" component={FazerCadastro} />
          <Stack.Screen name="Historico" component={Historico} />
          <Stack.Screen name="Saida" component={Saida} />
          <Stack.Screen name="SejaBemVindo" component={SejaBemVindo} />
          <Stack.Screen name="TelaDeCadastro" component={TelaDeCadastro} />
          <Stack.Screen name="TelaDeLogin" component={TelaDeEntrada} />
          <Stack.Screen name="TelaDeEscolhaLogin" component={TelaDeEscolhaLogin} />
          <Stack.Screen name="TelaDeSucesso" component={TelaDeSucesso} />
          <Stack.Screen name="VeiculosAtivos" component={VeiculosAtivos} />
          <Stack.Screen name="Faturamento" component={Faturamento} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerApp>
  );
}
