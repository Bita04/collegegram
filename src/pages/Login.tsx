import { Container, Checkbox, Divider } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/InputText";
import passwordSvg from "/assets/images/key.svg";
import mailSvg from "/assets/images/mail.svg";
import ButtonText from "../components/ui/button/Button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Layout } from "../components/Layout/Layout";
import { useForm, SubmitHandler } from "react-hook-form"

import { Link } from "react-router-dom";
type Inputs = {
  username: string
  password: string
}

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  
  return (
    <>
      <Layout>
        <Container
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginBottom="20"
        >
          <img src={logo} width={68} className="my-10" />
          <HStack borderColor="#587052" height={10} className="mb-10">
            <Link className="btn-g" to="/login">
              ورود به کالج گرام
            </Link>
            <Divider
              orientation="vertical"
              colorScheme="green"
              color={"#000"}
            />
            <Link className="btn-g btn-disabled" to="/signup">
              ثبت نام در کالج گرام
            </Link>
          </HStack>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" action="">
            <InputText
              icon={passwordSvg}
              placeHolder="نام کاربری یا ایمیل"
              type="text"
              width={320}
              className="margin-bottom-32"
              register={register("username", { required: true })} 
            />
            <InputText
            
              icon={passwordSvg}
              placeHolder="رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
              register={register("password", { required: true })} 
            />
            <Checkbox color={"#2B2B2B"}>مرا به خاطر بسپار</Checkbox>

            <ButtonText
              type="submit"
              className="btn-g btn-primary flex self-end"
            >
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
        <Footer />
      </Layout>
    </>
  );
}

export default Login;
