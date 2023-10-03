import React from "react";
import { UserProfile } from "./UserProfile";
import MyUsersExplore from "../components/MyUserExplore/MyUserExplore";

const MyExpolre = () => {
  return (
    <UserProfile hasLNavbar={false}>
      <MyUsersExplore />
    </UserProfile>
  );
};

export default MyExpolre;
