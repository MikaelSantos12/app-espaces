// src/components/Publications/SkeletonPublication.js
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "react-native";

export function SkeletonPublication() {
  return (
    <View style={{ padding: 16 }}>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="0" y="0" rx="88" ry="88" width="40" height="40" />
        <Rect x="30" y="0" rx="88" ry="88" width="40" height="40" />
        <Rect x="70" y="8" rx="3" ry="3" width="88" height="6" />
        <Rect x="70" y="26" rx="3" ry="3" width="52" height="6" />
        <Rect x="0" y="56" rx="3" ry="3" width="400" height="200" />
        <Rect x="0" y="270" rx="3" ry="3" width="88" height="6" />
        <Rect x="0" y="280" rx="3" ry="3" width="188" height="6" />
        <Rect x="0" y="290" rx="3" ry="3" width="188" height="6" />
      </ContentLoader>
    </View>
  );
}
