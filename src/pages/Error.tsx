import { Container } from "@chakra-ui/react";
import React from "react";
import { TreeIconWithoutLeaf } from "../icons/TreeIconWithoutLeaf";
import { Footer } from "../components/Footer/Footer";
import ButtonText from "../components/ui/button/Button";

type Props = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};

function Error(props: Props) {
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom="20"
      >
        <h1 className="text-5xl font-black my-5 color-secondary">
          {props.title}
        </h1>
        <h2 className="my-5 text-2xl font-black color-secondary">
          {props?.subTitle}
        </h2>
        <p className="leading-loose color-secondary font-medium">
          {props.children}
        </p>
        <ButtonText
          className="btn-g btn-primary my-9 color-secondary"
          type="button"
        >
          بازگشت به صفحه قبل
        </ButtonText>
      </Container>
      <Footer>
        <TreeIconWithoutLeaf />
      </Footer>
    </>
  );
}

export default Error;
