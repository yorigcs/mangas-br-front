import { signInData } from '../../models/signInModel'

interface SetError {
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>
  setPasswordError: React.Dispatch<React.SetStateAction<string | null>>
}
export const validateInputs = (userData: signInData, setError: SetError): boolean => {
  let isValid = true
  setError.setEmailError(null)
  setError.setPasswordError(null)

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!emailRegex.test(userData.email)) {
    setError.setEmailError('Você deve fornecer um email válido!')
    isValid = false
  }

  if (userData.password.length === 0) {
    setError.setPasswordError('Você deve fornecer uma senha!')
    isValid = false
  }

  return isValid
}
