import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 4px;
`;

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.font.subtitle};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
`;
