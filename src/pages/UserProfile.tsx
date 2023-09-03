import { Container, Flex } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout.tsx";
import RightMenu from "../components/Profile/RightMenu.tsx";
import RightNavbar from "../components/Profile/RightNavbar.tsx";
import { TreeIcon } from "../icons/TreeIcon.tsx";

interface Props  {

}
export const UserProfile = (props: Props) => {
    return (
            <Layout>
                <Container maxW='md'>
            <Flex justifyContent={'space-between'} flexDir={'column'}>
            <RightNavbar  followers={0} following={0} userName="rahnema" avatar={""} />
            <RightMenu className="my-20" />
            <TreeIcon width={189} height={213}  />
            </Flex>
            </Container>
            </Layout>
    );
};