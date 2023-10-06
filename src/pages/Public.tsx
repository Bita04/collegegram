import React from "react";
import { UserProfile } from "./UserProfile";
import PublicPage from "../components/Publicc/PublicPage"
const Block = () => {
  return (
    <UserProfile hasLNavbar={false}>
      <PublicPage data={10} />
    </UserProfile>
  );
};

export default Block;
