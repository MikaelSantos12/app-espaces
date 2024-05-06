import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
`;
export const PhotoContainer = styled.View`
  flex-direction: row;
  position: relative;
  width: 80px;
`;
export const CompanyPhoto = styled.Image`
  position: absolute;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 99px;
`;
export const UserPhoto = styled.Image`
  background-color: red;

  width: 40px;
  height: 40px;
  border-radius: 99px;
`;

export const Rating = styled.View`
  flex-direction: row;
  margin: 8px 0px;
  justify-content: space-between;
  align-items: center;
`;
export const Highlight = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.main};
`;
