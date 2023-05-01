import { SimpleGrid, Box, Button, Tab, TabPanels, Text, TabList, TabPanel, Tabs, HStack, Center } from '@chakra-ui/react'
import React from 'react'
import HouseCard from './HouseCard'
import { useLoaderData } from 'react-router-dom'
import h1 from '../Assets/Images/houses/h1.png'
import h2 from '../Assets/Images/houses/h2.jpg'
import {TbBeach} from 'react-icons/tb'
import {BsFillEyeFill} from 'react-icons/bs'
import {RiChatPrivateLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'


export default function HousesList() {
    const houses = useLoaderData()
    console.log(houses)
  return (
    <Box>
    <Tabs mt="40px" p="20px" colorScheme="blue.200" variant="enclosed">
        <Center>
        <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}> <HStack> <TbBeach/> <Text> Beach Front </Text></HStack> </Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}> <HStack> <BsFillEyeFill/> <Text> Amazing views </Text></HStack> </Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}> <HStack> <RiChatPrivateLine/> <Text> Private rooms </Text></HStack> </Tab>
        </TabList>
        </Center>
        <TabPanels>
            <TabPanel>
    <SimpleGrid p="10px" minChildWidth="500px" spacing={5}>
        {data1 && data1.map(house =>(
            <HouseCard house={house} />
        ))}
        
    </SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid p="10px" minChildWidth="500px" spacing={5}>
        {data2 && data2.map(house =>(
            <HouseCard house={house} />
        ))}
        
    </SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid p="10px" minChildWidth="500px" spacing={5}>
        {data3 && data3.map(house =>(
            <HouseCard house={house} />
        ))}
        
    </SimpleGrid>
    </TabPanel>
    </TabPanels>
    </Tabs>
    <Box textAlign="right">
    <Link to='/list'>
    <Button position="relative"  mb="10" mr="20" mt="-10" w="10vw" color='white' bgColor="blue.200" variant="solid"> Show More >> </Button>
    </Link>
    </Box>
    </Box>
  )
}

export const houseLoader = async() => {
  const res = await fetch ('http://localhost:3000/Houses')
  
  return res.json()
}

const data1 =  [
    {
        id:1,
        name:"A nice hotel room",
        img: '../Assets/Images/houses/h1.png',
        rating: 3.4,
        beds: 5,
        baths: 2,
        surface: 100,
        price: 150.00
    },
    {
        id:2,
        name:"A nice house with pool",
        img: '../Assets/Images/houses/h2.png',
        rating: 3.8,
        beds: 4,
        baths: 1,
        surface: 150,
        price: 120.00
    },
    {
        id:3,
        name:"hotel room with nice view",
        img: '../Assets/Images/houses/h3.png',
        rating: 4.0,
        beds: 1,
        baths: 1,
        surface: 200,
        price: 85.00
    },
    {
        id:4,
        name:"comfortable hotel room",
        img: '../Assets/Images/houses/h4.webp',
        rating: 4.3,
        beds: 1,
        baths: 1,
        surface: 120,
        price: 95.00
    },
    {
        id:5,
        name:"A house with nice view",
        img: '../Assets/Images/houses/h5.png',
        rating: 3.9,
        beds: 3,
        baths: 2,
        surface: 110,
        price: 122.00
    },
    {
        id:6,
        name:"beautiful and traditional",
        img: '../Assets/Images/houses/h6.png',
        rating: 4.4,
        beds: 6,
        baths: 3,
        surface: 150,
        price: 170.00
    }]
    // {
    //     id:7,
    //     name:"A nice and calm house",
    //     img: '../Assets/Images/houses/h7.png',
    //     rating: 3.6,
    //     beds: 3,
    //     baths: 2,
    //     surface: 200,
    //     price: 130.00
    // },
    // {
    //     id:8,
    //     name:"cozy traditional house",
    //     img: '../Assets/Images/houses/h8.png',
    //     rating: 3.8,
    //     beds: 5,
    //     baths: 2,
    //     surface: 170,
    //     price: 155.00
    // }
    const data2 =  [
    {
        id:1,
        name:"A nice hotel room",
        img: '../Assets/Images/houses/h1.png',
        rating: 3.4,
        beds: 5,
        baths: 2,
        surface: 100,
        price: 150.00
    },
    {
        id:2,
        name:"A nice house with pool",
        img: '../Assets/Images/houses/h2.png',
        rating: 3.8,
        beds: 4,
        baths: 1,
        surface: 150,
        price: 120.00
    },
    {
        id:3,
        name:"hotel room with nice view",
        img: '../Assets/Images/houses/h3.png',
        rating: 4.0,
        beds: 1,
        baths: 1,
        surface: 200,
        price: 85.00
    },
]

const data3 =  [
    {
        id:1,
        name:"A nice hotel room",
        img: '../Assets/Images/houses/h1.png',
        rating: 3.4,
        beds: 5,
        baths: 2,
        surface: 100,
        price: 150.00
    },
    {
        id:2,
        name:"A nice house with pool",
        img: '../Assets/Images/houses/h2.png',
        rating: 3.8,
        beds: 4,
        baths: 1,
        surface: 150,
        price: 120.00
    },
    {
        id:3,
        name:"hotel room with nice view",
        img: '../Assets/Images/houses/h3.png',
        rating: 4.0,
        beds: 1,
        baths: 1,
        surface: 200,
        price: 85.00
    },
        {
        id:5,
        name:"A house with nice view",
        img: '../Assets/Images/houses/h5.png',
        rating: 3.9,
        beds: 3,
        baths: 2,
        surface: 110,
        price: 122.00
    }
]
