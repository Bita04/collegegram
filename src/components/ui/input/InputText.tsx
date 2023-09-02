import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form"; // نوع UseFormRegisterReturn را وارد کنید

type InputTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color";

type Props = {
  type: InputTypes;
  icon?: string;
  placeHolder?: string;
  width: number;
  className?: string;
  register?: UseFormRegisterReturn;
};

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
