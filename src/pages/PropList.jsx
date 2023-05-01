import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import ListProp from '../components/ListProp'

export default function PropList() {
  return (
    <Grid templateColumns='repeat(12, 1fr)'>
        <GridItem
        as='aside'
        colSpan={2}
        bgColor="gray.50"
        minHeight="100vh"
        p="20px"
        >
            <Sidebar/>

        </GridItem>
        <GridItem
        as="main"
        colSpan={10}
        p="30px">
            <ListProp/>
        </GridItem>

    </Grid>
  )
}
