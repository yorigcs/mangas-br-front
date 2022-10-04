import { Header } from '../../components/header/header'
import { Input } from '../../components/inputs/Input'
import { Form } from '../../components/Forms/Form'
import { Button } from '../../components/buttons/button'
import { Main } from '../../components/main/main'
import { Footer } from '../../components/Footer/footer'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

import { handleChange } from '../../helpers/'
import { singUpRequest } from '../../services/requests'

interface signUpData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}
export const SignUp: React.FC = () => {
  const navigate = useNavigate()
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

  const [requestError, setRequestError] = React.useState<string | null>(null)

  const inputValidation = (): boolean => {
    let isValid = true
    setNameError(null)
    setEmailError(null)
    setPasswordError(null)
    setPasswordConfirmationError(null)
    if (userData.name.length === 0) {
      setNameError('Você deve fornecer um nome!')
      isValid = false
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(userData.email)) {
      setEmailError('Você deve fornecer um email válido!')
      isValid = false
    }

    if (userData.password.length === 0) {
      setPasswordError('Você deve fornecer uma senha!')
      isValid = false
    }

    if (userData.passwordConfirmation.length === 0) {
      setPasswordConfirmationError('Você deve confirmar sua senha  senha!')
      isValid = false
    }

    if (userData.passwordConfirmation !== userData.password && userData.passwordConfirmation.length !== 0) {
      setPasswordError('As senhas não combinam!')
      setPasswordConfirmationError('As senhas não combinam!')
      isValid = false
    }
    return isValid
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = inputValidation()
    if (isFormValid) {
      singUpRequest(userData)
        .then(() => navigate('/sign-in'))
        .catch((err) => { setRequestError(err.response.data.error) })
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Form title='Criar Conta' onSubmit={handleSubmit} err={requestError}>
          <Input icon={<FaUserAlt />} placeHolder='Digite seu nome...' name='name' type='text' onChange={e => handleChange(e, setUserData)} value={userData.name} err={nameError}/>
          <Input icon={<MdEmail />} placeHolder='Digite seu email...' name='email' type='email' onChange={e => handleChange(e, setUserData)} value={userData.email} err={emailError}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Digite uma senha...' name='password' type='password' onChange={e => handleChange(e, setUserData)} value={userData.password} err={passwordError}/>
          <Input icon={<RiLockPasswordFill />} placeHolder='Confirme sua senha...' name='passwordConfirmation' type='password' onChange={e => handleChange(e, setUserData)} value={userData.passwordConfirmation} err={passwordConfirmationError} />
          <Button message='Cadastrar'/>
        </Form>
      </Main>

      <Footer />
    </>
  )
}
