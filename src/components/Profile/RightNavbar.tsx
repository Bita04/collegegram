import {
  Card,
  CardBody,
  Text,
  Image,
  Divider,
  Stack,
  WrapItem,
  Avatar,
  Flex,
  Center,
} from "@chakra-ui/react";
import "../../App.css";
import person from "/assets/images/person.png";
import edit from "/assets/images/edit.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { EditProfile } from "../EditProfile/EditProfile";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  avatar: string;
  followers: number;
  following: number;
  userName: string;
}
type prop = {};

const RightNavbar = ({
  avatar = person,
  followers = 0,
  following = 0,
  userName = "@mahmz",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const onClose: any(isOpen: any)=>{
  //   return setIsOpen(false)
  // }
  return (
    <>
      <EditProfile isOpen={isOpen} />
      <Card maxW="sm" height={403} width={256} className="profile-card">
        <CardBody>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <WrapItem style={{ marginTop: "10px" }}>
              <Avatar size="2xl" name="Segun Adebayo" src={avatar} />
            </WrapItem>
            <Stack mt="6" spacing="5">
              <Flex justifyContent={"center"}>
                <Text fontSize={14} className={"color-primary"}>
                  <ChevronDownIcon boxSize={6} />
                  {userName}
                </Text>
              </Flex>
              <Flex
                fontSize={14}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <Text className={"color-secondary"}>
                  {following} دنبال کننده
                </Text>
                <Center height={15}>
                  <Divider
                    mx={3}
                    className={"card-divider"}
                    orientation="vertical"
                  />
                </Center>
                <Text className={"color-secondary"}>
                  {followers} دنبال شونده
                </Text>
              </Flex>
              <Flex mt={5} alignSelf={"center"}>
                {/*Changed (a) tag to (Button)*/}
                <Button>
                  <Image
                    className=""
                    src={edit}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  ></Image>
                </Button>
              </Flex>
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default RightNavbar;
