import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6882BB;
  margin: 24px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
export const Description = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: rgba(255,255,255, 0.8);
`;