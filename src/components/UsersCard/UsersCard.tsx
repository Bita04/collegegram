import {
  Avatar,
  Card,
  Center,
  Divider,
  Flex,
  PropsOf,
  WrapItem,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { number } from "yup";
import ButtonText from "../ui/button/Button";
import post from "../../../public/assets/images/post.svg";
import block from "../../../public/assets/images/block.svg";
import pv from "../../../public/assets/images/pv.svg";
import CloseFriendIcon from "../../../public/assets/icons/CloseFriendIcon";
import BlockIcon from "../../../public/assets/icons/BlockIcon";
import PVIcon from "../../../public/assets/icons/PVIcon";

interface Props {
  name: string;
  avatar: string;
  followers: number;
  following: number;
  posts: number;
  buttonText?: string;
  colorScheme?: string;
}
const UsersCard = (props: Props) => {
  return (
    <>
      <Card
        height={487}
        maxWidth={320}
        minWidth={280}
        className="profile-card w-2/5"
      >
        <WrapItem className="overflow-visible flex  justify-center bg-[inherit] ">
          <Avatar
            size="xl"
            name="Segun Adebayo"
            backgroundColor={"Red"}
            className="z-10 -translate-y-1/2"
          />
        </WrapItem>
        <Text className="flex justify-center -mt-6 mb-4">{props.name}</Text>
        <Flex
          fontSize={14}
          flexDirection={"row"}
          justifyContent={"center"}
          backgroundColor={"inherit"}
          className="mb-8"
        >
          <Text className={"color-secondary"}>
            {props.following} دنبال کننده
          </Text>
          <Center height={15}>
            <Divider mx={3} className={"card-divider"} orientation="vertical" />
          </Center>
          <Text className={"color-secondary"}>
            {props.followers} دنبال شونده
          </Text>
        </Flex>
        <Flex justifyContent={"center"} backgroundColor={"inherit"}>
          <Button
            className="bg-[#C19008] rounded-[60px] text-[14px] w-[116px]  h-[40px] font-normal mb-10"
            type="submit"
            borderRadius={60}
            backgroundColor={props.colorScheme}
            color={"white"}
          >
            {props.buttonText ?? "لغو درخواست"}
          </Button>
        </Flex>
        <Flex justifyContent={"center"} backgroundColor={"inherit"}>
          <Flex direction={"column"}>
            <img src={post} width={25} height={25} className="flex-col mb-2" />
            <text className="mx-auto">{props.posts}</text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            backgroundColor={"#F3F0EE"}
            width={"212px"}
            height={"72px"}
            justifyContent={"center"}
            className="my-[66px] border border-[#CDCDCD]"
          >
            <Flex
              direction={"row"}
              backgroundColor={"inherit"}
              gap={6}
              alignItems={"center"}
            >
              {/* <img src={closeFriend} width={23} height={23} /> */}
              <CloseFriendIcon
                fillColor={props.colorScheme ? props.colorScheme : undefined}
              />
              <BlockIcon
                fillColor={props.colorScheme ? props.colorScheme : undefined}
              />
              <PVIcon
                fillColor={props.colorScheme ? props.colorScheme : undefined}
              />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default UsersCard;
