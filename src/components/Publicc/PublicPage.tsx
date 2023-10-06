import React from "react";
import { Flex, WrapItem } from "@chakra-ui/react";
import UsersCard from "../UsersCard/UsersCard";
import person from "../../../public/assets/images/person.svg";

const PrivatePage = ({ data }: { data: number }) => {
  return (
    <>
      <WrapItem className="w-full h-full">
        <Flex
          overflowY={"hidden"}
          maxWidth={950}
          direction={"row"}
          flexWrap={"wrap"}
          flex={"0 ,0 ,50%"}
        >
          {Array(data)
            .fill(0)
            .map((post) => (
              <Flex
                className="w-[360px] h-[355px] rounded-t-[10%] rounded-b-[10px] blur-sm  mr-[24px] mb-[24px]"
              />
            ))}
        </Flex>

        <UsersCard
          colorScheme="#C38F00"
          name={"بیتا بهادری"}
          avatar={person}
          followers={0}
          following={0}
          posts={0}
          buttonText="دنبال کردن"
        />
      </WrapItem>
    </>
  );
};
export default PrivatePage
