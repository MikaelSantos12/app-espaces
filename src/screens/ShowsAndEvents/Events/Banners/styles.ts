import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Banner = styled.TouchableOpacity<{ full?: boolean }>`
  width: ${({ full }) => (full ? "100%" : "260px")};
  height: ${({ full }) => (full ? "360px" : "260px")};
  border-radius: 8px;
  margin-right: 8px;
`;

export const Cover = styled.ImageBackground`
  display: flex;
  border-radius: px;
`;

export const StyledLinearGradient = styled(LinearGradient)<{ full?: boolean }>`
  width: ${({ full }) => (full ? "100%" : "260px")};
  height: ${({ full }) => (full ? "360px" : "260px")};
  display: flex;
  padding: 16px;
  border-radius: 8px;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: ${({ theme }) => theme.font.nunito_700};
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 999px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Company = styled.View`
  gap: 8px;
`;
