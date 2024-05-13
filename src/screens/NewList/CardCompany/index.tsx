import { List, PencilSimpleLine, X } from "phosphor-react-native";
import React from "react";
import { useTheme } from "styled-components/native";

import {
  Action,
  Actions,
  CompanyPhoto,
  Container,
  Info,
  Title,
} from "./styles";

interface Props {
  data: {
    photo: string;
    name: string;
  };

  drag?: () => void; // Optional
}

export function CardCompany({ data, drag }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Info>
        <CompanyPhoto source={{ uri: data.photo }} />
        <Title>{data.name}</Title>
      </Info>
      <Actions>
        <Action>
          <PencilSimpleLine color={theme.colors.text} weight="fill" size={18} />
        </Action>
        <Action>
          <X color={theme.colors.text} size={18} />
        </Action>

        <Action onLongPress={drag}>
          <List color={theme.colors.text} weight="fill" size={18} />
        </Action>
      </Actions>
    </Container>
  );
}
