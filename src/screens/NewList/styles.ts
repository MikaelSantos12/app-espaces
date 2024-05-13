import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const ListInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const SearchContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
  gap: 32px;
  flex: 1;
`;

export const SwipeableRemove = styled.View`
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 8px;
  width: 70px;
  justify-content: center;
  align-items: center;
`;
