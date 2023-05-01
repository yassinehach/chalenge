import React from 'react'
import { Icon, Box, Card, Text, Flex, Grid, GridItem, Image, Heading, HStack, Button } from '@chakra-ui/react'
import hotelRoom from "../Assets/Images/houses/h2.jpg"
import {BsHeart} from 'react-icons/bs'
import {BiBed, BiBath} from "react-icons/bi"
import {ImEnlarge} from 'react-icons/im'
import {StarIcon} from '@chakra-ui/icons'


export default function HouseCard({house}) {
    
  return (
    <Box>
        <Card width="550px" height="200px" m="10" boxShadow="1px 0.5px 3px rgb(190, 190, 190)" variant="outline" >
            <Flex p='10px' justifyContent="space-between" gap={4} >
                <Box>
                    <Image  borderRadius="2xl" boxShadow="1px 0.5px 3px rgb(190, 190, 190)" position="relative" height="175px" width="225px"  src={hotelRoom} ></Image>
                </Box>
                <Box>
                    <HStack pt="10px" spacing="130px">
                    <Text  fontSize="1.5rem" lineHeight="1.5rem" fontWeight="bold"  > {house.name}</Text>
                    <BsHeart h="100px"/>                    
                    </HStack>
                    <HStack pt="30px" spacing="30px">
                        <HStack>
                            <BiBed></BiBed>
                            <Text color="gray.500" > {house.beds} beds</Text>
                        </HStack>
                        <HStack>
                            <BiBath></BiBath>
                            <Text color="gray.500" > {house.baths} baths</Text>
                        </HStack>
                        <HStack>
                            <ImEnlarge></ImEnlarge>
                            <Text color="gray.500"> {house.surface}  m²</Text>
                        </HStack>
                    </HStack>
                    <HStack pt="10px" justifyContent="space-between" >
                        <HStack>
                            <StarIcon color="gold" />
                            <Text>{house.rating}</Text>
                        </HStack>
                        <Text fontWeight="bold" > €{house.price} </Text>
                        <Button color="blue.200" variant="outline"> See more</Button>
                    </HStack>
                    

                </Box>
            </Flex>
        </Card>
    </Box>
  )
}
