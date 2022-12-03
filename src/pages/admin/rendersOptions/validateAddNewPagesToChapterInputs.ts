import { AddPagesToChapter } from '../../../models/pagesModel'

interface SetError {
  setPagesImagesError: React.Dispatch<React.SetStateAction<string | null>>
}
export const validateAddNewPagesToChapterInputs = (pagesData: AddPagesToChapter, setError: SetError): boolean => {
  let isValid = true
  setError.setPagesImagesError(null)

  if (pagesData.pagesImages.length === 0) {
    setError.setPagesImagesError('Você deve fornecer um arquivo válido!')
    isValid = false
  }

  return isValid
}
