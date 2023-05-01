import React from 'react'
import { Box, Card, CardBody, CardFooter, Text, CardHeader, Image, Heading, VStack, Flex, Button, Divider } from '@chakra-ui/react'
import berlin from "../Assets/Images/berlin.jpg"
import { Link } from 'react-router-dom'

export default function CityCard({name, img, available, description}) {
  return (
    <Box>
        <Card  width="350px" height="320px" m="10"  bgColor="white" boxShadow="1px 0.5px 3px rgb(190, 190, 190)" variant="outline" >
            <Image height="150px"  src={img}></Image>
            <Flex alignContent="center" justifyContent="space-around" >
                
                <VStack >
                <Heading as='h2' color="blue.200" fontSize="2rem" fontWeight="600" > {name}</Heading>
                <Text  fontWeight="500"  color="gray.700" >{available} available</Text>
                
                </VStack>
                <Link to="/">
                <Button color="blue.200" mt="20px"  borderColor="blue.200" variant="outline" > More >> </Button>
                </Link>
                </Flex>
                <Divider mt="3" borderWidth="2px" bgColor="gray.200"></Divider>
                <Box h="100%" bgColor="gray.50">
                <Text overflow="hidden" pl="10px" fontWeight="500"  color="gray.500">{description}</Text>
                </Box>
        </Card>
        
    </Box>
  )
}
