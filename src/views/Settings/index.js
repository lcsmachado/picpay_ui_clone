import React from "react";

import {
  Wrapper,
  Container,
  Header,
  AvatarImage,
  UserName,
  FullName,
  ProfileButton,
  ProfileButtonText,
  AccountSettings,
  AccountSettingsTitle,
  AccountSetting,
  AccountSettingName,
  AccountSettingDetail,
} from "./styles";

import avatarImage from "../../images/avatar.png";

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <Header colors={["#000000", "#1e222b"]}>
          <AvatarImage source={avatarImage} resizeMode="contain" />
          <UserName>@lcsmachado</UserName>
          <FullName>Lucas Carvalho Machado</FullName>
          <ProfileButton>
            <ProfileButtonText>Ver meu perfil</ProfileButtonText>
          </ProfileButton>
        </Header>
        <AccountSettings>
          <AccountSettingsTitle>Minha Conta</AccountSettingsTitle>
          <AccountSetting>
            <AccountSettingName>Meu PicPay</AccountSettingName>
            <AccountSettingDetail>@lcsmachado</AccountSettingDetail>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Meu Telefone</AccountSettingName>
            <AccountSettingDetail>(**) *****-9999</AccountSettingDetail>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Meu E-mail</AccountSettingName>
            <AccountSettingDetail>
              ***************@g****.com
            </AccountSettingDetail>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Dados Pessoais</AccountSettingName>
            <AccountSettingDetail>
              Nome, CPF e data de nascimento
            </AccountSettingDetail>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Conta Bancária</AccountSettingName>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Taxas e Limites</AccountSettingName>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Meus Endereços</AccountSettingName>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Meus Favoritos</AccountSettingName>
          </AccountSetting>
          <AccountSetting>
            <AccountSettingName>Atualizar Cadastro</AccountSettingName>
          </AccountSetting>
        </AccountSettings>
      </Container>
    </Wrapper>
  );
}
