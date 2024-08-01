import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { width } = Dimensions.get("window");
export const PostImage = styled.Image`
  width: 100%;
  height: 244px;
`;

export const Image = styled.ImageBackground`
  height: 300px;
  border-radius: 16px;
  width: width;
  justify-content: center;
  align-items: center;
`;
