import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const TagButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 8px;

  margin-top: 18px;

  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.lg};
  font-family: ${({ theme }) => theme.font.nunito_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const PhotosWrapper = styled(ScrollView)`
  flex-direction: row;
  gap: 8px;
  margin: 16px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const RatingContainer = styled.View`
  margin: 16px 0;
`;

export const Evaluate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const SliderWrapper = styled.View`
  flex: 1;
  border-radius: 8px;
  position: relative;
  margin-left: 8px; /* Add margin to separate the LinearGradient and Slider */
`;

export const Rating = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 999px;
  width: 48px;
  height: 48px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
