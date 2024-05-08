import { Controller } from "react-hook-form";
import { StyleProp, TextInputProps } from "react-native";
import * as S from "./styles";
interface Props extends TextInputProps {
  Icon?: React.ReactNode;
  control: any;
  name: string;
  style?: StyleProp<any>;
}

export function Input({ Icon, control, style, name, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.InputWrapper style={style}>
          <S.IconWrapper>{Icon && Icon}</S.IconWrapper>
          <S.StyledInput value={value} onChangeText={onChange} {...rest} />
        </S.InputWrapper>
      )}
    />
  );
}
