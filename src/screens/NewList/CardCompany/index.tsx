import { List, PencilSimpleLine } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";

import { Company } from "@/dtos/CompanieDTO";
import { showTooltip } from "@/storage/listStorage";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import {
  Action,
  Actions,
  CompanyPhoto,
  Container,
  Info,
  Title,
  TooltipText,
} from "./styles";

interface Props {
  data: Company;

  drag?: () => void;
  isFirstItem?: boolean;
}

export function CardCompany({ data, drag, isFirstItem }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();
  const handleEdit = () => {
    navigation.navigate("companyInList", { company: data });
  };
  useEffect(() => {
    async function handleTooltip() {
      const res = await showTooltip();
      setIsVisible(res);
    }
    handleTooltip();
  }, []);
  console.log(isFirstItem);
  return (
    <Container>
      <Info>
        <CompanyPhoto source={{ uri: data.PHOTO }} />
        <Title numberOfLines={1}>{data.NAME}</Title>
      </Info>
      <Actions>
        <Tooltip
          isVisible={isVisible && isFirstItem}
          content={
            <TooltipText>
              Você pode personalizar cada estabelecimento com fotos e uma
              descrição. Toque aqui para adicionar!
            </TooltipText>
          }
          placement="top"
          onClose={() => setIsVisible(false)}
        >
          <View>
            <Action onPress={handleEdit}>
              <PencilSimpleLine
                color={theme.colors.text}
                weight="fill"
                size={18}
              />
            </Action>
          </View>
        </Tooltip>

        <Action onLongPress={drag}>
          <List color={theme.colors.text} weight="fill" size={18} />
        </Action>
      </Actions>
    </Container>
  );
}
