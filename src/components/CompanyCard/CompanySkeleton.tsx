// src/components/Publications/SkeletonPublication.js
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "react-native";

export function CompanySkeleton() {
  return (
    <View style={{ padding: 16 }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ContentLoader
          key={item}
          speed={2}
          width={400}
          height={100}
          viewBox="0 0 400 100"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <Rect x="0" y="0" rx="88" ry="88" width="80" height="80" />

          <Rect x="100" y="8" rx="3" ry="3" width="50%" height="10" />
          <Rect x="100" y="30" rx="3" ry="3" width="50%" height="6" />
          <Rect x="100" y="42" rx="3" ry="3" width="52" height="6" />
        </ContentLoader>
      ))}
    </View>
  );
}
