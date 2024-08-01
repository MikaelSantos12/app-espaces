import { Button } from "@/components/Button";
import { TagDTO } from "@/dtos/TagDTO";
import { useCuisines } from "@/hooks/useCuisines";
import { useTags } from "@/hooks/useTags";
import { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Subtitle,
  Tab,
  TabTitle,
  TabWrapper,
  TagWrapper,
} from "./styles";
import { Tag } from "./Tag";

interface Props {
  selectedTags: string[];
  setSelectedTags: (tag: any) => void;
  selectedCuisines: string[];
  setSelectedCuisines: (tag: any) => void;
}

export function TagsBottomSheet({
  selectedTags,
  setSelectedTags,
  selectedCuisines,
  setSelectedCuisines,
}: Props) {
  const [activeTab, setActiveTab] = useState<"tags" | "cuisines">("tags");
  const { data } = useTags();
  const { data: cuisines } = useCuisines();

  const handleTagPress = (tag: string) => {
    setSelectedTags((prev: string[]) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags((prev: string[]) => prev.filter((t) => t !== tag));
  };

  const handleTag = (tag: "tags" | "cuisines") => {
    setActiveTab(tag);
  };
  const handleCuisinesPress = (tag: string) => {
    setSelectedCuisines((prev: string[]) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCuisinesRemove = (tag: string) => {
    setSelectedCuisines((prev: string[]) => prev.filter((t) => t !== tag));
  };
  return (
    <Container>
      <Content contentContainerStyle={{ paddingBottom: 48 }}>
        <TabWrapper>
          <Tab active={activeTab === "tags"} onPress={() => handleTag("tags")}>
            <TabTitle active={activeTab === "tags"}>Tags</TabTitle>
          </Tab>
          <Tab
            active={activeTab === "cuisines"}
            onPress={() => handleTag("cuisines")}
          >
            <TabTitle active={activeTab === "cuisines"}>
              Tipos de cozinhas
            </TabTitle>
          </Tab>
        </TabWrapper>

        {activeTab === "tags" && (
          <>
            {data?.map((category: any, i) => (
              <View key={i}>
                <Subtitle>{category.group_name}</Subtitle>
                <TagWrapper key={category.group_name}>
                  {category.tags.map((tag: TagDTO) => (
                    <Tag
                      key={tag.id}
                      title={tag.name}
                      isSelected={selectedTags.includes(tag.id)}
                      onPress={() => handleTagPress(tag.id)}
                      onRemove={() => handleTagRemove(tag.id)}
                    />
                  ))}
                </TagWrapper>
              </View>
            ))}
          </>
        )}
        {activeTab === "cuisines" && (
          <TagWrapper>
            {cuisines.map((tag: TagDTO) => (
              <Tag
                key={tag.id}
                title={tag.description}
                isSelected={selectedCuisines.includes(tag.id)}
                onPress={() => handleCuisinesPress(tag.id)}
                onRemove={() => handleCuisinesRemove(tag.id)}
              />
            ))}
          </TagWrapper>
        )}

        <Button title="Continuar" size="full" />
      </Content>
    </Container>
  );
}
