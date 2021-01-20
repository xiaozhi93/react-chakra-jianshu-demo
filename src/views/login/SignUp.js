import React, { useState } from 'react'
import  { Formik,Form, Field }  from 'formik'
import * as Yup from 'yup'
import { Button } from '@chakra-ui/react'
import { FaLock, FaUser } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import styled from '@emotion/styled'
import { signUp } from '../../services/user'
import { FormControl } from './FormControl'

const Tip = styled.p`
  margin: 10px 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
  a {
    color: #3194d0;
  }
`
export default function SignUp() {
  // 状态
  const [loading, setLoading] = useState(false)
  // 表单初始值
  const user = {
    username: '',
    email: '',
    password: ''
  }
  // 表单提交
  const handleSubmit = async (values) => {
    setLoading(true)
    const { data } = await signUp(values)
    setLoading(false)
    console.log(data)
  }
  // 表单校验
  const validateSchema = Yup.object({
    email: Yup.string().email('请输入正确的邮箱').required('请输入邮箱'),
    password: Yup.string().min(6,'密码长度不能小于6').required('请输入密码'),
  })
  return <Formik
    initialValues={user}
    onSubmit={handleSubmit}
    validationSchema={validateSchema}
  >
    <Form>
    <Field name="username">
      {({ field, form }) => (
        <FormControl>
          <FaUser className="icon"/>
          <input {...field} id="username" placeholder="你的昵称" />
        </FormControl>
      )}
    </Field>
    <Field name="email">
      {({ field, form }) => (
        <FormControl>
          <AiOutlineMail className="icon"/>
          <input {...field} id="email" placeholder="邮箱" />
        </FormControl>
      )}
    </Field>
    <Field name="password">
      {({ field, form }) => (
        <FormControl>
          <FaLock className="icon"/>
          <input {...field} id="password" type="password" placeholder="设置密码" />
        </FormControl>
      )}
    </Field>
    <Button isLoading={loading} mt="20px" w="100%" h="44px" colorScheme="green" borderRadius="22px">注册</Button>
    <Tip>
      点击 “注册” 即表示您同意并愿意遵守简书
      <br/>
      <a>
        用户协议
      </a>
      和
      <a>隐私政策</a>。
    </Tip>
    </Form>
  </Formik>
}