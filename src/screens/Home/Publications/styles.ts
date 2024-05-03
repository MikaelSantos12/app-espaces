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
export const UserPhoto = styled.View`
  background-color: blue;
  position: absolute;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 99px;
`;
export const CompanyPhoto = styled.View`
  background-color: red;

  width: 40px;
  height: 40px;
  border-radius: 99px;
`;
