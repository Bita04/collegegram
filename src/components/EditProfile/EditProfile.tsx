import React from "react";
import gmailSignUp from "/assets/images/gmailSignUp.png";
import keySignUp from "/assets/images/KeySignUp.svg";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  WrapItem,
  Avatar,
  Switch,
  Text,
  Flex,
  createIcon,
} from "@chakra-ui/react";
// import plusSvg from "/assets/images/plus.svg";
// import InputText from "../ui/input/InputText";
// import { Switch } from "@chakra-ui/react";
import ButtonText from "../ui/button/Button";
import InputText from "../ui/input/InputText";
import cras from "/assets/images/cras.svg";
import memeberSignUp from "/assets/images/memberSignUp.svg";
import load from "../../../public/assets/images/load.svg";
import RightNavbar from "../Profile/RightNavbar";
import { useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
// const onClose:boolean(isOpen:boolean)=>{
//   return isOpen(false)
// }
type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confrimPassword: string;
  private: boolean;
  bio: string;
};
export const EditProfile = (props: Props) => {
  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <>
        {/* <Button onClick={onOpen} color="#F1EBE3"></Button> */}

        <Modal
          size="xl"
          isOpen={props.isOpen}
          onClose={props.onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent className="bg-[#f3f0ee]" maxHeight={962} maxWidth={375}>
            <ModalHeader className="flex flex-row justify-center">
              ویرایش حساب
            </ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody pb={6}>
                <WrapItem
                  className="flex flex-row justify-center margin-bottom-28 "
                  position={"relative"}
                >
                  <Avatar size="2xl" name="Segun Adebayo" src={Avatar} />
                  <img src={load} className="absolute px-14 py-14  " />
                </WrapItem>
                <Text className="flex flex-row justify-center py-2">
                  عکس پروفایل
                </Text>

                <Text className="flex flex-row justify-center text-[#C19008] pb-6">
                  {" "}
                  <img src={cras} className="pl-2" />
                  حذف تصویر{" "}
                </Text>

                <FormControl>
                  <Flex direction={"column"} alignItems={"center"} gap={6}>
                    <InputText
                      placeHolder="ایمیل"
                      icon={gmailSignUp}
                      type="email"
                      width={262}
                      register={register("email")}
                    />

                    <InputText
                      placeHolder="نام"
                      icon={memeberSignUp}
                      type="text"
                      width={262}
                      register={register("firstname")}
                    />
                    <InputText
                      placeHolder="نام خانوادگی "
                      icon={memeberSignUp}
                      type="text"
                      width={262}
                      register={register("lastname")}
                    />

                    <InputText
                      placeHolder="رمز عبور"
                      icon={keySignUp}
                      type="password"
                      width={262}
                      register={register("password")}
                    />

                    <InputText
                      placeHolder="تکرار رمز عبور"
                      icon={keySignUp}
                      type="password"
                      width={262}
                      register={register("confrimPassword")}
                    />
                  </Flex>

                  <FormControl
                    display="flex"
                    alignItems="center"
                    size="lg"
                    mt={8}
                    px={9}
                  >
                    <Switch
                      id="isInvalid"
                      colorScheme="blackandWhite"
                      className="pl-2"
                      {...register("private")}
                    />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      پیچ خصوصی باشه
                    </FormLabel>
                  </FormControl>
                </FormControl>
              </ModalBody>
              <Text className="text-[16px] text-[#17494D] font-medium " px={14}>
                بایو
              </Text>
              <Flex direction={"column"} alignItems={"center"} gap={4}>
                <textarea
                  className="flex flex-col item-center w-[263px] resize-none h-[88px] border-[1px] border-[#17494D80] rounded-[4px]"
                  {...register("bio")}
                />
              </Flex>
              <ModalFooter className="ml-6">
                <ButtonText
                  className=" rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal "
                  onClick={props.onClose}
                  type="submit"
                >
                  پشیمون شدم
                </ButtonText>
                <ButtonText
                  className="bg-[#C19008] rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal text-[#FFF]"
                  type="submit"
                  onClick={props.onClose}
                >
                  ثبت تغییرات
                </ButtonText>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
