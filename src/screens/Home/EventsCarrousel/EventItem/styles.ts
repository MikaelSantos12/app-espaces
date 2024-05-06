import styled from "styled-components/native";

export const Container = styled.View<{ isFirst?: boolean }>`
  width: ${({ isFirst, theme }) => (isFirst ? "90px" : "112px")};
  height: 88px;
  border-radius: 8px;
  background-color: ${({ isFirst, theme }) =>
    isFirst ? theme.colors.main : "red"};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme }) => theme.colors.secondary};

  text-align: center;
`;
