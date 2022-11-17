import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { Footer } from '../../components/footer/Footer'
import { Form } from '../../components/forms/Form'
import { Input } from '../../components/inputs/Input'
import { ButtonForm } from '../../components/buttons/ButtonForm'
import { ContentBlock } from '../../components/contents/ContentBlock'

import { signInData } from '../../models/signInModel'
import { singInRequest, SignInResponse } from '../../services/requests'
import { handleChange } from '../../helpers'
import { validateInputs } from './validateInputs'

import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'
import { useAsync } from '../../hooks/useAsync'

export const SignIn = (): JSX.Element => {
  const { signIn } = useAuth()
  const { status, act: signInExec, errMsg, resetStates } = useAsync<SignInResponse>(singInRequest, false)
  const [userData, setUserData] = React.useState<signInData>(
    {
      email: '',
      password: ''
    }
  )

  const [emailError, setEmailError] = React.useState<string | null>(null)
  const [passwordError, setPasswordError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = validateInputs(userData, { setEmailError, setPasswordError })
    if (!isFormValid) return

    signInExec(userData)
      .then((resp) => {
        if (!resp || (resp instanceof Error)) return
        setTimeout(() => { signIn(resp) }, 1500)
      })
      .catch(() => { resetStates() })
  }

  return (
    <>
      <Header />
      <Main>
        <ContentBlock title='Fazer login' size={{ width: '600px' }}>
          <Form onSubmit={handleSubmit} status={status}>
            <Input icon={<MdEmail />} placeHolder='Digite seu email...' name='email' type='email' onChange={e => handleChange(e, setUserData)} value={userData.email} err={emailError} loading={status === 'loading'} />
            <Input icon={<RiLockPasswordFill />} placeHolder='Digite uma senha...' name='password' type='password' onChange={e => handleChange(e, setUserData)} value={userData.password} err={passwordError} loading={status === 'loading'} />
            <ButtonForm message='Entrar' status={status} errMsg={errMsg} />
            <Link to='/sign-up'>Não possui uma conta? Cadastre-se!</Link>
          </Form>
        </ContentBlock>
      </Main>
      <Footer />
    </>
  )
}
