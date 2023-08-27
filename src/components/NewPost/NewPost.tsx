// @flow 
import * as React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Flex
  } from '@chakra-ui/react'
  import plusSvg from "/assets/images/plus.svg";  type Props = {
    




    
};
export const NewPost = (props: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    return (
        <div>
             <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal size='xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='#F3F0EE' className=' rounded-[24px] py-[38px]' >
          <ModalHeader className='flex flex-row justify-center text-[#17494D]'>افزودن پست</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex className=' items-center gap-[16px] mt-[46px]'>
                <img src={plusSvg} alt='' />
                <Text className='text-[#C19008] text-[16px] font-bold leading-[20px]'>بارگذاری عکس ها</Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
            
        </div>
    );
};