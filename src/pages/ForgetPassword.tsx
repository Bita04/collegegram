import { Container, Checkbox, Divider, Flex } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/inputText";
import passwordSvg from "/assets/images/key.svg";
import ButtonText from "../components/ui/button/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { TreeIcon } from "../icons/TreeIcon";

function ForgetPassword() {
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <img src={logo} width={68} className="my-10" />
        <HStack height={10} className="mb-10">
          <p className="text-lg">بازیابی رمزعبور</p>
        </HStack>
        <form className="flex flex-col" action="">
          <InputText
            icon={passwordSvg}
            placeHolder="نام کاربری یا ایمیل"
            type="text"
            width={320}
            className="margin-bottom-32"
          />
          <Flex justifyContent="end">
            <ButtonText type="button">انصراف</ButtonText>
            <ButtonText type="submit" className="btn-g btn-primary mr-7 ">
              ارسال لینک بازیابی رمزعبور
            </ButtonText>
          </Flex>
        </form>
      </Container>
      <Footer>
        <TreeIcon />
      </Footer>
    </>
  );
}

export default ForgetPassword;
