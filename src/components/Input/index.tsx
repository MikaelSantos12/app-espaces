import { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleProp, TextInputProps } from "react-native";
import * as S from "./styles";
interface Props extends TextInputProps {
  Icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  control: any;
  name: string;
  isTextArea?: boolean;
  style?: StyleProp<any>;
  error?: string;
  mask?: string;
  label?: string;
}

export function Input({
  Icon,
  control,
  style,
  isTextArea,
  name,
  error,
  label,
  mask,
  rightIcon,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.Container>
          {label && <S.Label>{label}</S.Label>}
          <S.InputWrapper
            style={style}
            isTextArea={isTextArea}
            isFocused={isFocused}
          >
            {Icon && <S.IconWrapper>{Icon}</S.IconWrapper>}
            {mask ? (
              <S.MaskStyledInput
                value={value}
                onChangeText={onChange}
                multiline={isTextArea}
                numberOfLines={10}
                hasIcon={!!Icon}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                options={{ mask: mask }}
                type="custom"
                {...rest}
              />
            ) : (
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
            )}
            {rightIcon && <S.RightIconWrapper>{rightIcon}</S.RightIconWrapper>}
          </S.InputWrapper>
          {error && <S.Error>{error}</S.Error>}
        </S.Container>
      )}
    />
  );
}
