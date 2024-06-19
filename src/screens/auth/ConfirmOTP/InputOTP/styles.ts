import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const OTPContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OTPInput = styled.TextInput<{ isFocused: boolean }>`
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main : "#718096"};
  border-style: solid;
  margin: 5px;
  border-radius: 8px;
  text-align: center;
`;

export const SubmitButton = styled.Button``;
