import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
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
  icon: string;
  placeHolder: string;
  width: number;
  className?: string;
};

function InputText(props: Props) {
  return (
    <>
      <Stack width={props.width} spacing={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <img src={props.icon} alt="" />
          </InputLeftElement>
          <Input
            backgroundColor={"#fff"}
            borderColor={"#CDCDCD"}
            borderRadius={16}
            type={props.type}
            placeholder={props.placeHolder}
            className={props.className}
          />
        </InputGroup>
      </Stack>
    </>
  );
}

export default InputText;
