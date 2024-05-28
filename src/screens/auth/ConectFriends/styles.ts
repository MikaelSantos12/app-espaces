import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 8px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.xl};
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`

export const Tag = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 2px 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.main};
`

export const TagName = styled.Text`
  color: #fff;
`

export const UserCard = styled.View`
  width: 49%;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserPic = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const UserName = styled.Text``;

export const UserRow = styled.View`
  gap: 8px;
  flex-direction: row;
`