import React from "react";
import { UserProfile } from "./UserProfile";
import MyUsersExplore from "../components/MyUsersExplore/MyUsersExplore";

const MyExpolre = () => {
  return (
    <UserProfile hasLNavbar={false}>
      <MyUsersExplore />
    </UserProfile>
  );
};

export default MyExpolre;
