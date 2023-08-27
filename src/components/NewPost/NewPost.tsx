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
    Flex,
    Input
  } from '@chakra-ui/react'
  import plusSvg from "/assets/images/plus.svg";import InputText from '../ui/input/InputText';
  type Props = {
    




    
};
import { Switch } from '@chakra-ui/react'

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
          <ModalBody className='flex flex-col gap-[32px]'>
            <Flex className=' items-center gap-[16px] mt-[46px]'>
                <img src={plusSvg} alt='' />
                <Text className='text-[#C19008] text-[16px] font-bold leading-[20px]'>بارگذاری عکس ها</Text>
            </Flex>
            <Flex id='images-container'>


            </Flex>
            <Flex className='flex flex-col gap-[8px]'>
              <Text className='text-[16px] text-[#17494D] font-medium'>توضیحات</Text>
              <textarea className='w-[100%] px-[13px] py-[12px] resize-none h-[100px] border-[1px] border-[#17494D] bg-[#F3F0EE] rounded-[8px]'></textarea>
            </Flex>
            <Flex className='flex flex-col gap-[8px]'>
              <Text className='text-[16px] text-[#17494D] font-medium'>تگ ها</Text>
              <Input borderColor='#17494D'></Input>
            </Flex>
            <Flex className='flex  items-center gap-[15px] flex-row-reverse'>
            <Text className='text-[#17494D] text-[14px] font-medium' >فقط نمایش به دوستان نزدیک</Text>

            <Switch colorScheme='brand' size='lg' />
            </Flex>
          </ModalBody>

          <ModalFooter>
          <Button type="submit" onClick={onClose}>
            پشیمون شدم

           </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
            
        </div>
    );
};