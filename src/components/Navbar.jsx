import { Flex, HStack, Heading, Spacer, Box, Button, Menu, MenuList, MenuButton, Avatar, MenuItem, Divider} from '@chakra-ui/react'
import React, {useState, useEffect}from 'react'
import SearchInput from './SearchInput'
import {BsPersonFill} from 'react-icons/bs'
import{BiLogOutCircle} from 'react-icons/bi'
import avatar from '../Assets/Images/myAvatar.jpg'
import { Link } from 'react-router-dom'
import { BellIcon } from '@chakra-ui/icons'


export default function Navbar() {
    
    
  return (
    // <Flex as="nav" p="10px" alignItems="center">
    //     <Heading as="h1"> Booking </Heading>
    //     <Spacer/>
    //     <HStack spacing="20px">
    //         <Box w="100px" bgColor="gray.300">box</Box>
    //         <Box w="100px" bgColor="gray.300">box</Box>
    //     </HStack>
    // </Flex>

    <Box display="flex" justifyContent="space-around" alignItems="center" bgColor="gray.50" pt="10px" pb="10px"  className='navbar' width="100%" py="20px" position="relative" boxShadow="1px 0.5px 3px rgb(190, 190, 190)" zIndex="10">
    <HStack gap={4}>
    <Link w="250px" to='/'> <Heading as='h1' color="blue.200"> LOGO</Heading></Link>
    <Divider position="relative" border="1px" color="blue.200" height="50px" orientation='vertical'/>
    </HStack>
    <SearchInput/>
    <div style={{ display: "flex", alignItems: "center", alignSelf:'flex-end', marginLeft:"3em" }}>
       
        <Link to ='/create'>
                    <Button variant="outline" cursor="pointer" position="relative" w="max-content" bgColor="white" color='blue.200'> list your property</Button>
        </Link> 
        <BellIcon cursor="pointer" pl="10px" position="relative"  h="10" w="10" color="blue.200"></BellIcon>
        <Menu >
            <MenuButton position="relative">
                <Avatar ml="20px" boxShadow="1px 0.5px 3px rgb(190, 190, 190)" src={avatar} />
            </MenuButton>
            <MenuList>
                <Link to="/">
                    <MenuItem icon={<BsPersonFill />}>
                        View profile
                    </MenuItem>
                </Link>
                <Link to='/' variant="solid"  >
                    <MenuItem icon={<BiLogOutCircle />} >
                        Sign out
                    </MenuItem>
                </Link>

            </MenuList>
        </Menu>
    </div>
    </Box>

  )
}
