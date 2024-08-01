import Pin from "@/assets/pin.png";
import React from "react";
import { Container, Image, PinImage } from "./styles";
const CustomMarker = ({ imageSource }) => {
  return (
    <Container>
      <PinImage source={Pin} resizeMode="contain">
        <Image source={{ uri: imageSource }} />
      </PinImage>
    </Container>
  );
};

export { CustomMarker };
