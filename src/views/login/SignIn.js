import React, { useState } from 'react'
import  { Formik,Form, Field }  from 'formik'
import * as Yup from 'yup'
import { Checkbox, Button, Menu, MenuButton, MenuList, MenuItem, Flex, useToast } from '@chakra-ui/react'
import { FaLock, FaUser } from 'react-icons/fa'
import { FormControl } from './FormControl'
import { signIn } from '../../services/user'

export default function SignIn() {
  const toast = useToast({status: "error", position: "top"})
  // 状态
  const [loading, setLoading] = useState(false)
  // 表单初始值
  const user = {
    email: '',
    password: ''
  }
  // 表单校验
  const validateSchema = Yup.object().shape({
    email: Yup.string().email('请输入正确的邮箱').required('请输入邮箱'),
    password: Yup.string().min(6,'密码长度不能小于6').required('请输入密码'),
  })
  const handleValidate = async values => {
    try {
      await validateSchema.validate(values)
      return true
    } catch (error) {
      toast({ description: error.message })
      return false
    }  
  }
  // 表单提交
  const handleSubmit = async (values) => {
    const valid = await handleValidate(values)
    if(!valid) return
    setLoading(true)
    const { data } = await signIn(values)
    setLoading(false)
    console.log(data)
  }
  return <Formik
    initialValues={user}
    onSubmit={handleSubmit}
  >
    <Form>
    <Field name="email">
      {({ field, form }) => (
        <FormControl>
          <FaUser className="icon"/>
          <input {...field} id="email" placeholder="邮箱" />
        </FormControl>
      )}
    </Field>
    <Field name="password">
      {({ field, form }) => (
        <FormControl>
          <FaLock className="icon"/>
          <input {...field} id="password" type="password" placeholder="密码" />
        </FormControl>
      )}
    </Field>
    <Flex as="span" justify="space-between" mt="20px">
      <Checkbox defaultChecked>记住我</Checkbox>
      <Menu placement="bottom-end">
      <MenuButton as="a" color='gray.50'>
        登录遇到问题?
      </MenuButton>
      <MenuList>
        <MenuItem>用手机号重置密码</MenuItem>
        <MenuItem>用邮箱重置密码</MenuItem>
        <MenuItem>无法用海外手机号登录</MenuItem>
        <MenuItem>无法用Google账号登录</MenuItem>
      </MenuList>
      </Menu>
    </Flex>
    <Button isLoading={loading} type="submit" mt="20px" w="100%" h="44px" colorScheme="blue" borderRadius="22px">登录</Button>
    </Form>
  </Formik>
}