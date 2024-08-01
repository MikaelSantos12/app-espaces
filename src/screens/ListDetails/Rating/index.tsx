import * as S from "./styles";

interface Props {
  rating: number;
}
export function Rating({ rating }: Props) {
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
    </S.Container>
  );
}
