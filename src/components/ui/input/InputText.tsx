import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form"; // نوع UseFormRegisterReturn را وارد کنید

type Props = {
  type: React.HTMLInputTypeAttribute;
  icon?: string;
  placeHolder?: string;
  width: number;
  className?: string;
  register?: UseFormRegisterReturn;
}

function InputText({
  type,
  icon,
  placeHolder = "",
  width,
  className,
  register,
}: Props) {
  return (
    <>
      <Stack width={width} spacing={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <img width={16} height={16} src={icon} alt="" />
          </InputLeftElement>
          <Input
            {...register}
            backgroundColor={"#fff"}
            borderColor={"#CDCDCD"}
            borderRadius={16}
            type={type}
            placeholder={placeHolder}
            className={className}
          />
        </InputGroup>
      </Stack>
    </>
  );
}

export default InputText;
