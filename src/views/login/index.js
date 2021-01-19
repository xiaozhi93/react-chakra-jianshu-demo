import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import { Box, Link as ChakraLink } from '@chakra-ui/react'
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

const LoginFooter = styled.div`
  margin-top:50px;
  h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align:center;
    &:before, &:after {
      content: "";
      border-top: 1px solid #b5b5b5;
      display: block;
      position: absolute;
      width: 60px;
      top: 8px;
    }
    &:before {
      left:30px;
    }
    &:after {
      right: 30px
    }
  }
  ul {
    margin-bottom:10px;
    list-style: none;
    text-align:center;
  }
  li {
    margin: 0 5px;
    display: inline-block;
    a {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon {
      width: 28px;
      height:28px;
      margin:0;
    }
  }

`
export default function Login() {
  const matchLogin = useRouteMatch({
    path: '/sign_in',
    exact: true
  })
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
        <LoginFooter>
          <h6>社交帐号登录</h6>
          <ul>
            {
              matchLogin && (<li>
              <ChakraLink isExternal>
                <WeiboIcon />
              </ChakraLink>
            </li>)
            }
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
        </LoginFooter>
      </Box>
  )
}