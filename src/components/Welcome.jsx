import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import homeImg from "../Assets/Images/homeCover.webp"

export default function Welcome() {
  return (
    <Box display="inline-flex">
        <Image pl="3rem" position="static" zIndex="1" src={homeImg} ></Image>
        <Box alignItems="center" w="55vw" right="0" position="static" ml="-5rem" zIndex="2" pt="5rem" alignSelf="center"   height="20rem" bgColor="blue.200">
            <Text ml="-7rem" fontSize="6xl" fontWeight="700"  color="white">Find Your Best Smart Property</Text>
        </Box>
    </Box>
    
  )
}
