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
import { useForm, Controller, useFieldArray } from "react-hook-form";
import axios from "axios";
import { set } from "lodash";

export const NewPost = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState<string[]>([]);
  const [fileImages, setFileImages] = useState<File[]>([]);

  const submitForm = (fd: {
    "post-photos": FileList,
    "description": string,
    "tags": string,
    "closeFriends": string

  }) => {
    console.log(fd["post-photos"][0]);
    console.log("##########");
    console.log(fd["post-photos"]);
    const formData = new FormData();
    fileImages.forEach((x) => formData.append("post-photos", x));
    formData.append("description", fd["description"]);
    formData.append("tags", fd["tags"]);
    formData.append("closeFriends", fd["closeFriends"]);

    // console.log(formData);

    axios
      .post("https://collegegram-greedy-test.darkube.app/post", formData, {
        headers: {
          "content-type": "multipart/form-data",
          authorization: localStorage.getItem("accessToken"),
          "refresh-token": localStorage.getItem("refreshToken"),
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<{
    "post-photos": FileList,
    "description": string,
    "tags": string,
    "closeFriends": string

  }>();

  // const [tags, setTags] = useState("");
  // const [description, setDescription] = useState("");
  // console.log(images)
  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setFileImages([...fileImages, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Add the image to the state
        if (e.target) {
          setImages([...images, e.target.result as string]);
        }

        console.log(images)
      };
      reader.readAsDataURL(file);
    }
    // formData.append("images", file);
  };

  const removeImage = (index:number) => {
    // Create a copy of the images array without the selected image
    setFileImages([...fileImages]);
    const updatedImages = [...images];
    const updatedFileImage = [...fileImages];
    updatedImages.splice(index, 1);
    updatedFileImage.splice(index, 1);
    setFileImages(updatedFileImage);
    setImages(updatedImages);
  };

  return (
    <div>
      <>
        <ButtonText
          className="w-[110px] px-[10px]  text-[#FFF] text-[14px] font-medium bg-[#C38F00] rounded-[100px] h-[40px]"
          type="button"
          onClick={onOpen}
        >
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
                <Controller
                  name="post-photos" 
                  control={control}
                  render={({ field }) => (
                    <input
                      type="file"
                      multiple
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                        handleImageUpload(e);
                      }}
                    />
                  )}
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
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="w-[100%] px-[13px] py-[12px] resize-none h-[100px] border-[1px] border-[#17494D] bg-[#F3F0EE] rounded-[8px]"
                    ></textarea>
                  )}
                />{" "}
              </Flex>
              <Flex className="flex flex-col gap-[8px]">
                <Text className="text-[16px] text-[#17494D] font-medium">
                  تگ ها
                </Text>
                <Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderColor="#17494D"
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </Flex>
              <Flex className="flex ml-[30px]  items-center gap-[15px] flex-row-reverse">
                <Text className="text-[#17494D] text-[14px] font-medium">
                  فقط نمایش به دوستان نزدیک
                </Text>

                <Controller
                  name="closeFriends"
                  control={control}
                  // defaultValue={false}
                  render={({ field }) => (
                    <Switch
                      {...field}
                      colorScheme="brand"
                      size="lg"
                      id="showToCloseFriends"
                    />
                  )}
                />
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
                onClick={handleSubmit(submitForm)}
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
