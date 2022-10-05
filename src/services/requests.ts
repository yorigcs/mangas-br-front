import api from './api'
import { signUpData } from '../models/signUpModel'
import { signInData } from '../models/signInModel'
import { User } from '../models/userModel'
export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post('sign-up', data)
}

export const singInRequest = async (data: signInData): Promise<any> => {
  return await api.post('sign-in', data)
}

export interface SignInResponse {
  data: {
    user: User
    token: string
  }
}
