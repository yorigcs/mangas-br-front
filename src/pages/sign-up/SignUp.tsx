import { Header } from '../../components/header/Header'
import { Input } from '../../components/inputs/Input'
import { Form } from '../../components/forms/Form'
import { ButtonForm } from '../../components/buttons/ButtonForm'
import { Main } from '../../components/main/Main'
import { Footer } from '../../components/footer/Footer'
import { ContentBlock } from '../../components/contents/ContentBlock'

import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

import { handleChange } from '../../helpers'
import { singUpRequest } from '../../services/requests'
import { validateInputs } from './validateInputs'
import { signUpData } from '../../models/signUpModel'

import { useAsync } from '../../hooks/useAsync'

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate()
  const { data: signUpMsg, status, act: signUpExec, errMsg } = useAsync<string>(async () => await singUpRequest(userData), false)
  const [userData, setUserData] = React.useState<signUpData>(
    {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  )

  const [nameError, setNameError] = React.useState<string | null>(null)
  const [emailError, setEmailError] = React.useState<string | null>(null)
  const [passwordError, setPasswordError] = React.useState<string | null>(null)
  const [passwordConfirmationError, setPasswordConfirmationError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = validateInputs(userData, { setNameError, setEmailError, setPasswordError, setPasswordConfirmationError })
    if (isFormValid) {
      signUpExec(userData)
        .then(() => { setTimeout(() => { navigate('/sign-in') }, 3000) })
        .catch((err) => { console.log(err) })
    }
  }

  return (
    <>
      <Header />
      <Main>
      <ContentBlock title='Fazer cadastro' size={{ width: '600px' }}>
        <Form onSubmit={handleSubmit} status={status} msg={signUpMsg ?? errMsg}>
          <Input icon={<FaUserAlt />} placeHolder='Digite seu nome...' name='name' type='text' onChange={e => handleChange(e, setUserData)} value={userData.name} err={nameError} loading={status === 'loading'}/>
          <Input icon={<MdEmail />} placeHolder='Digite seu email...' name='email' type='email' onChange={e => handleChange(e, setUserData)} value={userData.email} err={emailError} loading={status === 'loading'}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Digite uma senha...' name='password' type='password' onChange={e => handleChange(e, setUserData)} value={userData.password} err={passwordError} loading={status === 'loading'}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Confirme sua senha...' name='passwordConfirmation' type='password' onChange={e => handleChange(e, setUserData)} value={userData.passwordConfirmation} err={passwordConfirmationError} loading={status === 'loading'}/>
          <ButtonForm message='Cadastrar' status={status}/>
          <Link to='/sign-in'>Já possui uma conta? Entre aqui!</Link>
        </Form>
      </ContentBlock>

      </Main>

      <Footer />
    </>
  )
}
