import React from 'react'
import  { Formik,Form, Field }  from 'formik'
import * as Yup from 'yup'
import { FormControl, Input, InputLeftAddon, InputGroup, FormErrorMessage } from '@chakra-ui/react'
import { FaLock, FaUser } from 'react-icons/fa'

export default function SignIn() {
  // 表单初始值
  const user = {
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
    <Field name="email">
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          <InputGroup>
            <InputLeftAddon>
              <FaUser />
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
            <Input {...field} id="password" placeholder="密码" />
          </InputGroup>
          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    </Form>
  </Formik>
}