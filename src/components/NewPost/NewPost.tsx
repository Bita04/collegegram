import * as React from "react";
import { useState } from "react";

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
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import plusSvg from "/assets/images/plus.svg";
import InputText from "../ui/input/InputText";
import { CloseIcon } from "../../icons/CloseIcon";
type Props = {};
import { Switch } from "@chakra-ui/react";
import ButtonText from "../ui/button/Button";

export const NewPost = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState([]);

  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Add the image to the state
        setImages([...images, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    // Create a copy of the images array without the selected image
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div>
      <>
      <ButtonText className="w-[110px] px-[10px]  text-[#FFF] text-[14px] font-medium bg-[#C38F00] rounded-[100px] h-[40px]" type="button" onClick={onOpen}>
                    افزودن عکس
                </ButtonText>

        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="#F3F0EE"
            className=" rounded-[24px] py-[38px]"
          >
            <ModalHeader className="flex flex-row justify-center text-[#17494D]">
              افزودن پست
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="flex flex-col gap-[32px]">
              <Flex
                onClick={handleFileUpload}
                className="items-center cursor-pointer max-w-[200px] gap-[16px] mt-[46px]"
              >
                <img src={plusSvg} alt="" />
                <Text className="text-[#C19008] text-[16px] font-bold leading-[20px]">
                  بارگذاری عکس ها
                </Text>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </Flex>
              <Flex className=" gap-[8px] flex-wrap" id="images-container">
                {images.map((image, index) => (
                  <Flex className="rounded-[24px] w-[112px] h-[112px] relative">
                    <Flex
                      id="close-container"
                      className="w-[24px] absolute bg-[#ffffff] -mt-1 -mr-1 justify-center items-center h-[24px] rounded-full cursor-pointer"
                      onClick={() => removeImage(index)}
                    >
                      <CloseIcon />
                    </Flex>
                    <img
                      className="w-[112px] h-[112px] rounded-[24px]"
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                    />
                  </Flex>
                ))}
              </Flex>
              <Flex className="flex flex-col gap-[8px]">
                <Text className="text-[16px] text-[#17494D] font-medium">
                  توضیحات
                </Text>
                <textarea className="w-[100%] px-[13px] py-[12px] resize-none h-[100px] border-[1px] border-[#17494D] bg-[#F3F0EE] rounded-[8px]"></textarea>
              </Flex>
              <Flex className="flex flex-col gap-[8px]">
                <Text className="text-[16px] text-[#17494D] font-medium">
                  تگ ها
                </Text>
                <Input borderColor="#17494D"></Input>
              </Flex>
              <Flex className="flex ml-[30px]  items-center gap-[15px] flex-row-reverse">
                <Text className="text-[#17494D] text-[14px] font-medium">
                  فقط نمایش به دوستان نزدیک
                </Text>

                <Switch colorScheme="brand" size="lg" />
              </Flex>
            </ModalBody>

            <ModalFooter>
              <ButtonText
                className=" rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal "
                type="submit"
                onClick={onClose}
              >
                پشیمون شدم
              </ButtonText>
              <ButtonText
                className="bg-[#C19008] rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal text-[#FFF]"
                type="submit"
                onClick={onClose}
              >
                ثبت عکس
              </ButtonText>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
