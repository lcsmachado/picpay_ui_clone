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

export const HeaderTitle = styled.Text`
  color: #FFF
  font-size: 32px;
  font-weight: 500;
`;

export const TransactionsContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "space-between"
  },
}))`
  margin-top: 25px;
  flex-direction: row;
`;

export const Transaction = styled.TouchableOpacity`
  background: #1e222b;
  height: 100px;
  width: 120px;
  margin-right: 8px;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  justify-content: space-between;
`;

export const TransactionTitle = styled.Text`
  color: #FFF
  font-size: 14px;
`;

export const Stores = styled.TouchableOpacity`
  margin-top: 25px;
  background: #1e222b;
  height: 80px;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const StoresDetails = styled.View`
  margin-left: 10px;
`;

export const StoresTitle = styled.Text`
  color: #FFF
  font-size: 16px;
  font-weight: bold;
`;

export const StoresDescription = styled.Text`
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  font-weight: bold;
`;

export const NearestLocations = styled.TouchableOpacity`
  margin-top: 25px;
  background: #1e222b;
  height: 80px;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const NearestLocationsDetails = styled.View`
  margin-left: 10px;
`;

export const NearestLocationsTitle = styled.Text`
  color: #FFF
  font-size: 16px;
  font-weight: bold;
`;

export const NearestLocationsDescription = styled.Text`
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  font-weight: bold;
`;
