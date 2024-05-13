import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'

export const Banner = styled.TouchableOpacity`
  width: 260px;
  height: 360px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Cover = styled.ImageBackground`
  display: flex;
  border-radius: px;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  width: 260px;
  height: 360px;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.nunito_700};
`;