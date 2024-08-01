import { Ratings } from "@/components/Ratings";
import { formatPublicationDate } from "@/utils/format-post-date";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
interface Props {
  data: {
    userPhoto: string;
    company: {
      name: string;
      photo: string;
    };
    username: string;

    createdAt: Date;
    author: {
      name: string;
      username: string;
      userPhoto: [
        {
          id: string;
          image: string;
        }
      ];
    };
    rating: number;
  };
  onPress?: () => void;
}
export function PublicationHeader({ data, onPress }: Props) {
  const navigation = useNavigation();
  console.log(data.author.userPhoto.image);
  return (
    <>
      <S.Header activeOpacity={1} onPress={onPress}>
        <S.PhotoContainer>
          <S.CompanyPhoto
            source={{
              uri:
                data?.company?.photo ||
                "https://eshows-images.s3.amazonaws.com/16799212296421904deb7f016799212293x2rt.jpg",
            }}
          />
          <S.UserPhoto
            source={{
              uri:
                data.author.userPhoto?.image ||
                "https://avatars.githubusercontent.com/u/90217183?v=4",
            }}
          />
        </S.PhotoContainer>
        <S.Title>
          <S.Highlight>{data.author?.name}</S.Highlight>
          {"\n"}
          em{" "}
          <S.Highlight onPress={() => navigation.navigate("company" as never)}>
            {data.company?.name}
          </S.Highlight>
        </S.Title>
      </S.Header>
      <S.Rating>
        <S.Title>{formatPublicationDate(data.createdAt)}</S.Title>
        <Ratings rating={data.rating} />
      </S.Rating>
    </>
  );
}
