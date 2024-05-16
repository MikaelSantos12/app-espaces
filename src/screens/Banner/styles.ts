import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.ScrollView`
  padding: 16px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 360px;
  border-radius: 16px;
`;

export const CompanyPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 99px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
  flex: 1;
  align-items: center;
`;

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 999px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
`;
export const FriendsPhotos = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 999px;
`;

export const Text = styled.Text<{
  color?: string;
  size?: string;
  mt?: string;
  font?: string;
}>`
  font-size: ${({ theme, size }) => size || theme.font_size.md};
  color: ${({ color, theme }) => color || theme.colors.main};
  font-family: ${({ theme, font }) => font || theme.font.nunito_400};
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
`;

export const TagsArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
`;
export const CompanyWrapper = styled.View`
  gap: 8px;
  flex: 1;
`;
export const Map = styled.TouchableOpacity`
  margin: 16px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Date = styled.View``;

export const DateWrapper = styled.View`
  flex-direction: row;

  flex: 1;
  gap: 16px;
  justify-content: space-between;
`;

export const PhotosArea = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 30%;
`;

export const ButtonWrapper = styled.View`
  margin-top: 32px;
  flex-direction: column;
  gap: 8px;
`;
