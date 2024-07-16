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
  text-align: center;
`;

export const Main = styled.View`
  width: 100%;
  margin-top: 32px;
  gap: 16px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.inter_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const IconWrapper = styled.View`
  align-items: center;
`;
export const ProfilePhoto = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 99px;
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.buttons};

  background-color: ${({ theme }) => theme.colors.background};
`;
export const ProfileContainer = styled.View`
  position: relative;

  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const ProfilePic = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 999px;
`;
export const AddPhoto = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10;
  bottom: 10;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const AddProfilePhoto = styled.TouchableOpacity`
  position: absolute;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.background};
  right: -16px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.buttons};
`;
export const EditPhoto = styled.View`
  position: absolute;

  flex-direction: row;
`;
export const IconContainer = styled.TouchableOpacity`
  border-radius: 99px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8px;
`;
