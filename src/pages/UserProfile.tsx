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
import axios from "axios";
import { PostContainer } from "../components/PostContainer/PostContainer.tsx";
// import { getPosts } from "../api/appApi.ts";
interface Props {
  children?: ReactNode;
}
export const UserProfile = (props: Props) => {
  // useEffect(()=> {
  //  getPosts()

  // }, [])
  return (
    <Layout>
      <Flex className="flex gap-[78px]   flex-row px-[64px] py-[52px]">
        <Flex flexDir={"column"}>
          <RightNavbar
            followers={0}
            following={0}
            userName="rahnema"
            avatar={""}
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
              <Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]   bg-white">
                {props.children}
               
                <PostContainer/>
                
              </Flex>
              <LNavbar className="" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};