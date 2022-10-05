import { signUpData } from '../../models/signUpModel'

interface SetError {
  setNameError: React.Dispatch<React.SetStateAction<string | null>>
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>
  setPasswordError: React.Dispatch<React.SetStateAction<string | null>>
  setPasswordConfirmationError: React.Dispatch<React.SetStateAction<string | null>>

}
export const validateInputs = (userData: signUpData, setError: SetError): boolean => {
  let isValid = true
  setError.setNameError(null)
  setError.setEmailError(null)
  setError.setPasswordError(null)
  setError.setPasswordConfirmationError(null)
  if (userData.name.length === 0) {
    setError.setNameError('Você deve fornecer um nome!')
    isValid = false
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!emailRegex.test(userData.email)) {
    setError.setEmailError('Você deve fornecer um email válido!')
    isValid = false
  }

  if (userData.password.length === 0) {
    setError.setPasswordError('Você deve fornecer uma senha!')
    isValid = false
  }

  if (userData.passwordConfirmation.length === 0) {
    setError.setPasswordConfirmationError('Você deve confirmar sua senha  senha!')
    isValid = false
  }

  if (userData.passwordConfirmation !== userData.password && userData.passwordConfirmation.length !== 0) {
    setError.setPasswordError('As senhas não combinam!')
    setError.setPasswordConfirmationError('As senhas não combinam!')
    isValid = false
  }
  return isValid
}
