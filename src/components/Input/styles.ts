import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputWrapper = styled.View`
  position: relative;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  height: 48px;
  border: 1px solid #ccc;
`;

export const StyledInput = styled(TextInput)`
  width: 100%;
  padding: 12px 40px 12px 40px;
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;

  align-items: center;
`;
