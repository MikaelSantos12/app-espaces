import { Ratings } from "@/components/Ratings";
import { ChatCircle, Heart, PaperPlaneTilt } from "phosphor-react-native";
import { Actions } from "./Actions";
import * as S from "./styles";

export function Publications() {
  return (
    <S.Container>
      <S.Header>
        <S.PhotoContainer>
          <S.CompanyPhoto
            source={{
              uri: "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <S.UserPhoto
            source={{
              uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </S.PhotoContainer>
        <S.Title>
          <S.Highlight>@usuario</S.Highlight>
          {"\n"}
          em <S.Highlight>estabecilmento</S.Highlight>
        </S.Title>
      </S.Header>
      <S.Rating>
        <S.Title>Duas horas atrás</S.Title>
        <Ratings rating={9.5} />
      </S.Rating>
      <S.PostImage
        source={{
          uri: "https://images.pexels.com/photos/20107590/pexels-photo-20107590/free-photo-of-cidade-meio-urbano-estrada-via.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <S.ActionsContainer>
        <Actions count={"200"} icon={<Heart size={28} weight="thin" />} />
        <Actions count={"200"} icon={<ChatCircle size={28} weight="thin" />} />
        <Actions
          count={"200"}
          icon={<PaperPlaneTilt size={28} weight="thin" />}
        />
      </S.ActionsContainer>
      <S.Descripton>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        mauris tristique, convallis justo eu, aliquet nibh. Aenean id blandit
        risus. Vivamus suscipit et risus eget placerat. Nullam tempus massa
        vitae laoreet varius. Cras non pellentesque dui. Morbi auctor erat ut
        orci ultricies consectetur. Mauris eu faucibus sapien. Integer
        sollicitudin vulputate lorem vitae scelerisque. Phasellus consectetur
        elementum diam quis molestie. Vivamus congue eu ipsum ut faucibus.
      </S.Descripton>
    </S.Container>
  );
}
