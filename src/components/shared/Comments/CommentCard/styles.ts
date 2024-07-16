import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
`;

export const UserPhoto = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 99px;
`;
export const Content = styled.ScrollView`
  padding: 16px;
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

export const User = styled.View`
  flex-direction: row;
  gap: 8px;
  flex: 1;
  align-items: flex-start;
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
export const Date = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.sm};
  color: ${({ theme }) => theme.colors.text};
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;
export const SwipeableRemove = styled.View`
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 8px;
  width: 70px;
  justify-content: center;
  align-items: center;
`;
