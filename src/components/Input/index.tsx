import { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleProp, TextInputProps } from "react-native";
import * as S from "./styles";
interface Props extends TextInputProps {
  Icon?: React.ReactNode;
  control: any;
  name: string;
  isTextArea?: boolean;
  style?: StyleProp<any>;
  error?: string;
}

export function Input({
  Icon,
  control,
  style,
  isTextArea,
  name,
  error,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.Container>
          <S.InputWrapper
            style={style}
            isTextArea={isTextArea}
            isFocused={isFocused}
          >
            {Icon && <S.IconWrapper>{Icon}</S.IconWrapper>}

            <S.StyledInput
              value={value}
              onChangeText={onChange}
              multiline={isTextArea}
              numberOfLines={10}
              hasIcon={!!Icon}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...rest}
            />
          </S.InputWrapper>
          {error && <S.Error>{error}</S.Error>}
        </S.Container>
      )}
    />
  );
}
