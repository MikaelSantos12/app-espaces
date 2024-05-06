import { ScrollView } from "react-native";
import { EventItem } from "./EventItem";

export function EventsCarrousel() {
  return (
    <ScrollView horizontal contentContainerStyle={{ marginBottom: 48, gap: 8 }}>
      <EventItem isFirst />
      <EventItem />
      <EventItem />
    </ScrollView>
  );
}
