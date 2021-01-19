import React from 'react'
import { Center, Box } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"
import LogoImage from '../assets/images/logo.png'
export default function LoginLayout(props) {
  return <Box h="100vh" pos="relative" bg="#f1f1f1" p>
    <Image w="100px" pos="absolute" top="50" left="50" src={LogoImage} />
    <Center h="100%">
      { props.children }
    </Center>
  </Box>
}