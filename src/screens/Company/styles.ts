import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 0 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
  height: 100%;
  margin-top: 10px;
`

export const EventToggle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const Column = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const FullRow = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.font.nunito_400};
`;

export const CallToAction = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.buttons};
  flex: 1;
  flex-direction: row;
  gap: 8px;
  min-height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

export const Separator = styled.View`
  margin: 8px 0;
`

export const Heading = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.nunito_700};
`;