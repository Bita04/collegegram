import { Container, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout.tsx";
import RightMenu from "../components/Profile/RightMenu.tsx";
import RightNavbar from "../components/Profile/RightNavbar.tsx";
import { TreeIcon } from "../icons/TreeIcon.tsx";
import { ReactNode } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import ButtonText from "../components/ui/button/Button.tsx";
import logo from "/assets/images/logo.png";import { LNavbar } from "../components/LNavbar/LNavbar.tsx";
import { NewPost } from "../components/NewPost/NewPost.tsx";
interface Props {
  children: ReactNode;
}
export const UserProfile = (props: Props) => {
  return (
    <Layout>
      <Flex className="flex gap-[78px]  flex-row px-[254px] py-[52px]" maxW="2xg">
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
        <Flex className="flex flex-col gap-[176px]">
        <Flex minW='md' className="flex flex-row justify-between">
            <Flex className="flex- flex-col">
            <InputGroup>
    <InputRightElement pointerEvents='none'>
        <SearchIcon color='gray.300' w='16px' h='16px' />
      
    </InputRightElement>
    <Input borderRadius='20px' border='2px solid #CDCDCD' placeholder="جستجو" backgroundColor='#FFF' type='text' width={360} />
  </InputGroup>
  
            </Flex>


            <Flex className="gap-[48px]">
                <NewPost/>
                <Flex className=" flex gap-[176px] flex-col items-center">
                <img className="w-[68px] h-[40px]" src={logo}/>
                
            </Flex>
              
            </Flex>
            
       
    

        </Flex>
       
       
        <Flex className=" gap-8  h-[300px]">
            <Flex className="w-[800px] h-[300px]">
            {props.children}
            

            </Flex>

        <LNavbar className="" />

</Flex>


        </Flex>
        
       
      </Flex>
     
    
    </Layout>
  );
};
