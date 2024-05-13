import { Controller } from "react-hook-form";
import { StyleProp, TextInputProps } from "react-native";
import * as S from "./styles";
interface Props extends TextInputProps {
  Icon?: React.ReactNode;
  control: any;
  name: string;
  isTextArea?: boolean;
  style?: StyleProp<any>;
}

export function Input({
  Icon,
  control,
  style,
  isTextArea,
  name,
  ...rest
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.InputWrapper style={style} isTextArea={isTextArea}>
          {Icon && <S.IconWrapper>{Icon}</S.IconWrapper>}

          <S.StyledInput
            value={value}
            onChangeText={onChange}
            multiline={isTextArea}
            numberOfLines={10}
            {...rest}
          />
        </S.InputWrapper>
      )}
    />
  );
}
