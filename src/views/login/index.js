import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Center, Box } from '@chakra-ui/react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Login() {
  return <Box h="100vh" bg="#f1f1f1">
    <Center h="100%">
      <Box bg="#ffffff" w="400px" p="50px" pb="30px" borderRadius="4px" boxShadow="0 0 8px rgba(0,0,0,.1)">
        <Box p="10px" mb="50px">
          <Link to="/sign_in">登录</Link>
          <Link to="/sign_up">注册</Link>
        </Box>
        <Box>
          <Switch>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/sign_up">
              <SignUp />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Center>
  </Box>
}