import React, { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

interface Props {
  postImages: {
    createdAt: Date;

    id: string;
    image: string;
    postId: string;
  }[];
}

const { width: viewportWidth } = Dimensions.get("window");

export function PublicationImage({ postImages }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / viewportWidth);
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        ref={scrollViewRef}
        scrollEventThrottle={16}
      >
        {postImages?.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item.image }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {postImages?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: viewportWidth,
    height: 300, // Ajuste conforme necessário
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#000",
  },
});
