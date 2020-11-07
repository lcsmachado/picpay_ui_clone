import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
  height: 300px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const UserName = styled.Text`
  margin-top: 1px;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const FullName = styled.Text`
  margin-top: 1px;
  color: rgba(255,255,255,0.5);
  font-size: 16px;
`;

export const ProfileButton = styled.TouchableOpacity`
  margin-top: 1px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font_weight: 200;
  color: #0db060;
`;

export const AccountSettings = styled.View`
  background: #1e222b;
`;

export const AccountSettingsTitle = styled.Text`
  padding: 16px;
  font-size: 14px;
  font_weight: 200;
  color: #0db060;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.4);
`;

export const AccountSetting = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.4);
`;

export const AccountSettingName = styled.Text`
  font-size: 16px;
  font_weight: bold;
  color: #FFF;
`;

export const AccountSettingDetail = styled.Text`
  font-size: 14px;
  font_weight: 500;
  color: rgba(255,255,255,0.8);
`;
