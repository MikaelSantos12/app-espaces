import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
`;

export const Info = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  flex: 1;
`;

export const CompanyPhoto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const Action = styled.TouchableOpacity``;
export const TooltipText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;
