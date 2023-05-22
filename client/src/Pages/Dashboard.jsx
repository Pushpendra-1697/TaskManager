import { Box, Button, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { addBug } from '../redux/BugTracker/bug.action';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const [name, setTaskName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();


  const handleSubmit = () => {
    dispatch(addBug({ name }));
    setTaskName('');
  };


  if (localStorage.getItem('token') === null) {
    return <Navigate to='/login' />
  };
  return (
    <>
      <Box display={'grid'} gridTemplateColumns={"repeat(4,1fr)"} w='90%' m='auto' gap={'2%'}>

        <Box bg='aliceblue' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" border={'1px solid black'} >
          <Heading textAlign={'center'} padding={'3px'} bg='blackAlpha.100' fontSize={'22px'}>List 1</Heading>
        </Box>

        <Box bg='aliceblue' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" border={'1px solid black'}>
          <Heading bg='blackAlpha.100' textAlign={'center'} padding={'3px'} fontSize={'22px'}>List 2</Heading>
        </Box>

        <Box bg='aliceblue' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" border={'1px solid black'}>
          <Heading bg='blackAlpha.100' textAlign={'center'} padding={'3px'} fontSize={'22px'}>List 3</Heading>
        </Box>

        <Box bg='aliceblue' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" border={'1px solid black'}>
          <Heading bg='blackAlpha.100' textAlign={'center'} padding={'3px'} fontSize={'22px'}>Create New List</Heading>
          <Text onClick={onOpen} display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'58px'} padding={'10px'} bg='white'>+</Text>
        </Box>

      </Box>

      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Task Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input w='200px' placeholder='Enter Task' value={name} onChange={(e) => setTaskName(e.target.value)} type='text' />
              <Button variant={'outline'} bg='black' color={'white'} onClick={handleSubmit}>Submit</Button>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Dashboard;
