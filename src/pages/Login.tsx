import { Container, Checkbox, Divider } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/InputText";
import passwordSvg from "/assets/images/key.svg";
import mailPng from "/assets/images/gmail.png";
import ButtonText from "../components/ui/button/Button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { TreeIcon } from "../icons/TreeIcon";
import { Layout } from "../components/Layout/Layout";
import { useForm, SubmitHandler } from "react-hook-form"
import { object, string, number, date, InferType } from "yup";
import useYupValidationResolver from "../hooks/useYupValidationResolver";
import * as Yup from "yup";
import { Link } from "react-router-dom";
type Inputs = {
  username: string
  password: string
}

const validationSchema = object({
  username: string()
    .min(3)
    .matches(/^(?:\w+|\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-z]{2,4})+)$/)
    .required(),
  password: string().trim().required().min(8).max(20),
});

function Login() {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver})
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
              icon={mailPng}
              placeHolder="نام کاربری یا ایمیل"
              type="text"
              width={320}
              className="margin-bottom-32"
              register={register("username", { required: true })} 
            />
            {errors.username && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                
                {errors.username.type === "required"
                  ? "نام کاربری را وارد کنید"
                  : errors.username.type === "min"
                  ? "نام کاربری حداقل شامل سه کاراکتر باید باشد"
                  : errors.username.type === "matches"
                  ? "نام کاربری یا ایمیل را در فرمت درست وارد کنید"
                  : ""}
              </span>
            )}
            <InputText
            
              icon={passwordSvg}
              placeHolder="رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
              register={register("password", { required: true })} 
            />
            {errors.password && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                
                {errors.password.type === "required"
                  ? "رمز عبور را وارد کنید"
                  : errors.password.type === "min"
                  ? "رمز عبور حداقل شامل هشت کاراکتر باید باشد"
                  : errors.password.type === "max"
                  ? "رمز عبور حداکثر شامل بیست کاراکتر باید باشد"
                  : errors.password.type}
              </span>
            )}


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

            <Link to="/signup" className="my-5 color-primary">
              <ChevronLeftIcon /> ثبت نام در کالج گرام
            </Link>
          </form>
        </Container>
        <Footer />
      </Layout>
    </>
  );
}

export default Login;
