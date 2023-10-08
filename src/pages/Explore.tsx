// @flow
import * as React from "react";
import { UserProfile } from "./UserProfile";
import { getProfile } from "../api/profile";
import { useEffect, useState } from "react";
import { getExplore } from "../api/explore";
import { useQuery } from "react-query";
import { Flex, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";
import ExploreContainer from "../Explore/ExploreContainer";
type Props = {};
export interface PostPreview {
  id: number;
  photo: string;
}
export interface UserData {
  avatar: string;
  createdAt: string;
  firstName: string;
  followerCount: number;
  id: string;
  lastName: string;
  userName: string;
}
export interface IExploreResponse {
  explorePage: Array<{ posts: PostPreview[]; user: UserData }>;
  hasMore: boolean;
  nextOffset: string;
}

export const Explore = (props: Props) => {
  const { data, isSuccess } = useQuery<IExploreResponse>({
    queryKey: "Explore",
    queryFn: () => getExplore(),
  });

  return (
    <UserProfile Lnavbar={false}>
      {!isSuccess ? (
        <Stack>
          <Flex direction={"row"}>
            <Skeleton height="232px" width={232} borderRadius={30} />
            <Skeleton
              height="232px"
              width={232}
              borderRadius={30}
              marginX={13}
            />
            <Skeleton
              height="232px"
              width={232}
              borderRadius={30}
              marginRight={13}
            />
            <Skeleton height="232px" width={232} borderRadius={30} />
          </Flex>

          <SkeletonCircle size="100" marginTop={5} />
        </Stack>
      ) : (
        <Flex direction={"column"} className="w-full">
          {data.explorePage.map((exploreItem) => (
            <ExploreContainer
              posts={exploreItem.posts}
              user={exploreItem.user}
            />
          ))}
        </Flex>
      )}
    </UserProfile>
  );
};
