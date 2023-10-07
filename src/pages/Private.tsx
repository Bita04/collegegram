import React from "react";
import { UserProfile } from "./UserProfile";
import { PrivatePage } from "../components/Privatee/PrivatePage";
interface PrivateProps {
  postCount: number;
}
const Private = (props: PrivateProps) => {
  return (
    <UserProfile hasLNavbar={false}>
      <PrivatePage data={props.postCount} />
    </UserProfile>
  );
};

export default Private;
