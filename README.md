# 🅿️ Vanguard Parking

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.79-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-53-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" alt="Status">
</p>

<p align="center">
  Aplicativo mobile desenvolvido em React Native (Expo) para gerenciamento de um estacionamento:
  cadastro de entrada e saída de veículos, histórico, veículos ativos no pátio e faturamento.
</p>

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Telas do Aplicativo](#-telas-do-aplicativo)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Fluxo de Navegação](#-fluxo-de-navegação)
- [API Consumida](#-api-consumida)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#️-pré-requisitos)
- [Como Executar](#-como-executar)
- [Build da Aplicação (EAS)](#-build-da-aplicação-eas)
- [Pontos de Atenção](#️-pontos-de-atenção)
- [Melhorias Futuras](#-melhorias-futuras)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Vanguard Parking** é um aplicativo mobile desenvolvido em **React Native** com **Expo**, criado para simular o gerenciamento de um estacionamento pelo celular.

O app permite registrar a entrada e a saída de veículos, consultar quais veículos estão atualmente no pátio, visualizar o histórico completo de movimentações e acompanhar o faturamento. Toda a navegação é feita em pilha (stack), com telas de abertura, login/cadastro e o menu principal de operações.

Este projeto foi desenvolvido como atividade acadêmica para praticar desenvolvimento mobile com React Native, navegação com React Navigation, estilização com Styled Components e consumo de uma API REST externa.

---

## ✨ Funcionalidades

- 🎬 Tela de abertura (splash) com redirecionamento automático
- 🔐 Cadastro e login de usuário
- 🚗 Cadastro de entrada de veículo (registra a placa e o horário de entrada)
- 🚙 Registro de saída de veículo (calcula e exibe o valor a pagar)
- 📋 Listagem de veículos ativos no pátio (ainda sem saída registrada)
- 🕓 Histórico de veículos, com busca por placa
- 💰 Tela de faturamento (totais e média de valores recebidos)
- ✅ Tela de confirmação/sucesso após operações

---

## 📱 Telas do Aplicativo

| Tela (arquivo) | Rota | Descrição |
|---|---|---|
| `Abertura.jsx` | `Abertura` | Splash inicial, redireciona automaticamente após 3 segundos |
| `TelaDeEscolhaLogin.jsx` | `TelaDeEscolhaLogin` | Escolha entre "Fazer Login" ou "Cadastrar-se" |
| `TelaDeLogin.jsx` | `TelaDeLogin` | Autenticação do usuário (e-mail e senha) |
| `FazerCadastro.jsx` | `FazerCadastro` | Cadastro de um novo usuário (nome, e-mail e senha) |
| `SejaBemVindo.jsx` | `SejaBemVindo` | Mensagem de boas-vindas após o login, redireciona para a Home |
| `Home.jsx` | `Home` | Menu principal com acesso às demais funcionalidades |
| `Entrada.jsx` | `Entrada` | Registro de entrada de um veículo pela placa |
| `Saida.jsx` | `Saida` | Registro de saída de um veículo e exibição do valor a pagar |
| `VeiculosAtivos.jsx` | `VeiculosAtivos` | Lista de veículos atualmente no pátio |
| `Historico.jsx` | `Historico` | Histórico completo de veículos, com campo de busca por placa |
| `Faturamento.jsx` | `Faturamento` | Resumo de faturamento (dados de exemplo) |
| `TelaDeSucesso.jsx` | `TelaDeSucesso` | Confirmação de pagamento/operação concluída |
| `TelaDeCadastro.jsx` | `TelaDeCadastro` | Tela de confirmação de cadastro de veículo concluído |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **React Native 0.79** | Base do aplicativo mobile |
| **Expo 53** | Ferramentas de build, execução e empacotamento |
| **React 19** | Biblioteca de componentes |
| **React Navigation** (`native` + `native-stack`) | Navegação em pilha entre as telas |
| **Styled Components** | Estilização dos componentes visuais |
| **Axios** | Cliente HTTP disponível no projeto para chamadas à API |
| **Expo Dev Client** | Suporte a builds de desenvolvimento customizados |

> ℹ️ Embora o `axios` esteja instalado no projeto, as telas atuais fazem as requisições HTTP utilizando a `fetch` nativa do JavaScript.

---

## 🧭 Fluxo de Navegação

```text
Abertura (splash)
      │
      ▼
TelaDeEscolhaLogin
      │
      ├── "Fazer Login" ──► TelaDeLogin ──► SejaBemVindo ──► Home
      │
      └── "Cadastrar-se" ─► FazerCadastro ──► TelaDeLogin

Home (menu principal)
 ├── Cadastrar Veículo   ──► Entrada
 ├── Veículos no pátio   ──► VeiculosAtivos
 ├── Retirar Veículo     ──► Saida ──► TelaDeSucesso ──► Home
 ├── Faturamento         ──► Faturamento
 └── Histórico De Veículos ──► Historico
```

---

## 🔗 API Consumida

O aplicativo consome uma API REST externa hospedada em:

```
https://parkingapisenai.azurewebsites.net
```

| Tela | Método | Endpoint | Ação |
|---|---|---|---|
| Login | `POST` | `/auth/login` | Autentica o usuário |
| Cadastro | `POST` | `/auth/register` | Cria um novo usuário |
| Entrada | `POST` | `/api/veiculos/entrada` | Registra a entrada de um veículo (`{ placa }`) |
| Saída | `PUT` | `/api/veiculos/saida` | Registra a saída de um veículo e retorna o valor cobrado |
| Histórico / Veículos Ativos | `GET` | `/api/veiculos` | Lista todos os veículos (filtrados no app por status de saída) |

> ⚠️ A tela de **Faturamento** ainda exibe dados fixos de exemplo e não está integrada à API.

---

## 📂 Estrutura do Projeto

```text
Vanguard_Parking/
│
├── assets/                      # Ícones e imagens utilizados no app
│
├── src/
│   └── screens/
│       ├── Abertura.jsx
│       ├── TelaDeEscolhaLogin.jsx
│       ├── TelaDeLogin.jsx
│       ├── FazerCadastro.jsx
│       ├── SejaBemVindo.jsx
│       ├── Home.jsx
│       ├── Entrada.jsx
│       ├── Saida.jsx
│       ├── VeiculosAtivos.jsx
│       ├── Historico.jsx
│       ├── Faturamento.jsx
│       ├── TelaDeSucesso.jsx
│       └── TelaDeCadastro.jsx
│
├── App.js                       # Configuração das rotas (Stack Navigator)
├── index.js                     # Ponto de entrada do app (Expo)
├── app.json                      # Configurações do Expo (ícone, splash, package)
├── eas.json                      # Configurações de build (EAS Build)
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- [Node.js](https://nodejs.org) (LTS recomendado)
- npm ou yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npx expo` já é suficiente, sem instalação global)
- App **Expo Go** no celular (Android/iOS) *ou* um emulador Android/iOS configurado

---

## 🚀 Como Executar

**1. Clone o repositório**
```bash
git clone https://github.com/juanoliveira0020/Vanguard_Parking.git
```

**2. Entre na pasta do projeto**
```bash
cd Vanguard_Parking
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o projeto com o Expo**
```bash
npm start
```

Isso abre o **Metro Bundler** no navegador, com um QR Code para escanear no app **Expo Go**.

**5. Ou rode diretamente em uma plataforma específica**

```bash
npm run android   # Abre em um emulador/dispositivo Android
npm run ios       # Abre em um simulador/dispositivo iOS (requer macOS)
npm run web       # Abre no navegador
```

> ℹ️ O app se conecta à API remota hospedada no Azure (`parkingapisenai.azurewebsites.net`), portanto é necessário ter conexão com a internet para usar as funcionalidades de login, cadastro, entrada, saída e histórico.

---

## 📦 Build da Aplicação (EAS)

O projeto já possui um `eas.json` configurado com três perfis de build, usando o **EAS Build** da Expo:

| Perfil | Uso |
|---|---|
| `development` | Build de desenvolvimento (APK, distribuição interna) |
| `preview` | Build de teste para distribuição interna |
| `production` | Build de produção, com incremento automático de versão |

Para gerar um build (requer conta Expo/EAS configurada):
```bash
npx eas build --profile development --platform android
```

---

## ⚠️ Pontos de Atenção

Durante a análise do código, alguns pontos merecem atenção antes de usar o projeto em produção:

- Algumas telas (`Historico.jsx` e `VeiculosAtivos.jsx`) utilizam um **token de autenticação fixo diretamente no código**, em vez de obtê-lo dinamicamente após o login. Isso deve ser substituído por um token salvo em `AsyncStorage` (ou similar) após a autenticação.
- A tela **Login** (`TelaDeLogin.jsx`) faz login, mas ainda não persiste o token recebido — o comentário no código já indica isso (`// Aqui você pode salvar o token no AsyncStorage`).
- A tela **Faturamento** exibe dados estáticos de exemplo, ainda não integrados à API.

---

## 🚀 Melhorias Futuras

- [ ] Persistir o token de autenticação (AsyncStorage) após o login
- [ ] Remover tokens fixos no código e usar autenticação dinâmica
- [ ] Integrar a tela de Faturamento com dados reais da API
- [ ] Adicionar tratamento de erros e loading mais consistente em todas as telas
- [ ] Implementar filtro de data funcional no Histórico e no Faturamento
- [ ] Adicionar testes automatizados (unitários e de integração)
- [ ] Publicar o app nas lojas (Google Play / App Store)

---

## 👨‍💻 Autor

**Juan Oliveira**

[![GitHub](https://img.shields.io/badge/GitHub-juanoliveira0020-181717?style=flat&logo=github)](https://github.com/juanoliveira0020)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.

Sinta-se à vontade para utilizá-lo como referência para estudos sobre React Native, Expo e integração com APIs REST.
