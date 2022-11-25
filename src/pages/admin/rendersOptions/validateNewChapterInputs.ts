import { NewChapter } from '../../../models/chapterModel'

interface SetError {
  setNameError: React.Dispatch<React.SetStateAction<string | null>>
  setChapterNumError: React.Dispatch<React.SetStateAction<string | null>>
}
export const validateNewChapterInputs = (chapterData: NewChapter, setError: SetError): boolean => {
  let isValid = true
  setError.setNameError(null)
  setError.setChapterNumError(null)

  if (chapterData.name.length === 0) {
    setError.setNameError('Você deve fornecer um nome para o capítulo!')
    isValid = false
  }

  const validChapter = /^[0-9]*$/

  if (chapterData.chapterNum.length === 0 || !validChapter.test(chapterData.chapterNum)) {
    setError.setChapterNumError('Você deve fornecer um número para o capítulo!')
    isValid = false
  }

  return isValid
}
