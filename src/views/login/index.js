import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Center, Box, Link as ChakraLink } from '@chakra-ui/react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Logo from './Logo'
import { ReactComponent as WeiboIcon } from '../../assets/images/weibo-icon.svg';
import { ReactComponent as WeixinIcon } from '../../assets/images/weixin-icon.svg';
import { ReactComponent as QqIcon } from '../../assets/images/qq-icon.svg';
export default function Login() {
  return <Box h="100vh" pos="relative" bg="#f1f1f1" p>
    <Logo/>
    <Center h="100%">
      <Box bg="#ffffff" w="400px" p="50px" pb="30px" borderRadius="4px" boxShadow="0 0 8px rgba(0,0,0,.1)">
        <Center p="10px" mb="50px">
          <Link to="/sign_in" p="10px" color="#969696" fontSize="18px">登录</Link>
          <span>.</span>
          <Link to="/sign_up" p="10px" color="#969696" fontSize="18px">注册</Link>
        </Center>
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
        {/* <Center>
          <h6>社交帐号登录</h6>
          <ul>
            <li>
              <ChakraLink isExternal>
                <WeiboIcon />
              </ChakraLink>
            </li>
            <li>
              <ChakraLink isExternal>
                <WeixinIcon />
              </ChakraLink>
            </li>
            <li>
              <ChakraLink isExternal>
                <QqIcon />
              </ChakraLink>
            </li>
          </ul>     
        </Center> */}
      </Box>
    </Center>
  </Box>
}