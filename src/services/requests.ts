import api from './api'
import { signUpData } from '../models/sign-up-model'
import { signInData } from '../models/sign-in-model'

export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post('sign-up', data)
}

export const singInRequest = async (data: signInData): Promise<any> => {
  return await api.post('sign-in', data)
}
