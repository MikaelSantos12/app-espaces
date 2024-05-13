import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

export const Column = styled.View`
  flex-direction: column;
  flex: 1;
`

export const DateArea = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
`

export const TagsArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  margin-top: 8px;
`

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 8px;
  padding: 4px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text<{ color?: string; size?: string, mt?: string }>`
  font-size: ${({ size }) => size || "10px"};
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.font.nunito_400};
  margin-top: ${({ mt }) => mt ? mt : '0px'};
`;

export const Bullet = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.main};
`