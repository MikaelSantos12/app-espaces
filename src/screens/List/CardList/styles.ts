import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Top = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 90px;
`;
export const CoverPhoto = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const ProfilePic = styled.Image`
  width: 64px;
  height: 64px;
  position: absolute;

  border-radius: 999px;
  align-items: center;
`;
export const Main = styled.View`
  padding: 8px;
  gap: 8px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.nunito_700};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Highlight = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.inter_400};
  font-weight: bold;
`;
export const TextWrapper = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;
