import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const TagWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;
