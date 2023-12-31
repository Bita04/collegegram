import { Container, Checkbox, Divider } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/InputText";
import passwordSvg from "/assets/images/key.svg";
import mailPng from "/assets/images/gmail.png";
import { verifyToken } from "../api/authApi";

import ButtonText from "../components/ui/button/Button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { TreeIcon } from "../icons/TreeIcon";
import { Layout } from "../components/Layout/Layout";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { object, string, number, date, InferType } from "yup";
import useYupValidationResolver from "../hooks/useYupValidationResolver";
// import * as Yup from "yup";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { AuthAPI } from "../api/authApi";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { UserProfile } from "./UserProfile";
type Inputs = {
  authenticator: string;
  password: string;
};

const validationSchema = object({
  authenticator: string()
    .min(3, "نام کاربری حداقل شامل سه کاراکتر باید باشد")
    .matches(
      /^(?:\w+|\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-z]{2,4})+)$/,
      "نام کاربری یا ایمیل را در فرمت درست وارد کنید"
    )
    .required("نام کاربری را وارد کنید"),
  password: string()
    .trim()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور حداقل شامل هشت کاراکتر باید باشد")
    .max(20, "رمز عبور حداکثر شامل بیست کاراکتر باید باشد"),
});

function Login() {
  const navigate = useNavigate();
 
  // if(localStorage.getItem('accessToken')) {
  //    const validateToken = verifyToken(localStorage.getItem('accessToken')!).then(res => {
  //   if (res === 200) {
  //     navigate("/profile")
  //   }
   
  // })


  
  // }

  const {
    mutate: loginUser,
  } = useMutation((userData: Inputs) =>AuthAPI.login(userData.authenticator, userData.password), {
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken)
      localStorage.setItem("refresh-token", data['refresh-token']) 
      console.log(localStorage.getItem("accessToken"))
      navigate("/profile");
      
    }}
  )
  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      loginUser(data);
    } catch (error) {}
    // if (res === 200) {
    //   // navigate('/profile')
    //   console.log('e')
    // }

    // console.log(res)
    // localStorage.setItem("accessToken", res.data.accessToken)
    // localStorage.setItem("refreshToken", res.data.refreshToken)
    // localStorage.setItem("user", JSON.stringify(res.data.userInfo))
    // history.push("/profile")
  };
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col"
            action=""
          >
            <InputText
              icon={mailPng}
              placeHolder="نام کاربری یا ایمیل"
              type="text"
              width={320}
              className="margin-bottom-32"
              register={register("authenticator", { required: true })}
            />
            {errors.authenticator && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                {errors.authenticator.message}
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
                {errors.password.message}
              </span>
            )}

            <Checkbox color={"#2B2B2B"}>مرا به خاطر بسپار</Checkbox>

            <ButtonText
              type="submit"
              className="btn-g btn-primary flex self-end"
              onSubmit={handleSubmit(onSubmit)}
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
        <Footer>
          <TreeIcon />
        </Footer>
      </Layout>
    </>
  );
}

export default Login;
