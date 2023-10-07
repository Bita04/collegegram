import {
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout.tsx";
import RightMenu from "../components/Profile/RightMenu.tsx";
import RightNavbar from "../components/Profile/RightNavbar.tsx";
import { TreeIcon } from "../icons/TreeIcon.tsx";
import { ReactNode, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import ButtonText from "../components/ui/button/Button.tsx";
import logo from "/assets/images/logo.png";
import { LNavbar } from "../components/LNavbar/LNavbar.tsx";
import { NewPost } from "../components/NewPost/NewPost.tsx";
import { PostContainer } from "../components/PostContainer/PostContainer.tsx";
import { useQuery } from "react-query";
import { getInfoUser } from "../api/appApi.ts";
import React from "react";
// import { getPosts } from "../api/appApi.ts";
interface Props {
  children?: ReactNode;
  Lnavbar?: boolean;
}
type User = {
  avatar: string;
  bio:  string;
  firstName: string;
  followerCount: number;
  followingCount: number;
  isPrivate: boolean;
  lastName: string;
  postCount: number;
  username: string;
};
export const UserProfile = (props: Props) => {
  const [userData, setUserData] = React.useState<User>();
  const query = useQuery("user", () => getInfoUser(), {
    onSuccess: (data) => {
      console.log(data);
      setUserData(data);
    },
  });
  // useEffect(()=> {
  //  getPosts()

  // }, [])
  return (
    <Layout>
      <Flex className="flex place-content-center gap-[78px]   flex-row px-[64px] py-[52px]">
        <Flex flexDir={"column"}>
          <RightNavbar
            followers={userData?.followerCount!}
            following={userData?.followingCount!}
            userName={userData?.username!}
            avatar={userData?.avatar!}
          />
          <RightMenu className="my-20" />
          <TreeIcon width={189} height={213} />
        </Flex>
        <Flex className="flex  flex-col gap-[176px]">
          <Flex minW="md" className="flex flex-row justify-between">
            <Flex className="flex- flex-col">
              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.300" w="16px" h="16px" />
                </InputRightElement>
                <Input
                  borderRadius="20px"
                  border="2px solid #CDCDCD"
                  placeholder="جستجو"
                  backgroundColor="#FFF"
                  type="text"
                  width={360}
                />
              </InputGroup>
            </Flex>

            <Flex className="gap-[48px]">
              <NewPost />
              <Flex className=" flex gap-[176px] flex-col items-center">
                <img className="w-[68px] h-[40px]" src={logo} />
              </Flex>
            </Flex>
          </Flex>

          <Flex className="">
            <Flex className=" gap-8   flex flex-row ">
              <Flex className="w-[100%] max-w-5xl  gap-[24px]">
                {props.children}
               
                
                
              </Flex>
              {props.Lnavbar === false ? null : <LNavbar className="" />}
            
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};