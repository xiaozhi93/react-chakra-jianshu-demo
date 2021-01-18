import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Container, Box } from '@chakra-ui/react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Login() {
  return <Container>
    <Link to="/sign_in">登录</Link>
    <Link to="/sign_up">注册</Link>
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
  </Container>
}