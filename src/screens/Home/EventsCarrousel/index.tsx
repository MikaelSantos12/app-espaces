import { faker } from "@faker-js/faker";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { EventItem } from "./EventItem";

export function EventsCarrousel() {
  const data = [
    {
      id: faker.string.uuid(),
      photo: faker.image.url(),
      title: "Próximos Eventos",
    },
    {
      id: faker.string.uuid(),
      photo: faker.image.url(),
      title: "Próximos Eventos",
    },
    {
      id: faker.string.uuid(),
      photo: faker.image.url(),
      title: "Shows",
    },
  ];
  const renderItem = useCallback(({ item, i }) => {
    return <EventItem isFirst={i == 0} data={item} />;
  }, []);
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item, index }) => renderItem({ item, i: index })}
      contentContainerStyle={{
        marginBottom: 16,
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
