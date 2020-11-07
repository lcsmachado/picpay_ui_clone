import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.ScrollView`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Performance = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 24px;
`;

export const Actions = styled.View`
  margin-top: 40px;
  flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  padding: 20px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  height: 60px;
  padding: 0 16px;
  background: #1c1c1e;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  padding: 0 16px;
  margin-top: 24px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails= styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  color: rgba(255,255,255,0.8);
  font-size: 14px;
`;

export const CardImage = styled.Image`
  width: 60px;
`;

export const AddCardContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const AddCardTitle = styled.Text`
  margin-left: 12px;
  font-size: 18px;
  color: #0DB060;
`;

export const UseTicketButton = styled.TouchableOpacity`
  margin: 24px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UseTicketTitle = styled.Text`
  margin-left: 12px;
  color: #0db060;
  font-size: 16px;
  font-weight: bold;
  text-decoration-line: underline;
`;
