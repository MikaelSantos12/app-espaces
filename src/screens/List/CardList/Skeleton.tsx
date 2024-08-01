// src/components/Publications/SkeletonPublication.js
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions, View } from "react-native";
const { width, height } = Dimensions.get("window");
export function Skeleton() {
  return (
    <View style={{ marginTop: 16 }}>
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="8" ry="8" width="48%" height="180" />
        <Rect x="50%" y="0" rx="8" ry="8" width="48%" height="180" />
        <Rect x="50%" y="190" rx="8" ry="8" width="48%" height="180" />
        <Rect x="0" y="190" rx="8" ry="8" width="48%" height="180" />
        <Rect x="50%" y="380" rx="8" ry="8" width="48%" height="180" />
        <Rect x="0" y="380" rx="8" ry="8" width="48%" height="180" />
      </ContentLoader>
    </View>
  );
}
