import React from "react";

import {
  Wrapper,
  Container,
  Header,
  HeaderTitle,
  TransactionsContainer,
  Transaction,
  TransactionTitle,
  Stores,
  StoresDetails,
  StoresTitle,
  StoresDescription,
  NearestLocations,
  NearestLocationsDetails,
  NearestLocationsTitle,
  NearestLocationsDescription,
} from "./styles";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const paymentFunctions = [
  {
    key: String(Math.random()),
    iconName: "people-outline",
    title: "Pagar pessoas",
  },
  {
    key: String(Math.random()),
    iconName: "account-balance-wallet",
    title: "Pagar boleto",
  },
  {
    key: String(Math.random()),
    iconName: "credit-card",
    title: "Pagar nas maquininhas",
  },
  {
    key: String(Math.random()),
    iconName: "monetization-on",
    title: "Fazer cobrança",
  },
  {
    key: String(Math.random()),
    iconName: "smartphone",
    title: "Recarga de celular",
  },
];

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitle>Transações</HeaderTitle>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
        </Header>
        <TransactionsContainer horizontal>
          {paymentFunctions.map((item) => (
            <Transaction key={item.key}>
              <MaterialIcons name={item.iconName} size={20} color="#10c86e" />
              <TransactionTitle>{item.title}</TransactionTitle>
            </Transaction>
          ))}
        </TransactionsContainer>
        <Stores>
          <MaterialIcons name="store" size={30} color="#10c86e"/>
          <StoresDetails>
            <StoresTitle>Stores</StoresTitle>
            <StoresDescription>
              Compre o que quiser sem sair de casa
            </StoresDescription>
          </StoresDetails>
        </Stores>
        <NearestLocations>
          <MaterialIcons name="near-me" size={30} color="#10c86e"/>
          <NearestLocationsDetails>
            <NearestLocationsTitle>Locais Próximos</NearestLocationsTitle>
            <NearestLocationsDescription>
              Confira estabelecimentos perto de você
            </NearestLocationsDescription>
          </NearestLocationsDetails>
        </NearestLocations>
      </Container>
    </Wrapper>
  );
}
