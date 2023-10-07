import { FC } from "react";
import { useQuery } from "react-query";
import { getOthersProfile } from "../../api/profile";
import { useParams } from "react-router-dom";
import Public from "../Public";
import Private from "../Private";

const Profile: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getOthersProfile(`${id}`),
  });
  if (isLoading || isError) return <p>Loading ...</p>;
  return (
    <p>
      {!data.isPrivate === false ? (
        <Public />
      ) : (
        <Private postCount={data.postCount} />
      )}
    </p>
  );
};

export default Profile;
