import styled from "styled-components/native";

export const Descripton = styled.Text`
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.text};
`;
