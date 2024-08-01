import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
  padding: 12px;
  flex-direction: row;
  width: 100%;
  height: 160px;
  gap: 16px;
`;

export const CompanyImage = styled.Image`
  height: 100%;
  width: 35%;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_700};
  color: ${({ theme }) => theme.colors.main};
`;
export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.font_size.sm};
  font-family: ${({ theme }) => theme.font.nunito_500};
  color: #a1a1a1;
`;

export const Wrapper = styled.View`
  gap: 8px;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagsArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.View`
  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.main};
`;

export const TagText = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_500};
  color: ${({ theme }) => theme.colors.main};
`;
