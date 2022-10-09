import api from './api'
import { signUpData } from '../models/signUpModel'
import { signInData } from '../models/signInModel'
import { User } from '../models/userModel'
import { newMangaData } from '../models/mangaModels'

export interface SignInResponse {
  data: {
    user: User
    token: string
  }
}

export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post('sign-up', data)
}

export const singInRequest = async (data: signInData): Promise<any> => {
  return await api.post('sign-in', data)
}

export const createNewMangaRequest = async (data: newMangaData): Promise<any> => {
  return await api.post('create-manga', data)
}

export const loadAllGenres = async (): Promise<any> => {
  return await api.get('get-all-genres')
}

export const loadAllMangas = async (): Promise<any> => {
  return await api.get('all-mangas')
}
