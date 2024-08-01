// src/components/Publications/SkeletonPublication.js
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions, View } from "react-native";
const { width, height } = Dimensions.get("window");
export function Skeleton() {
  return (
    <View style={{}}>
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="88" ry="88" width="80" height="80" />

        <Rect x="100" y="8" rx="3" ry="3" width="50%" height="10" />
        <Rect x="100" y="30" rx="3" ry="3" width="50%" height="6" />
        <Rect x="100" y="42" rx="3" ry="3" width="52" height="6" />
        <Rect x="0" y="90" rx="8" ry="8" width="180" height="80" />
        <Rect x="0" y="180" rx="8" ry="8" width="100%" height="10" />
        <Rect x="0" y="200" rx="8" ry="8" width="90%" height="10" />
        <Rect x="0" y="220" rx="8" ry="8" width="80%" height="10" />
        <Rect x="0" y="240" rx="8" ry="8" width="100%" height="10" />

        <Rect x="0" y="280" rx="8" ry="8" width="95%" height="400" />
      </ContentLoader>
    </View>
  );
}
