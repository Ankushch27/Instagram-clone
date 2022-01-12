import { LoginView, SignupView } from '@components/auth'
import { Container } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import { FC } from 'react'

const AuthView: FC = () => {
  const {
    state: { authView },
  } = useUI()
  return (
    <Container>
      {authView === 'LOGIN_VIEW' && <LoginView />}
      {authView === 'SIGNUP_VIEW' && <SignupView />}
    </Container>
  )
}

export default AuthView
