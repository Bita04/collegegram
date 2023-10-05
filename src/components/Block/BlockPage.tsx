import { Flex, Text, WrapItem } from "@chakra-ui/react";
import React from "react";
import UsersCard from "../UsersCard/UsersCard";
import person from "/assets/images/person.svg";

const BlockPage = () => {
  return (
    <>
      <Flex className="w-[100%] gap-[24px]  ">
        <Flex className="flex-col w-[70%] justify-center items-center overflow-y-scroll">
          <h1 className="text-[#17494D] p-3 text-[20px] font-bold">
            مثل اینکه بلاک شدی!
          </h1>
          <Text className="w-[300px] leading-[30px] text-[16px] h-[160px] font-normal text-[#17494D]  text-center">
            متاسفانه متین دیگه دوست نداره پست‌ها و استوری‌هاش رو باهات به اشتراک
            بذاره. برو دنبال دوست جدید بگرد :)
          </Text>
        </Flex>
        <UsersCard
          name={"متین دهقان"}
          avatar={person}
          followers={0}
          following={0}
          posts={0}
          bottomNavigationColor="#456243"
        />
      </Flex>
    </>
  );
};

export default BlockPage;
