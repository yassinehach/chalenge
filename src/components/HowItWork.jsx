import { Heading, Box, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import howItWorkImg from "../Assets/Images/howitwork.jpg"

export default function HowItWork() {
  return (
    <Box alignItems="center">
        <Heading  textAlign='center' fontWeight="700" position="relative" fontSize="2.25rem" lineHeight="2.5rem" as="h1"> How it Works</Heading>
        <Text mt="0.75rem" fontSize="1.5rem" lineHeight="1.75rem" position="relative" fontWeight="400" textAlign="center" color="gray.500"> Keep calm & travel on</Text>
        <Image p="50" src={howItWorkImg} ></Image>
        <Grid justifyContent="space-between" templateColumns="repeat(3, 1fr)" >
            <GridItem p="50" textAlign="center"  colSpan={1}>
                
                <Heading fontSize="1.75rem" lineHeight="1.75rem" fontWeight="700" as="h2">Smart Search</Heading>
                <Text mt="1.25rem" color="gray.500" fontSize="1.125rem" lineHeight="1.5rem"> Name the area or type of home you are looking for the search bar. Our app will find you the perfect match.</Text>
                
            </GridItem>
            <GridItem p="50" textAlign="center" colSpan={1}>
                <Heading fontSize="1.75rem" lineHeight="1.75rem" fontWeight="700" as="h2" >Choose property</Heading>
                <Text mt="1.25rem" color="gray.500" fontSize="1.125rem" lineHeight="1.5rem"> From the number of options our app will provide, you can select any property that you like to explore.</Text>

            </GridItem>
            <GridItem p="50" textAlign="center" colSpan={1}>
                <Heading fontSize="1.75rem" lineHeight="1.75rem" fontWeight="700" as="h2">Book you property</Heading>
                <Text mt="1.25rem" color="gray.500" fontSize="1.125rem" lineHeight="1.5rem"> Find a home or space from our search bar. Enter your specific location, property type and price range.</Text>

            </GridItem>
        </Grid>
    </Box>
  )
}
