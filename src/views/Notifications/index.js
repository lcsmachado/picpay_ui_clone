import React from "react";

import {
  Wrapper,
  Container,
  Header,
  HeaderTitle,
  SettingsButton,
  SettingsButtonTitle,
  NotificationsContainer,
  Notification,
  NotificationDescription,
  NotificationDetails,
} from "./styles";

export default function Notifications() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitle>Notificações</HeaderTitle>
          <SettingsButton>
            <SettingsButtonTitle>Configurar</SettingsButtonTitle>
          </SettingsButton>
        </Header>
        <NotificationsContainer>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
          <Notification>
            <NotificationDescription>
              Transfira seu dinhero pro PicPay! Quer usar seu cartão de débito Caixa para trazer seu dinheiro pro PicPay?
            </NotificationDescription>
            <NotificationDetails>
              Hoje às 22:30
            </NotificationDetails>
          </Notification>
        </NotificationsContainer>
      </Container>
    </Wrapper>
  );
}
