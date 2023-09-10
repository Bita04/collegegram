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
import { useForm, SubmitHandler } from "react-hook-form";
import gmailSignUp from "/assets/images/gmailSignUp.png";
import memeberSignUp from "/assets/images/memberSignUp.svg";
import keySignUp from "/assets/images/KeySignUp.svg";
import { object, string, number, date, InferType } from "yup";
import useYupValidationResolver from "../hooks/useYupValidationResolver";
import * as Yup from "yup";
import { TreeIcon } from "../icons/TreeIcon";
import { signUpUserFn} from "../api/authApi";
import { useMutation } from "react-query";

import { useNavigate } from "react-router-dom";

const validationSchema = object({
  username: string()
    .min(3, "نام کاربری حداقل شامل سه کاراکتر باید باشد")
    .matches(/^[a-zA-Z0-9][a-zA-Z0-9\_]*$/, "نام کاربری را در فرمت درست وارد کنید")
    .required("نام کاربری را وارد کنید"),

  email: string().email("ایمیل را در فرمت درست وارد کنید").required("ایمیل را وارد کنید"),
  password: string().trim().required("رمز عبور را وارد کنید").min(8, "رمز عبور حداقل شامل هشت کاراکتر باید باشد").max(20, "رمز عبور حداکثر شامل بیست کاراکتر باید باشد"),
  confirmPassword: string().trim().required("رمز عبور را وارد کنید").min(8, "رمز عبور حداقل شامل هشت کاراکتر باید باشد").max(20, "رمز عبور حداکثر شامل بیست کاراکتر باید باشد").oneOf([Yup.ref("password")], "رمز عبور با تکرار آن یکسان نیست"),
});

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const navigate = useNavigate();



const {
  mutate: signUpUser,
} = useMutation((userData: Inputs) => signUpUserFn(userData), {
  onSuccess: (data) => {
    console.log(data)
    navigate("/profile");

    
    
  }
});
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
   
    try{

      signUpUser(data)
      


      
    } 
    catch (error) {

    }   }
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col"
            action=""
          >
            <InputText
              register={register("username", { required: true })}
              icon={memeberSignUp}
              placeHolder="نام کاربری"
              type="text"
              width={320}
              className="margin-bottom-32"
            />
            {errors.username && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                
                {errors.username.message}
              </span>
            )}
            <InputText
              register={register("email", { required: true })}
              icon={gmailSignUp}
              placeHolder="ایمیل"
              type="text"
              width={320}
              className="margin-bottom-32"
            />
             {errors.email && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                {errors.email.message}
              </span>
            )}

            <InputText
              register={register("password", { required: true })}
              icon={keySignUp}
              placeHolder="رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
            />
            {errors.password && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                
               {errors.password.message}
              </span>
            )}

            <InputText
              register={register("confirmPassword", { required: true, validate: (val: string) => {
                if (watch('password') != val) {
                  return "رمز عبور با تکرار آن یکسان نیست";
                }
              }, })}
              icon={keySignUp}
              placeHolder="تکرار رمز عبور"
              type="password"
              width={320}
              className="margin-bottom-32"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 mr-4 text-[13px] -mt-4 mb-4">
                
              {errors.confirmPassword.message}
              </span>
            )}

            <ButtonText
              onSubmit={handleSubmit(onSubmit)}
              type="submit"
              className="btn-g btn-primary flex self-end"
            >
              ثبت نام
            </ButtonText>
          </form>
        </Container>
        <Footer>
          <TreeIcon/>

        </Footer>
      </Layout>
    </>
  );
}

export default SignUp;
