import React from "react"
import * as C from '../styles'
import { BookmarkSimple, Envelope, Tag, TextOutdent, Truck } from "phosphor-react-native";

type GridButtonsProps = {
  menuLink: string;
  reserveLink: string;
  deliveryLink: string;
};

const GridButtons = ({ data }: { data: GridButtonsProps }) => {
  return (
    <React.Fragment>
      <C.Row>
        <C.CallToAction>
          <C.Text>200 seguidores</C.Text>
        </C.CallToAction>
        <C.CallToAction>
          <C.Text>200 seguindo</C.Text>
        </C.CallToAction>
      </C.Row>
      <C.Row>
        <C.CallToAction>
          <C.Text>Avaliar</C.Text>
        </C.CallToAction>
        <C.CallToAction>
          <BookmarkSimple weight="fill" />
          <C.Text>Adicionar a lista</C.Text>
        </C.CallToAction>
      </C.Row>
      <C.Row>
        <C.CallToAction>
          <C.Text>Listas com este espaço</C.Text>
        </C.CallToAction>
      </C.Row>
      <C.Row>
        <C.CallToAction onPress={() => alert(data.menuLink)}>
          <TextOutdent weight="fill" />
          <C.Text>Menu</C.Text>
        </C.CallToAction>
        <C.CallToAction>
          <Envelope weight="fill" />
          <C.Text>Reservas</C.Text>
        </C.CallToAction>
      </C.Row>
      <C.Row>
        <C.CallToAction>
          <Truck weight="fill" />
          <C.Text>Delivery</C.Text>
        </C.CallToAction>
        <C.CallToAction>
          <Tag weight="fill" />
          <C.Text>Etiquetas</C.Text>
        </C.CallToAction>
      </C.Row>
    </React.Fragment>
  );
}

export default GridButtons