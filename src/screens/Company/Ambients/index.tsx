import React from "react";
import { Row, Heading } from "../styles";
import { FlatList } from "react-native";
import * as C from "./styles";

type AmbientProps = {
  id: number;
  uri: string;
  borderRadius: any;
  name: string;
  images: any[]
};

const Ambients = ({ data }: { data: AmbientProps[] }) => {
  return (
    <React.Fragment>
      <Row>
        <Heading>Fotos</Heading>
      </Row>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 24, marginTop: 24 }}
        renderItem={({ item }) => (
          <C.TouchableOpacity activeOpacity={0.8}>
            <C.BgGradient colors={["transparent", "#000"]}>
              <C.ImageWrapper>
                {item.images.map((image, index) => (
                  <C.Image
                    key={index}
                    source={{ uri: image.uri }}
                    style={{
                      ...image.borderRadius,
                    }}
                  />
                ))}
              </C.ImageWrapper>
              <C.Text>{item.name}</C.Text>
            </C.BgGradient>
          </C.TouchableOpacity>
        )}
      />
    </React.Fragment>
  );
};

export default Ambients;
