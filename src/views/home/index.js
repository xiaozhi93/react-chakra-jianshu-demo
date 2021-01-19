import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Spacer, Box, Button } from '@chakra-ui/react'

export default function Home() {
  return <Flex>
  <Box p="2">
    <Heading size="md">简书</Heading>
    </Box>
    <Spacer />
    <Box>
      <Link to="/sign_up">
        <Button colorScheme="teal" mr="4">
          登录
        </Button>
        </Link>
        <Link to="/sign_in">
          <Button colorScheme="teal">注册</Button>
        </Link>
    </Box>
  </Flex>
}