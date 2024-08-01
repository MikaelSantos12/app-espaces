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

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_500};
  color: ${({ theme }) => theme.colors.main};
`;
export const TabWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 24px;
`;
export const Tab = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, active }) =>
    active ? theme.colors.main : theme.colors.card};
  /* background-color: ${({ theme, active }) =>
    active ? theme.colors.main : theme.colors.card}; */
`;

export const TabTitle = styled.Text<{ active: boolean }>`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_500};
  color: ${({ theme, active }) =>
    active ? theme.colors.main : theme.colors.text};
`;
