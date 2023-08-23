import { Container, Checkbox, Divider } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/InputText";
import passwordSvg from "/assets/images/key.svg";
import ButtonText from "../components/ui/button/Button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Layout } from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  
}

function SignUp() {
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
            <Link className="btn-g btn-disabled" to="/login">
              ورود به کالج گرام
            </Link>
            <Divider
              orientation="vertical"
              colorScheme="green"
              color={"#000"}
            />
            <Link className="btn-g " to="/signup">
              ثبت نام در کالج گرام
            </Link>
          </HStack>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" action="">
            <InputText
            register={register("username", { required: true })} 
              icon={passwordSvg}
              placeHolder="نام کاربری"
              type="text"
              width={320}
              className="margin-bottom-32"
            />
            <InputText
            register={register("email", { required: true })} 
              icon={passwordSvg}
              placeHolder="ایمیل"
              type="text"
              width={320}
              className="margin-bottom-32"
            />
            <InputText
            register={register("password", { required: true })} 
              icon={passwordSvg}
              placeHolder="رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
              
            />
            <InputText
            register={register("confirmPassword", { required: true })} 
              icon={passwordSvg}
              placeHolder="تکرار رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
            />

            <ButtonText
              type="submit"
              className="btn-g btn-primary flex self-end"
            >
              ثبت نام
            </ButtonText>
          </form>
        </Container>
        <Footer />
      </Layout>
    </>
  );
}

export default SignUp;
