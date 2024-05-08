import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Top = styled.View`
  flex-direction: row;
  margin-top: 16px;
  gap: 32px;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 999px;
`;

export const ProfileWrapper = styled.View``;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.font_size.xl};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const ProfileSection = styled.View`
  margin: 16px 0;
`;

export const WidgetWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 16px;
  margin: 24px 0px;
`;
export const Widget = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 8px;
  flex: 1;
  border-radius: 8px;

  align-items: center;
  shadow-color: #000;

  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Followers = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
`;
