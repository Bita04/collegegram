import { Container, Checkbox, Divider } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/inputText";
import passwordSvg from "/assets/images/key.svg";
import ButtonText from "../components/ui/button/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { TreeIcon } from "../icons/TreeIcon";

function Login() {
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <img src={logo} width={68} className="my-10" />
        <HStack borderColor="#587052" height={10} className="mb-10">
          <a className="btn-g" href="#">
            ورود به کالج گرام
          </a>
          <Divider orientation="vertical" colorScheme="green" color={"#000"} />
          <a className="btn-g btn-disabled" href="#">
            ثبت نام در کالج گرام
          </a>
        </HStack>
        <form className="flex flex-col" action="">
          <InputText
            icon={passwordSvg}
            placeHolder="نام کاربری یا ایمیل"
            type="text"
            width={320}
            className="margin-bottom-32"
          />
          <InputText
            icon={passwordSvg}
            placeHolder="رمز عبور"
            type="password"
            width={320}
            className="margin-bottom-32"
          />
          <Checkbox color={"#2B2B2B"}>مرا به خاطر بسپار</Checkbox>

          <ButtonText type="submit" className="btn-g btn-primary flex self-end">
            ورود
          </ButtonText>

          <a href="#" className="mt-10 color-primary">
            <ChevronLeftIcon /> رمز عبورم را فراموش کردم
          </a>

          <a href="#" className="my-5 color-primary">
            <ChevronLeftIcon /> ثبت نام در کالج گرام
          </a>
        </form>
      </Container>
      <Footer>
        <TreeIcon />
      </Footer>
    </>
  );
}

export default Login;
