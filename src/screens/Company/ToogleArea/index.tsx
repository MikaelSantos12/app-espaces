import React, { useState } from "react";
import { CalendarBlank, Lightning } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { Switch } from "react-native";
import * as C from "../styles";
import Event from "./Event";

export type ToggleAreaProps = {
  id: number;
  cover: string;
  space: string;
  date: string;
  hour: string;
  title: string;
  tags: string[];
};

const ToggleArea = ({ data }: { data: ToggleAreaProps[] }) => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const eventsToDisplay = isEnabled ? data : [data[0]];

  return (
    <React.Fragment>
      <C.Row>
        <Lightning weight="fill" />
        <C.Heading>Próximos eventos</C.Heading>
      </C.Row>
      <C.FullRow>
        <C.Row>
          <CalendarBlank weight="fill" />
          <C.Text>Sex, 05/04</C.Text>
        </C.Row>
        <C.EventToggle>
          <C.Text>Todos os Eventos</C.Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? theme.colors.main : theme.colors.secondary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </C.EventToggle>
      </C.FullRow>
      <C.Column>
        {eventsToDisplay.map((item) => (
          <Event key={item.id} data={item} />
        ))}
      </C.Column>
    </React.Fragment>
  );
};

export default ToggleArea;
