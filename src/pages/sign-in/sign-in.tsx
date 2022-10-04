import { Header } from '../../components/header/header'
import { Main } from '../../components/main/main'
import { Footer } from '../../components/Footer/footer'
import { Form } from '../../components/Forms/Form'
import { Input } from '../../components/inputs/Input'
import { Button } from '../../components/buttons/button'

import { signInData } from '../../models/sign-in-model'
import { singInRequest } from '../../services/requests'
import { handleChange } from '../../helpers'
import { validateInputs } from './validateInputs'

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate()
  const [userData, setUserData] = React.useState<signInData>(
    {
      email: '',
      password: ''
    }
  )

  const [loading, setLoading] = React.useState(false)

  const [emailError, setEmailError] = React.useState<string | null>(null)
  const [passwordError, setPasswordError] = React.useState<string | null>(null)

  const [requestError, setRequestError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = validateInputs(userData, { setEmailError, setPasswordError })
    if (isFormValid) {
      setLoading(true)
      singInRequest(userData)
        .then((resp) => {
          const { data } = resp
          console.log(data)
          navigate('/')
        })
        .catch((err) => { setRequestError(err.response.data.error) })
        .finally(() => setLoading(false))
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Form title='Fazer login' onSubmit={handleSubmit} err={requestError}>
          <Input icon={<MdEmail />} placeHolder='Digite seu email...' name='email' type='email' onChange={e => handleChange(e, setUserData)} value={userData.email} err={emailError} loading={loading}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Digite uma senha...' name='password' type='password' onChange={e => handleChange(e, setUserData)} value={userData.password} err={passwordError} loading={loading}/>
          <Button message='Entrar' loading={loading}/>
          <Link to='/sign-up'>Não possui uma conta? Cadastre-se!</Link>
        </Form>
      </Main>

      <Footer />
    </>
  )
}
