import api from './api'
import { signUpData } from '../models/signUpModel'
import { signInData } from '../models/signInModel'
import { User } from '../models/userModel'
import { Genre } from '../models/genreModels'
import { NewChapter } from '../models/chapterModel'

export interface SignInResponse {
  user: User
  token: string
}

export const singUpRequest = async (data: signUpData): Promise<any> => {
  return await api.post('sign-up', data)
}

export const singInRequest = async (data: signInData): Promise<any> => {
  return await api.post('sign-in', data)
}

export const createNewMangaRequest = async (data: FormData): Promise<any> => {
  return await api.post('create-manga', data, { headers: { 'Content-Type': 'multipart/form-data' } })
}

export const createNewChapterRequest = async (data: NewChapter): Promise<any> => {
  return await api.post('create-chapter', data)
}

export const addNewPagesToChapterRequest = async (data: FormData): Promise<any> => {
  return await api.post('create-page', data)
}

export const loadAllGenres = async (): Promise<any> => {
  return await api.get('get-all-genres')
}

export const loadAllMangas = async (): Promise<any> => {
  return await api.get('all-mangas')
}

export const addGenresToManga = async (data: Genre): Promise<any> => {
  return await api.post('add-genre-to-manga', data)
}

export const loadMangasWithChapter = async (): Promise<any> => {
  return await api.get('mangas-with-chapters')
}

export const findMangaWithChaptersByName = async (mangaName: string): Promise<any> => {
  return await api.get(`manga-with-chapters/${mangaName}`)
}
