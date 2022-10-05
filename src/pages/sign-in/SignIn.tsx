import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { Footer } from '../../components/footer/Footer'
import { Form } from '../../components/forms/Form'
import { Input } from '../../components/inputs/Input'
import { Button } from '../../components/buttons/Button'

import { signInData } from '../../models/signInModel'
import { singInRequest, SignInResponse } from '../../services/requests'
import { handleChange } from '../../helpers'
import { validateInputs } from './validateInputs'

import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useAuth } from '../../contexts/auth'

export const SignIn = (): JSX.Element => {
  const { signIn } = useAuth()
  const [userData, setUserData] = React.useState<signInData>(
    {
      email: '',
      password: ''
    }
  )

  const [loading, setLoading] = React.useState<boolean>(false)

  const [emailError, setEmailError] = React.useState<string | null>(null)
  const [passwordError, setPasswordError] = React.useState<string | null>(null)

  const [requestError, setRequestError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = validateInputs(userData, { setEmailError, setPasswordError })
    if (isFormValid) {
      setLoading(true)
      singInRequest(userData)
        .then((resp: SignInResponse) => { signIn(resp.data.user) })
        .catch((err) => { setRequestError(err.response.data.error) })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Form title='Fazer login' onSubmit={handleSubmit} err={requestError}>
          <Input icon={<MdEmail />} placeHolder='Digite seu email...' name='email' type='email' onChange={e => handleChange(e, setUserData)} value={userData.email} err={emailError} loading={!!loading}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Digite uma senha...' name='password' type='password' onChange={e => handleChange(e, setUserData)} value={userData.password} err={passwordError} loading={!!loading}/>
          <Button message='Entrar' loading={!!loading}/>
          <Link to='/sign-up'>Não possui uma conta? Cadastre-se!</Link>
        </Form>
      </Main>

      <Footer />
    </>
  )
}
