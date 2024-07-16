import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_500};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

export const Tag = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 2px 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const TagName = styled.Text`
  color: #fff;
`;

export const UserCard = styled.View`
  width: 180px;
  height: 280px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserPhotoWrapper = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 9999px;

  justify-content: center;
  align-items: center;
`;
export const UserPic = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.lg};
  text-align: center;
`;
export const UserSection = styled.View``;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  text-align: center;
`;
export const UserRow = styled.View`
  flex-direction: row;
`;
