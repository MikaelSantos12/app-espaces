import { Container, RemoveButton, RemoveButtonText, Title } from "./styles";
interface Props {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  onRemove: () => void;
}
export function Tag({ title, isSelected, onPress, onRemove }: Props) {
  return (
    <Container isSelected={isSelected} onPress={onPress}>
      <Title isSelected={isSelected}>{title}</Title>
      {isSelected && (
        <RemoveButton onPress={onRemove}>
          <RemoveButtonText>X</RemoveButtonText>
        </RemoveButton>
      )}
    </Container>
  );
}
