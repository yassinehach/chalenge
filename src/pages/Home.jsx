import { Heading, Grid, Box, Divider, Center, GridItem } from '@chakra-ui/react'
import React from 'react'
import HowItWork from '../components/HowItWork'
import Welcome from '../components/Welcome'
import TopPlaces from '../components/TopPlaces'
import CityCard from '../components/CityCard'
import { useLoaderData } from "react-router-dom"
import HouseCard from '../components/HouseCard'
import HousesList, {houseLoader} from '../components/HousesList'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Home() {
    
    const cities = useLoaderData()
    
  return (
    <Box>
        
        <Welcome/>        
            <Center pt="2rem" pb="2rem" height="75px">
            <Divider borderRadius="10" borderWidth="2px"  width="90%"></Divider>
            </Center>       
        <HowItWork/>
        <Center pt="2rem" pb="2rem" height="75px">
            <Divider borderRadius="10" borderWidth="2px"  width="90%"></Divider>
        </Center> 
        <TopPlaces cities={cities} />
        
                
               
                
                
            
        <Box pt="20px" bgColor="gray.50">
        
        <HousesList />
        
        </Box>
        
    </Box>
    
  )
}
export const cityLoader = async() => {
  const res = await fetch('http://localhost:3000/Cities')
  
//   console.log(res.json())
//   console.log(res2.json())
  return res.json()
}
