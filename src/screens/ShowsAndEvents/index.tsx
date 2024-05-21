import { Header } from "@/components/Header";
import { useState } from "react";
import { Events } from "./Events";
import { Shows } from "./Shows";
import { Tab } from "./Tab";
import { Container, Content, TabWrapper } from "./styles";

export function ShowsAndEvents() {
  const [activeTab, setActiveTab] = useState<"shows" | "events">("shows");
  return (
    <Container>
      <Header title="Shows ao vivo" />
      <Content>
        <TabWrapper>
          <Tab
            title={"Shows ao vivo"}
            onPress={() => setActiveTab("shows")}
            isActive={activeTab === "shows"}
          />
          <Tab
            title={"Eventos divulgados"}
            isActive={activeTab === "events"}
            onPress={() => setActiveTab("events")}
          />
        </TabWrapper>
        {activeTab === "shows" ? <Shows /> : <Events />}
      </Content>
    </Container>
  );
}
