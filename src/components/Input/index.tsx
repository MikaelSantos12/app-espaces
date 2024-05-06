import { Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import * as S from "./styles";
interface Props extends TextInputProps {
  Icon?: React.ReactNode;
  control: any;
  name: string;
}

export function Input({ Icon, control, name, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.InputWrapper>
          <S.IconWrapper>{Icon && Icon}</S.IconWrapper>
          <S.StyledInput value={value} onChangeText={onChange} {...rest} />
        </S.InputWrapper>
      )}
    />
  );
}
