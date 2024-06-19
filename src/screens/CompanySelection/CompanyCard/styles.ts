import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.card};

  gap: 16px;
`;

export const CompanyImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const TextWrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};

  color: ${({ theme }) => theme.colors.main};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;
