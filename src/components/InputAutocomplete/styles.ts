import styled from "styled-components/native";

export const Wrapper = styled.View`
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme?.colors?.text};
  z-index: 2;
  background-color: ${({ theme }) => theme?.colors?.background};
`;

export const RenderRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const LocationText = styled.Text`
  font-size: 14px;
  letter-spacing: -0.2px;
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme }) => theme?.colors?.text};
`;

export const WrapperIcon = styled.View`
  padding: 12px;
  background-color: ${({ theme }) => theme?.colors?.card};
  border-radius: 8px;
`;

export const ClearButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 28px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.colors?.background};
  z-index: 3;
`;
