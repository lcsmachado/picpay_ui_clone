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
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.4);
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font_weight: bold;
  color: #FFF;
`;

export const SettingsButton = styled.TouchableOpacity`
`;
export const SettingsButtonTitle = styled.Text`
  font-size: 16px;
  font_weight: bold;
  color: #0db060;
`;

export const NotificationsContainer = styled.View`
  padding: 0 8px;
`;

export const Notification = styled.TouchableOpacity`
  padding: 4px 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.4);
`;

export const NotificationDescription = styled.Text`
  font-size: 16px;
  font_weight: 500;
  color: #FFF;
`;

export const NotificationDetails = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font_weight: 200;
  color: rgba(255,255,255,0.8);
`;
