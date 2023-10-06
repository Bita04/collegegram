import React from "react";
import { UserProfile } from "./UserProfile";
import {PrivatePage} from "../components/Privatee/PrivatePage"
import UsersCard from "../components/UsersCard/UsersCard";
import person from "../../public/assets/images/person.svg"
const Block = () => {
  return (
    <UserProfile hasLNavbar={false}>
      <PrivatePage data={10}  />
    </UserProfile>
  );
};

export default Block;
