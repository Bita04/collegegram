import { FC } from "react";
import { useQuery } from "react-query";
import { getOthersProfile } from "../../api/profile";
import { useParams } from "react-router-dom";
import Public from "../Public";
import Private from "../Private";
import UsersCard from "../../components/UsersCard/UsersCard";
import { Flex } from "@chakra-ui/react";
import blockApi from "../../api/blockApi"

// type OthersProfile = {
//   username: string;
//   firstName: string;
//   lastName: string;
//   postCount: number;
//   followerCount: number;
//   followingCount: number;
//   avatar: string;
//   bio: string;
//   isPrivate: boolean;
// };

const Profile: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getOthersProfile(`${id}`),
  });

  if (isLoading || isError) return <p>Loading ...</p>;

  if (isSuccess)
    return (
      <Flex>
        <UsersCard data={data}/>
        <p>
          {!data.isPrivate === false ? (
            <Public />
          ) : (
            <Private postCount={data.postCount} />
          )}
        </p>
      </Flex>
    );
};

export default Profile;
