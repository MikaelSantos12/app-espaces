import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  margin: 24px 0 0 0;
  text-align: center;
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
`