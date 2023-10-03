import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { getPosts } from "../../api/appApi";
import { useEffect, useState } from "react";
type Posts = {
    "posts": [],
    "nextOffset": string,
    
};

type Post = {
    "photos": string [],
    "description" ?: string,
    "closeFriends": boolean,
    "createdAt": string,
    "tags": [
        
    ]
}
export const PostContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts(10, 0, true).then((res) => {
      setPosts(res.posts);
    });
  }, []);
  console.log(posts);

  return (
    <Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]   bg-white">
      {posts?.map((post) => (
        <Flex className="w-[232px] h-[232px] bg-black rounded-t-[24px]">
          <img
            className="w-[232px] rounded-t-[24px] h-[232px]"
            src={post.photos[0]}
            alt=""
          />
        </Flex>
      ))}
    </Flex>
  );
};
