import React, { useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

import { Image } from "./styles";

interface Props {
  images: {
    image: string;
  }[];
}
const { width: viewportWidth } = Dimensions.get("window");
const AnimatedImage = Animated.createAnimatedComponent(Image);

export const ListCompanyImage: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / viewportWidth);
    setActiveIndex(index);
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View style={{ width: viewportWidth * 0.93, borderRadius: 16 }}>
        <Image source={{ uri: item.image }} resizeMode="cover"></Image>
      </View>
    ),
    []
  );

  return (
    <View>
      <FlatList
        keyboardShouldPersistTaps={"always"}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        ref={scrollViewRef}
        data={images}
        renderItem={renderItem}
      />

      <View style={styles.indicatorContainer}>
        {images?.map((_, index) => (
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
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
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
