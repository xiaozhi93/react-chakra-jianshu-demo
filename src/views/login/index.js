import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Center, Box, Link as ChakraLink, chakra } from '@chakra-ui/react'
import styled from '@emotion/styled'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { ReactComponent as WeiboIcon } from '../../assets/images/weibo-icon.svg';
import { ReactComponent as WeixinIcon } from '../../assets/images/weixin-icon.svg';
import { ReactComponent as QqIcon } from '../../assets/images/qq-icon.svg';

const LoginHeader = styled.div`
  margin-bottom: 50px;
  padding: 10px;
  font-size:18px;
  text-align:center;
  line-height: 1.1;
  color: #969696;
  a {
    padding: 10px;
    font-size:18px;
    color: #969696;
    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }
    &.active {
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
  span {
    padding: 10px;
    font-weight: 700;
  }
`

// function LoginFooter() {
//   return (
//       <Center>
//         <h6>社交帐号登录</h6>
//         <ul>
//           <li>
//             <ChakraLink isExternal>
//               <WeiboIcon />
//             </ChakraLink>
//           </li>
//           <li>
//             <ChakraLink isExternal>
//               <WeixinIcon />
//             </ChakraLink>
//           </li>
//           <li>
//             <ChakraLink isExternal>
//               <QqIcon />
//             </ChakraLink>
//           </li>
//         </ul>     
//       </Center>
//   )
// }
export default function Login() {
  return (
      <Box bg="#ffffff" w="400px" p="50px" pb="30px" borderRadius="4px" boxShadow="0 0 8px rgba(0,0,0,.1)">
        <LoginHeader>
          <NavLink to="/sign_in" activeClassName="active">登录</NavLink>
          <span>·</span>
          <NavLink to="/sign_up" activeClassName="active">注册</NavLink>
        </LoginHeader>
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
  )
}