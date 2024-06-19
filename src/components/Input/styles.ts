import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";
interface Props {
  isTextArea?: boolean | undefined;
  isFocused?: boolean | undefined;
  hasIcon?: boolean | undefined;
}
export const Container = styled.View``;
export const InputWrapper = styled.View<Props>`
  position: relative;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding-left: 18px;
  height: ${({ isTextArea }) => (isTextArea ? "128px" : "48px")};
  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.main : theme.colors.card};
  border-width: 1px;
`;

export const StyledInput = styled(TextInput)<Props>`
  height: 48px;
  width: 100%;
  padding: 12px 40px 12px 12px;
  padding-left: ${({ hasIcon }) => (hasIcon ? "40px" : "12px")};
  height: ${({ isTextArea }) => (isTextArea ? "128px" : "48px")};
`;
export const MaskStyledInput = styled(TextInputMask)<Props>`
  height: 48px;
  width: 100%;
  padding: 12px 40px 12px 12px;
  padding-left: ${({ hasIcon }) => (hasIcon ? "40px" : "12px")};
  height: ${({ isTextArea }) => (isTextArea ? "128px" : "48px")};
`;
export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;

  align-items: center;
`;

export const Error = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.danger};
`;
