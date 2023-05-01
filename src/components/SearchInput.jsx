import React, { useContext } from 'react';
import searchInput from '../Assets/Icons/searchLogo.jpg'

import { useDisclosure } from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    InputGroup,
    Input,
    InputRightElement,
    Box,
    ModalBody,
} from "@chakra-ui/react"


const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <div className="searchBar" onClick={onOpen} style={{width: "max-content", position: "relative"}}>
                <input type='text' style={{width: "25vw", flex: "2", height: "43px", borderRadius: '20px', outline: "none", border: "none", boxShadow: "1px 1px 5px rgb(212, 212, 212)", paddingLeft: "25px" }}/>
                <img src={searchInput} alt="searchLogo" style={{ position: "absolute", right: "17px", height: "22px", objectFit: "contain", top: "10px" }} />
            </div>
            <div>

            </div>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <InputGroup>
                            <Input placeholder="" borderRadius="3xl" focusBorderColor="red" />
                            <InputRightElement children={<img width="20px" src={searchInput} alt="searchLogo" />} />
                        </InputGroup>
                    </ModalHeader>
                    <ModalBody>
                        <Box className="hotels" >
                            
                        </Box>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>

    )
}

export default SearchInput
