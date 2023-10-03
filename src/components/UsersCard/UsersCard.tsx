import { Avatar, Card, Center, Divider, Flex, PropsOf, WrapItem ,Text } from '@chakra-ui/react';
import React from 'react';
import person from "/assets/images/person.svg";
import { number } from 'yup';
import ButtonText from '../ui/button/Button';
import post from "../../../public/assets/images/post.svg"
import block from "../../../public/assets/images/block.svg"
import pv from "../../../public/assets/images/pv.svg"
import closeFriend from "../../../public/assets/images/closeFriend.svg"


interface Props {
  avatar: string;
  name:string;
  followers: number;
  following: number;
  posts:number;
}
const UsersCard = ({
  avatar = person,
  name = "متین دهقان",
  followers = 0,
  following = 0,
  posts=81,
}: Props) => {
  return (
    <>
      <Card
        height={487}
        width={360}
        backgroundColor={"#F1EBE3"}
        className="border border--gray-300	border-[#CDCDCD]"
      >
        <WrapItem className="overflow-visible flex justify-center bg-[inherit]">
          <Avatar size="2xl" name="Segun Adebayo" backgroundColor={"Red"} />
        </WrapItem>
        <Flex
          fontSize={14}
          flexDirection={"row"}
          justifyContent={"center"}
          backgroundColor={"inherit"}
        >
          <Text className={"color-secondary"}>{following} دنبال کننده</Text>
          <Center height={15}>
            <Divider mx={3} className={"card-divider"} orientation="vertical" />
          </Center>
          <Text className={"color-secondary"}>{followers} دنبال شونده</Text>
        </Flex>
        <Flex justifyContent={"center"} backgroundColor={"inherit"}>
          <ButtonText
            className="bg-[#C19008] rounded-[16px] text-[14px] w-[100px]  h-[30px] font-normal text-[#FFF] "
            type="submit"
          >
            لغو درخواست
          </ButtonText>
        </Flex>
        <Flex justifyContent={"center"} backgroundColor={"inherit"}>
          <Flex direction={"column"}>
            <img src={post} width={25} height={25} />
            {posts}
          </Flex>
        </Flex>
        <WrapItem
          backgroundColor={"yellow"}
          width={"212px"}
          height={"72px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            direction={"row"}
            justifyContent={"center"}
            backgroundColor={"inherit"}
          >
            <img src={closeFriend} width={23} height={23} />
            <img src={pv} width={23} height={23} />
            <img src={block} width={23} height={23} />
          </Flex>
        </WrapItem>
      </Card>
    </>
  );
};

export default UsersCard;