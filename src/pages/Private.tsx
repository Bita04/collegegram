import React from "react";
import { UserProfile } from "./UserProfile";
import {PrivatePage} from "../components/Privatee/PrivatePage"
import UsersCard from "../components/UsersCard/UsersCard";
const Block = () => {
  return (
    <UserProfile hasLNavbar={false}>
      <PrivatePage />
      <UsersCard colorScheme="#C38F00" />
    </UserProfile>
  );
};

export default Block;
