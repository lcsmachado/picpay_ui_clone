import React from "react";

import { Container, Option, Title, Img } from "./styles";

import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";

const items = [
  {
    key: String(Math.random()),
    title: "Pague Suas Contas Sem Sair De Casa!",
    color: "#172c4a",
    image: img8,
  },
  {
    key: String(Math.random()),
    title: "Pague Suas Contas",
    color: "#6a0159",
    image: img9,
  },
  {
    key: String(Math.random()),
    title: "Pague Suas Contas",
    color: "#4139c8",
    image: img10,
  },
  {
    key: String(Math.random()),
    title: "Pague Suas Contas",
    color: "#00ab4b",
    image: img11,
  },
  {
    key: String(Math.random()),
    title: "Pague Suas Contas",
    color: "#ba2f76",
    image: img12,
  },
]

export default function Tips() {
  return (
    <Container>
      {items.map((item)=>(
        <Option key={item.key} bgColor={item.color}>
          <Title>{item.title}</Title>
          <Img source={item.image} />
      </Option>
      ))}
    </Container>
  );
}
