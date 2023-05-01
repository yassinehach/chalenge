import React from 'react'
import { FormControl, Button, Stack, Checkbox, Box, Input, FormHelperText, FormLabel, Heading, Text, Textarea,   RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Select, Flex, useToast } from '@chakra-ui/react'
import { Form, Link } from 'react-router-dom'
import { CheckIcon } from '@chakra-ui/icons'

export default function Create() {
    const toast = useToast()
    const showToast = () => {
        toast({
            title: "article creation",
            description: 'successfully created an article',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <CheckIcon/>
        })
    }
  return (
    <Box  pt="10" pl="20" alignContent="center" pr="20" >
        
        <Form ><Flex gap={20} justifyContent="space-around">
            <Box  w="100%">
            <FormControl mb="40px" isRequired="true">
                <FormLabel>Name of the article :</FormLabel>
                <Input Type="text" name="name" placeholder='enter a descriptive name'></Input>
                
            </FormControl>
            <FormControl mb="40px">
                <FormLabel>Article description :</FormLabel>
                <Textarea placeholder='enter a detailed description about the article...' name="description"></Textarea>
            </FormControl>
        
        <FormControl mb='40px'>
            <FormLabel>Article Type :</FormLabel>
            <Select placeholder='select type'>
                <option value='option1'> House </option>
                <option value='option2'> Cabin </option>
                <option value='option3'> Appartement</option>
                <option value='option4'> Hotel </option>
                <option value='option5'> Motel </option>
            </Select>
        </FormControl>
        <FormControl mb="40px">
            <FormLabel> Price Range :</FormLabel>
            <RangeSlider  min={0} max={500} aria-label={['min', 'max']} defaultValue={[50, 180]}>
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
                </RangeSlider>
        </FormControl>
        </Box>
        <Box width="100%">
            <FormControl mb="40px">
                <FormLabel> Location : </FormLabel>
                <Input type="text" name="location" placeholder='enter the location'></Input>
            </FormControl>
            <FormControl mb="40px">
                <FormLabel>Amenities :</FormLabel>
                    <Stack spacing={5} direction='row'>
                        <Checkbox colorScheme='blue' defaultChecked>
                            <Text color="black">Electricity</Text>
                        </Checkbox>
                        <Checkbox colorScheme='blue' defaultChecked>
                            Water
                        </Checkbox>
                        <Checkbox colorScheme='blue' defaultChecked>
                            Internet Access
                        </Checkbox>
                        <Checkbox colorScheme='blue' defaultChecked>
                            temperature regulation systems
                        </Checkbox>
                    </Stack>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Images :
                </FormLabel>
            </FormControl>
        </Box>
        </Flex>
        <Box  textAlign="center">
        <Link to='/'>
        <Button box w="20vw" onClick={showToast} bgcolor="blue.200"  boxShadow="1px 0.5px 3px rgb(190, 190, 190)"  variant="outline"> <Text fontSize="1.25rem" fontWeight="bold" color="blue.200">Submit</Text></Button>
        </Link>
        </Box>
        </Form>
    </Box>
  )
}
