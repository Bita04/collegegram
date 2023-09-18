import { Container, Checkbox, Divider, Flex } from "@chakra-ui/react";
import logo from "/assets/images/logo.png";
import InputText from "../components/ui/input/InputText";
import passwordSvg from "/assets/images/key.svg";
import ButtonText from "../components/ui/button/Button";
import { HStack } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { TreeIcon } from "../icons/TreeIcon";
import { Layout } from "../components/Layout/Layout.tsx";
import ButtonText from "../components/ui/button/Button.tsx";
import InputText from "../components/ui/input/InputText.tsx";

function ForgetPassword() {
  return (
    <>
        <Layout>
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
                        <ButtonText onClick={()=> console.log('cancel')} type="button">انصراف</ButtonText>
                        <ButtonText onClick={()=> console.log('submit')} type="submit" className="btn-g btn-primary mr-7 ">
                            ارسال لینک بازیابی رمزعبور
                        </ButtonText>
                    </Flex>
                </form>
            </Container>
            <Footer>
                <TreeIcon />
            </Footer>
        </Layout>
    </>
  );
}

export default ForgetPassword;
