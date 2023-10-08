import { Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import leftArrow from "../../public/assets/images/leftArrow.svg";
import more from "../../public/assets/images/more.svg";
import { number, string } from "yup";
import { PostPreview, UserData } from "../pages/Explore";
import { Link } from "react-router-dom";

type Props = {
  user: UserData;
  posts: PostPreview[];
};

const ExploreContainer = (props: Props) => {
  return (
    <Flex direction={"column"} className="mb-8">
      <Flex direction={"row"} height={232}>
        {/* <img src={leftArrow} /> */}
        {props.posts.map((post) => (
          <Link to={`/post/${post.id}`} className="object-contain ml-4">
            <Flex>
              <img src={post.photo} className="h-[232px] rounded-lg" />
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex>
        <Link to={`/friend/${props.user.userName}`}>
          <Flex direction={"row"}>
            <Avatar name="Dan Abrahmov" src={props.user.avatar} />
            <Flex direction={"column"}>
              <Text>
                {props.user.firstName} {props.user.lastName}
              </Text>
              <Text>{props.user.followerCount} دنبال‌کننده</Text>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ExploreContainer;
