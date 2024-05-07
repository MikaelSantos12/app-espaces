import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputWrapper = styled.View`
  position: relative;
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
`;

export const StyledInput = styled(TextInput)`
  padding: 10px 40px 10px 40px; /* Ajuste o padding conforme necessário */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const IconWrapper = styled.View`
  position: absolute;
  left: 10px;

  align-items: center;
`;
