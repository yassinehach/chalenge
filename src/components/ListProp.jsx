import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import HouseCard from './HouseCard'

export default function ListProp() {
  return (
    <SimpleGrid p="10px" minChildWidth="500px" spacing={5}>
        {data && data.map(house =>(
            <HouseCard house={house} />
        ))}
        
    </SimpleGrid>
  )
}

const data =  [
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
    },
    {
        id:7,
        name:"A nice and calm house",
        img: '../Assets/Images/houses/h7.png',
        rating: 3.6,
        beds: 3,
        baths: 2,
        surface: 200,
        price: 130.00
    },
    {
        id:8,
        name:"cozy traditional house",
        img: '../Assets/Images/houses/h8.png',
        rating: 3.8,
        beds: 5,
        baths: 2,
        surface: 170,
        price: 155.00
    }
    ]
