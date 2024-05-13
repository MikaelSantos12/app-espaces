import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
`;

export const UserPhoto = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 99px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const User = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const Comment = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;
