import { Button, Logo } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import { Field, Form, Formik } from 'formik'
import { FC } from 'react'
import * as yup from 'yup'

interface FormValues {
  email: string
  password: string
}

const LoginView: FC = () => {
  const { dispatch } = useUI()
  const initialValues = {
    email: '',
    password: '',
  }

  const loginSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  })

  const login = async (values: FormValues) => {
    setTimeout(() => {
      console.log(values)
    }, 2000)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      validateOnMount
      onSubmit={login}>
      {({ isSubmitting, isValid }) => (
        <Form className="mx-auto w-80 flex flex-col gap-5">
          <div className="flex justify-center">
            <Logo />
          </div>
          <Field type="email" name="email" placeholder="Email" className="w-full" />
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
            Log in
          </Button>
          <div className="">
            <p>
              Don't have an account?{' '}
              <span>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'SET_AUTH_VIEW', view: 'SIGNUP_VIEW' })}
                  className="font-bold hover:opacity-70">
                  Sign up
                </button>
              </span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginView
