import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

import CityCard from './CityCard';

export default function TopPlaces({cities}) {
    console.log(cities)
    
  return (
    <Box>
        <Box>
            <Heading  textAlign='center' fontWeight="700" position="relative" fontSize="2.25rem" lineHeight="2.5rem" as="h1"> Top Places To visit</Heading>
        </Box>
        <Box  w="100%" mt="45px">
            <Swiper
                watchSlidesProgress={true} 
                
                pagination={{ clickable: true }}  
                watchSlidesVisibility={true} 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                freeMode={true}
                breakpoints={{
                "640": {
  "slidesPerView": 1.5,
  "spaceBetween": 10
},
"768": {
  "slidesPerView": 1.2,
  "spaceBetween": 20
},
"1024": {
  "slidesPerView": 2.5,
  "spaceBetween": 30
},
"1440": {
  "slidesPerView": 3.1,
  "spaceBetween": 30
},
"1500": {
  "slidesPerView": 3.2,
  "spaceBetween": 30
},
"1800": {
  "slidesPerView": 4.4,
  "spaceBetween": 30
},
"1920": {
  "slidesPerView": 4.7,
  "spaceBetween": 30
},
"2560": {
  "slidesPerView": 5.3,
  "spaceBetween": 30
}
            }} >
                {/* <SwiperSlide><CityCard/></SwiperSlide>
                <SwiperSlide><CityCard/></SwiperSlide>
                <SwiperSlide><CityCard/></SwiperSlide>
                <SwiperSlide><CityCard/></SwiperSlide>
                <SwiperSlide><CityCard/></SwiperSlide>
                <SwiperSlide><CityCard/></SwiperSlide> */}
                {cities.map((el) => (
                    <SwiperSlide><CityCard name={el.name} description={el.description} available={el.available} img={el.img} swiper={true} /></SwiperSlide>
                ))}
            </Swiper>
            
        </Box>
    </Box>
  )
}


