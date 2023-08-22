import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import passwordSvg from "../../../../public/assets/images/key.svg";
type Props = {
  type: string;
  icon: string;
  placeHolder: string;
  width: number;
};

function InputText(props: Props) {
  return (
    <>
      <Stack width={props.width} spacing={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <img src={passwordSvg} alt="" />
          </InputLeftElement>
          <Input
            dir="auto"
            backgroundColor={"#fff"}
            borderColor={"#CDCDCD"}
            borderRadius={16}
            type={props.type}
            placeholder={props.placeHolder}
          />
        </InputGroup>
      </Stack>
    </>
  );
}

export default InputText;
