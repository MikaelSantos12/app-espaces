import React, { useRef, useState } from "react";
import { Container, OTPContainer, OTPInput } from "./styles";

interface Props {
  isLoading: boolean;
  otp: string;
  setOTP: (otp: string) => void;
}

const InputOtp: React.FC<Props> = ({ setOTP, otp, isLoading }) => {
  const inputRefs = useRef<any[]>([]);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = otp.split("");
    newOTP[index] = value;
    setOTP(newOTP.join(""));

    // Move focus to the next input field
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <Container>
      <OTPContainer>
        {[...Array(6)].map((_, index) => (
          <OTPInput
            editable={!isLoading}
            key={index}
            value={otp[index] || ""}
            onChangeText={(text: string) => handleOTPChange(index, text)}
            keyboardType="numeric"
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            maxLength={1}
            isFocused={focusedInput === index}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </OTPContainer>
    </Container>
  );
};

export { InputOtp };
