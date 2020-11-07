import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Wrapper = styled.SafeAreaView`
  backgroundColor: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  text-align: center;
`;

export const Balance = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;