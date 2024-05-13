import React from "react";
import * as C from "./styles";
import { Button } from "@/components/Button";
import { Clock, House, NewspaperClipping } from "phosphor-react-native";
import { useTheme } from "styled-components";

type BioProps = {
  name: string;
  cover: string;
  highlightedSocialNetwork: string;
  address: string;
  description: string;
  openHours: any[];
  cuisineTypes: any[];
};

const Bio = ({ data }: { data: BioProps }) => {
  const theme = useTheme();
  return (
    <>
      <C.Container>
        <C.Avatar
          source={{
            uri: data.cover,
          }}
        />
        <C.Row>
          <C.Column>
            <C.Name>{data.name}</C.Name>
            <C.Description>{data.highlightedSocialNetwork}</C.Description>
          </C.Column>
          <Button size="sm" title="Seguir" />
        </C.Row>
      </C.Container>
      <C.Row justify="flex-start">
        <House color={theme.colors.main} weight={"fill"} />
        <C.Text>{data.address}</C.Text>
      </C.Row>
      <C.Row justify="flex-start">
        <Clock color={theme.colors.main} weight={"fill"} />
        <C.Text>Horário de funcionamento</C.Text>
      </C.Row>
      <C.Row justify="flex-start">
        <NewspaperClipping color={theme.colors.main} weight={"fill"} />
        <C.Text>Culinária</C.Text>
      </C.Row>
      <C.Separator />
      <C.Row justify="flex-start">
        <C.Text>{data.description}</C.Text>
      </C.Row>
    </>
  );
};

export default Bio;
