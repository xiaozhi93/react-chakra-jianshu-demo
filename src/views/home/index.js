import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Text } from '@chakra-ui/react'

export default function Home() {
  return <Container>
    <Box>
      <Text>
        <Link to="/sign_in">登录</Link>
        <Link to="/sign_up">注册</Link>
      </Text>
    </Box>
  </Container>
}