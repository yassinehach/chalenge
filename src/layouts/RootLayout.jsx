import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react'

export default function RootLayout() {

  return (
    <section>
    <Navbar/>
    <Outlet/>
    </section>
    // <Grid  templateRows="repeat(6,1fr)" bg="gray.50">
        
    //     <GridItem
    //     as="header"
    //     rowSpan={1}
    //     bgColor="white"
    //     p="40px">        
    //       <Navbar />          
    //     </GridItem>
    //     <GridItem as="main" rowSpan={5}>
    //     <Grid templateColumns="repeat(12, 1fr)">
    //         <GridItem
    //         as="aside"
    //         colSpan={2}
    //         bg="blue.300" 
    //         minHeight= "100vh"
    //         p="20px"
            

    //         >
    //             <Sidebar/>
    //         </GridItem>
    //         <GridItem
    //         as="outlet"
    //         colSpan={10}
    //         p="20px"
    //         ><Outlet /></GridItem>
    //     </Grid></GridItem>
        /* <GridItem
        as="main"
        
        rowSpan={5}
        
        
        p={{base: '20px', lg: '30px'}}>
            <Flex gap="4">
            <GridItem
            as="aside"
            colSpan={2}
            bg="blue.300" 
            minHeight= "100vh"
            p="20px"
            ml="-10"
            mt="-10"

            >
                <Sidebar/>
            </GridItem>
            <GridItem
            as="outlet"
            colSpan={4}
            ><Outlet /></GridItem>
            </Flex>
        
        </GridItem> */
    //</Grid>
  )
}
