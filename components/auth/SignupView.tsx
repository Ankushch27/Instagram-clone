import { Button, Logo } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { FC, useState } from 'react'
import * as yup from 'yup'

interface FormValues {
  email: string
  fullName: string
  username: string
  password: string
}

const signupSchema = yup.object({
  email: yup.string().email().required(),
  fullName: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
})

const SignupView: FC = () => {
  const [error, setError] = useState('')
  const { dispatch } = useUI()
  const initialValues = {
    email: '',
    fullName: '',
    username: '',
    password: '',
  }

  const signup = async (values: FormValues) => {
    try {
      setError('')
      await axios.post('/api/auth/signup', { user: values })
      dispatch({ type: 'SET_AUTH_VIEW', view: 'LOGIN_VIEW' })
    } catch (e: any) {
      setError(e.response.data.message)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      validateOnMount
      onSubmit={signup}>
      {({ isSubmitting, isValid }) => (
        <Form className="mx-auto w-80 flex flex-col gap-5">
          <div className="flex justify-center">
            <Logo />
          </div>
          <Field type="email" name="email" placeholder="Email" className="w-full" />
          <Field type="text" name="fullName" placeholder="Full Name" className="w-full" />
          <Field type="text" name="username" placeholder="Username" className="w-full" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="w-full"
          />
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}>
            Sign up
          </Button>
          <div className="text-red-600 text-center">{error}</div>
          <div className="">
            <p>
              Have an account?{' '}
              <span>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'SET_AUTH_VIEW', view: 'LOGIN_VIEW' })}
                  className="font-bold hover:opacity-70">
                  Log in
                </button>
              </span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignupView
