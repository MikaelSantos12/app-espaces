import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";
import * as C from "./styles";

type BannerProps = {
  id: number;
  cover: string;
  date: string;
  title: string;
};

const Banners = ({ item, full }: { item: BannerProps; full?: boolean }) => {
  const navigation = useNavigation();
  return (
    <C.Banner
      activeOpacity={0.8}
      full={full}
      onPress={() => navigation.navigate("banner" as never)}
    >
      <C.Cover borderRadius={8} source={{ uri: item.cover }}>
        <C.StyledLinearGradient colors={["transparent", "#000"]} full={full}>
          <C.Row>
            <C.Photo source={{ uri: item.cover }} />

            <C.Company>
              <C.Text>{item.title}</C.Text>
              <C.Text>{item.date}</C.Text>
              <C.Text>{faker.lorem.words()}</C.Text>
            </C.Company>
          </C.Row>
        </C.StyledLinearGradient>
      </C.Cover>
    </C.Banner>
  );
};

export default Banners;
