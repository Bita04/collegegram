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
  Input,
  WrapItem,
  Avatar,
  Switch,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
// import plusSvg from "/assets/images/plus.svg";
// import InputText from "../ui/input/InputText";
// import { Switch } from "@chakra-ui/react";
import RightNavbar from "../Profile/RightNavbar";
import ButtonText from "../ui/button/Button";
import InputText from "../ui/input/InputText";

type props = {
  isOpen: boolean;
};
// const onClose:boolean(isOpen:boolean)=>{
//   return isOpen(false)
// }
export const EditProfile = (props: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <>
        <Button onClick={onOpen}></Button>

        <Modal
          size="xl"
          isOpen={props.isOpen}
          onClose={onClose}
          isCentered
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ویرایش حساب</ModalHeader>

            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex justifyContent={"center"} alignContent={"center"}>
                <WrapItem
                  className="margin-bottom-32 "
                >
                  <Avatar size="2xl" name="Segun Adebayo" src={Avatar} />
                </WrapItem>
                <Text>عکس پروفایل</Text>
              </Flex>
              <FormControl>
                <InputText
                  placeHolder="ایمیل"
                  icon={gmailSignUp}
                  type="text"
                  width={320}
                  className="margin-bottom-32 "
                />
              </FormControl>

              <FormControl>
                <InputText
                  placeHolder="نام"
                  icon={gmailSignUp}
                  type="text"
                  width={320}
                  className="margin-bottom-32"
                />
              </FormControl>

              <FormControl>
                <InputText
                  placeHolder="نام خانوادگی "
                  icon={gmailSignUp}
                  type="text"
                  width={320}
                  className="margin-bottom-32"
                />
              </FormControl>

              <FormControl>
                <InputText
                  placeHolder="رمز عبور"
                  icon={keySignUp}
                  type="text"
                  width={320}
                  className="margin-bottom-32"
                />
              </FormControl>

              <FormControl>
                <InputText
                  placeHolder="تکرار رمز عبور"
                  icon={keySignUp}
                  type="text"
                  width={320}
                />
              </FormControl>
            </ModalBody>

            <Switch colorScheme="brand" size="lg" />
            <Text>پیچ خصوصی باشه</Text>

            <Text className="text-[16px] text-[#17494D] font-medium">بایو</Text>
            <Input borderColor="#17494D"></Input>

            <ModalFooter>
              <ButtonText
                className=" rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal "
                onClick={onClose}
                type="submit"
              >
                پشیمون شدم
              </ButtonText>
              <ButtonText
                className="bg-[#C19008] rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal text-[#FFF]"
                onClick={onClose}
                type="submit"
              >
                ثبت تغییرات
              </ButtonText>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
