import React from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@lcsmachado</Bold>!
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Lucas Carvalho</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>
            <Divider />
            <Feather name="lock" color="#FFF" />
            <Date>há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF"/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <MaterialCommunityIcons name="heart-outline" size={14} color="#FFF"/>
              <OptionLabel>1</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
