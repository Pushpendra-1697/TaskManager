import { Box, Heading, Img } from '@chakra-ui/react';
import React from 'react'

const Home = () => {
  return (
    <Box textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center" flexDirection={"column"}>
        <Heading mb="10px">Welcome to Task Manager App</Heading>
        <Img height={"400px"} w="500px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-C0J1czMXGlvhiDr1qbTXq74AILp2uspNPw&usqp=CAU' alt='bug profile' />
    </Box>
  );
}

export default Home;