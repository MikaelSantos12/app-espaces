import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
`;
export const ListImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 999px;
`;

export const UserWrapper = styled.View``;
export const ListWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const ListName = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font.nunito_700};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Map = styled.TouchableOpacity`
  margin: 16px 0;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_700};
`;

export const Gap = styled.View`
  margin-bottom: 12px;
`;
