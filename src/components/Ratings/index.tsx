import * as S from "./styles";

interface Props {
  rating: number;
  withoutCircle?: boolean;
}
export function Ratings({ rating, withoutCircle = false }: Props) {
  const filledStars = Math.round((rating / 10) * 5);
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <S.RatingButton key={i} filled={i <= filledStars}></S.RatingButton>
      );
    }
    return stars;
  };
  return (
    <S.Container>
      <S.Main>
        <S.Title>Avaliação</S.Title>
        <S.RatingsContainer>{renderStars()}</S.RatingsContainer>
      </S.Main>
      {withoutCircle == false && (
        <S.RatingCircle>
          <S.RatingText>{rating}</S.RatingText>
        </S.RatingCircle>
      )}
    </S.Container>
  );
}
