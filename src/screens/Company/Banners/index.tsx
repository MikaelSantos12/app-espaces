import { FlatList } from "react-native";
import * as C from "./styles";

type BannerProps = {
  id: number;
  cover: string;
  date: string;
  title: string;
};

const Banners = ({ data }: { data: BannerProps[] }) => {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginBottom: 24 }}
      renderItem={({ item }) => (
        <C.Banner activeOpacity={0.8}>
          <C.Cover borderRadius={8} source={{ uri: item.cover }}>
            <C.StyledLinearGradient colors={["transparent", "#000"]}>
              <C.Text>{item.date}</C.Text>
              <C.Text>{item.title}</C.Text>
            </C.StyledLinearGradient>
          </C.Cover>
        </C.Banner>
      )}
    />
  );
};

export default Banners;
