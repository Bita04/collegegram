import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex ,Text, WrapItem, Avatar } from "@chakra-ui/react";
import BlockIcon from "../../../public/assets/icons/BlockIcon";


type Props={
    name?:string;
    followers?:number;
    isOpen:boolean;
    onClose:()=>void;
}
export const BlockModal = (props:Props)=> {

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex justify-center">
            <Flex direction={"column"}>
              <BlockIcon />
              <Text>بلاک</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WrapItem className="flex-row">
              <Flex direction={"column"}>
                <Text className="flex-row">{"بیتا بهادری"}</Text>
                <Text className="flex-row">{10} دنبال‌کننده</Text>
              </Flex>
              <Avatar
                size="xl"
                name="Profile"
                backgroundColor={"pink"}
                className="mr-[60%] "
              />
            </WrapItem>
            <WrapItem>
              <h1>مطمئنی می‌خوای متین رو بلاک کنی؟</h1>
              <Text>
                اگر بلاکش کنی دیگه نمی‌تونه بهت پیام بده و پست‌هات رو ببینه.
                قابلیت لایک کردن و کامنت گذاشتن زیر پست‌های تو هم براش مسدود
                میشه.
              </Text>
            </WrapItem>
          </ModalBody>

          <ModalFooter>
            <Button
              className=" rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal "
              mr={3}
              onClick={props.onClose}
            >
              نه پشیمونم
            </Button>
            <Button
              variant="ghost"
              className="bg-[#C19008] rounded-[16px] text-[14px] py-[8px] px-[16px] font-normal "
              color={"white"}
            >
              آره، حتما
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
