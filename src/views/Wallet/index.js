import React, { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  Performance,
  EyeButton,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardDescription,
  CardImage,
  AddCardContainer,
  AddCardTitle,
  UseTicketButton,
  UseTicketTitle,
} from "./styles";

import { Switch } from "react-native";
import cardImage from "../../images/credit-card.png";

export default function Pay() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header colors={
        useBalance
          ? ["#52e78c", "#1ab563"]
          : ["#D3D3D3", "#868686"]
      }>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "35,00" : "----"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#FFF"
              />
            </EyeButton>
          </BalanceContainer>
          <Performance>Seu saldo está rendendo 100% do CDI</Performance>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={32} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={setUseBalance}
        />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardDescription>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay
              </CardDescription>
            </CardDetails>
            <CardImage source={cardImage} resizeMode="contain" />
          </CardBody>
          <AddCardContainer>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddCardTitle>Adicionar cartão de crédito</AddCardTitle>
          </AddCardContainer>
        </Card>
        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0db060"
          />
          <UseTicketTitle>Usar código promocional</UseTicketTitle>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  );
}
