import React from 'react'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import {TbBeach, TbTree} from 'react-icons/tb'
import {BsFillEyeFill} from 'react-icons/bs'
import {RiChatPrivateLine} from 'react-icons/ri'
import {MdCabin} from 'react-icons/md'
import {TbTrees} from 'react-icons/tb'
import {AiOutlineHome} from 'react-icons/ai'


export default function Sidebar() {
  return (
    <List  textColor="gray.500" fontSize='1.25rem' position="fixed" pt=" 10" spacing={5}>
        <ListItem _hover={{backgroundColor: "white", width: "500px"}} >
            
            <NavLink to='#'>
                <ListIcon as={TbBeach}/>
                Beach front
            </NavLink>
        </ListItem >
        <ListItem _hover={{backgroundColor: "white", width: "500px"}}>
            <NavLink to='#'>
                <ListIcon as={TbTree}/>
                country side
            </NavLink>
        </ListItem>
        <ListItem _hover={{backgroundColor: "white", width: "500px"}}>
            <NavLink to='#'>
                <ListIcon as={RiChatPrivateLine}/>
                private rooms
            </NavLink>
        </ListItem>
        <ListItem _hover={{backgroundColor: "white", width: "500px"}}>
            <NavLink to='#'>
                <ListIcon as={MdCabin} />
                cabins
            </NavLink>
        </ListItem>
        <ListItem _hover={{backgroundColor: "white", width: "500px"}}>
            <NavLink to='#'>
                <ListIcon as={AiOutlineHome} />
                tiny homes
            </NavLink>
        </ListItem>
        <ListItem _hover={{backgroundColor: "white", width: "500px"}}>
            <NavLink to='#'>
                <ListIcon as={BsFillEyeFill}/>
                amazing views
            </NavLink>
        </ListItem>
    </List>
  )
}
