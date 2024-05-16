import { BottomSheetView } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: red;
  justify-content: center;
`;

export const Content = styled(BottomSheetView)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.nunito_700};
  font-size: ${({ theme }) => theme.font_size.xl};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.font.inter_400};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const Action = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`;

export const Row = styled.View`
  margin: 24px 0;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
`;
