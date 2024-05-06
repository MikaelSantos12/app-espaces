import { ChatCircle, Heart, PaperPlaneTilt } from "phosphor-react-native";
import { Actions } from "../Actions";
import * as S from "./styles";
export function PublicationActions({}) {
  return (
    <S.ActionsContainer>
      <Actions count={"200"} icon={<Heart size={28} weight="thin" />} />
      <Actions count={"200"} icon={<ChatCircle size={28} weight="thin" />} />
      <Actions
        count={"200"}
        icon={<PaperPlaneTilt size={28} weight="thin" />}
      />
    </S.ActionsContainer>
  );
}
