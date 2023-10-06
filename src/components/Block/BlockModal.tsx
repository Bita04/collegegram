import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter ,Text } from '@chakra-ui/react';
import React from 'react';
import BlockIcon from '../../../public/assets/icons/BlockIcon';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const BlockModal = (props:Props) => {
  return (
    <>
      <Button onClick={props.onClose}>Open Modal</Button>

      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='flex-col flex justify-center'>
            <BlockIcon/>
            <Text>بلاک</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default BlockModal;