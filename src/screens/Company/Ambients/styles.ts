import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  margin-right: 8px;
  display: flex;
  border-radius: 8px;
`;

export const BgGradient = styled(LinearGradient)`
  width: 280px;
  height: 360px;
  display: flex;
  border-radius: 8px;
  justify-content: flex-end;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: -1;
`;

export const Image = styled.Image`
  width: 50%;
  height: 50%;
`;

export const Text = styled.Text`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
`;
