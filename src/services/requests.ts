import api from './api'
import { signUpData } from '../models/sign-up-model'

export const singUpRequest = async (data: signUpData): Promise<any> => {
  await api.post('sign-up', data)
}
