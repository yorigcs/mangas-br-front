import { useContext } from 'react'
import { ChapterContext, ChapterContextData } from '../contexts/ChapterProvider'

export const useChapter = (): ChapterContextData => {
  const context = useContext(ChapterContext)
  return context
}
