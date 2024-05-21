import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { IconProps } from "phosphor-react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  Icon: React.FC<IconProps>;
}

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
`;

const CustomButton: React.FC<ButtonProps> = ({ title, Icon }) => {
  return (
    <ButtonContainer activeOpacity={0.6}>
      <Icon size={24} weight="bold" color="#fff" />
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
