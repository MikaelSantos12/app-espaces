import { Button } from "@/components/Button";
import { TagDTO } from "@/dtos/TagDTO";
import { useTags } from "@/hooks/useTags";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, TagWrapper, Title } from "./styles";
import { Tag } from "./Tag";

export function Tags({ route }) {
  const { data } = useTags();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigation = useNavigation();
  const handleTagPress = (tag: string) => {
    console.log(tag);
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };
  const handlePress = () => {
    navigation.navigate("newPublication", { ...route.params, selectedTags });
  };
  return (
    <Container>
      <Content contentContainerStyle={{ paddingBottom: 48 }}>
        <Title>Tags</Title>
        <TagWrapper>
          {data?.map((item: TagDTO) => (
            <Tag
              key={item.description}
              title={item.description}
              isSelected={selectedTags.includes(item.id)}
              onPress={() => handleTagPress(item.id)}
              onRemove={() => handleTagRemove(item.id)}
            />
          ))}
        </TagWrapper>
        <Button title="Continuar" size="full" onPress={handlePress} />
      </Content>
    </Container>
  );
}
