import React from 'react'
import { Image } from "@chakra-ui/react"
import LogoImage from '../../assets/images/logo.png'
export default function Logo() {
  return (
    <Image w="100px" pos="absolute" top="50" left="50" src={LogoImage} />
  )
}