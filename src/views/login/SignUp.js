import React from 'react'
import  { Formik,Form, Field }  from 'formik'
import * as Yup from 'yup'
import { FormControl, Input, InputLeftAddon, InputGroup, FormErrorMessage } from '@chakra-ui/react'
import { FaLock, FaUser, FaVoicemail } from 'react-icons/fa'

export default function SignUp() {
  // 表单初始值
  const user = {
    username: '',
    email: '',
    password: ''
  }
  // 表单提交
  const handleSubmit = (values) => {}
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
        <FormControl isInvalid={form.errors.username && form.touched.username}>
          <InputGroup>
            <InputLeftAddon>
              <FaUser />
            </InputLeftAddon>
            <Input {...field} id="username" placeholder="你的昵称" />
          </InputGroup>
          <FormErrorMessage>{form.errors.username}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="email">
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          <InputGroup>
            <InputLeftAddon>
              <FaVoicemail />
            </InputLeftAddon>
            <Input {...field} id="email" placeholder="邮箱" />
          </InputGroup>
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Field name="password">
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.password && form.touched.password}>
          <InputGroup>
            <InputLeftAddon>
              <FaLock />
            </InputLeftAddon>
            <Input {...field} id="password" placeholder="设置密码" />
          </InputGroup>
          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    </Form>
  </Formik>
}