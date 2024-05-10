import { TextInput } from "react-native";
import styled from "styled-components/native";

interface Props {
  isTextArea?: boolean | undefined;
}

export const InputWrapper = styled.View<Props>`
  position: relative;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  height: ${({ isTextArea }) => (isTextArea ? "128px" : "48px")};
`;

export const StyledInput = styled(TextInput)<Props>`
  width: 100%;
  height: 48px;
  padding: 12px 40px 12px 40px;
  height: ${({ isTextArea }) => (isTextArea ? "128px" : "48px")};
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;

  align-items: center;
`;
