import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Column = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.nunito_700};
`;

export const Row = styled.View<{ justify?: string }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
  gap: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.inter_400};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
`;

export const Separator = styled.View`
  margin: 8px 0;
`;
