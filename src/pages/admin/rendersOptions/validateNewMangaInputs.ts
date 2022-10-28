import { newMangaData } from '../../../models/mangaModels'

interface SetError {
  setNameError: React.Dispatch<React.SetStateAction<string | null>>
  setCoverPictureError: React.Dispatch<React.SetStateAction<string | null>>
  setDescriptionError: React.Dispatch<React.SetStateAction<string | null>>
  setAuthorError: React.Dispatch<React.SetStateAction<string | null>>
}
export const validateNewMangaInputs = (mangaData: newMangaData, setError: SetError): boolean => {
  let isValid = true
  setError.setNameError(null)
  setError.setCoverPictureError(null)
  setError.setDescriptionError(null)
  setError.setAuthorError(null)

  if (mangaData.coverPicture.length === 0) {
    setError.setCoverPictureError('Você deve fornecer um arquivo válido!')
    isValid = false
  }

  if (mangaData.name.length === 0) {
    setError.setNameError('Você deve fornecer um nome para a obra!')
    isValid = false
  }
  if (mangaData.description.length === 0) {
    setError.setDescriptionError('Você deve fornecer um nome para a obra!')
    isValid = false
  }
  if (mangaData.author.length === 0) {
    setError.setAuthorError('Você deve fornecer um nome para a obra!')
    isValid = false
  }

  return isValid
}
