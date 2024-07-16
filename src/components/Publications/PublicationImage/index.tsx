import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useLikeContext } from "@/context/LikeContext";
import { Post } from "@/dtos/PostDTO";
import { api } from "@/services/api";
import { Image } from "./styles";

interface Props {
  data: Post;
}
const { width: viewportWidth } = Dimensions.get("window");
const AnimatedImage = Animated.createAnimatedComponent(Image);

export const PublicationImage: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<FlatList>(null);
  const { isLiked, likePost } = useLikeContext();

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / viewportWidth);
    setActiveIndex(index);
  };

  const scale = useSharedValue(0);
  const rotate = useSharedValue(0);

  const doubleTapRef = useRef(null);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: Math.max(scale.value, 0) },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {},
  });

  const onDoubleTap = useCallback(
    (image: { createdAt: Date; id: string; image: string; postId: string }) => {
      likePost();
      if (!isLiked) {
        api.feed.post(`post/like/${image.postId}`);
      }

      scale.value = withSpring(1, undefined, (isFinished) => {
        if (isFinished) {
          rotate.value = withTiming(-20, undefined, () => {
            rotate.value = withTiming(20, undefined, () => {
              rotate.value = withTiming(0, undefined, () => {});
            });
          });
          scale.value = withDelay(500, withSpring(0));
        }
      });
    },
    [mutation]
  );

  const renderItem = useCallback(
    ({
      item,
    }: {
      item: { id: string; image: string; createdAt: Date; postId: string };
    }) => (
      <TapGestureHandler
        key={item.id}
        maxDelayMs={250}
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={() => onDoubleTap(item)}
      >
        <Animated.View style={{ width: viewportWidth * 0.93 }}>
          <Image source={{ uri: item.image }} resizeMode="cover">
            <AnimatedImage
              source={require("@/assets/heart.png")}
              style={[
                styles.image,
                {
                  shadowOffset: { width: 0, height: 20 },
                  shadowOpacity: 0.35,
                  shadowRadius: 35,
                },
                rStyle,
              ]}
            />
          </Image>
        </Animated.View>
      </TapGestureHandler>
    ),
    [onDoubleTap]
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
        data={data.postImages}
        renderItem={renderItem}
      />

      <View style={styles.indicatorContainer}>
        {data.postImages?.map((_, index) => (
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
