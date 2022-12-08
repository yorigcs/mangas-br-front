/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from '../hooks/useAsync'
import { MangaWithChapter } from '../models/mangaModels'

import { findMangaWithChaptersByName } from '../services/requests'

interface Props {
  children: React.ReactNode
}

export interface ChapterContextData {
  manga: MangaWithChapter | null
  mangaName: string
  chapterName: string
  previousChapterName: string | undefined
  nextChapterName: string | undefined
  actualChapterName: string | undefined

}

export const ChapterContext = createContext<ChapterContextData>({} as ChapterContextData)

export const ChapterProvider = ({ children }: Props): JSX.Element => {
  const mangaName = useParams().mangaName ?? ''
  const chapterName = useParams().chapterName ?? ''

  const requestMangaWithChapter = async (): Promise<MangaWithChapter> => (await findMangaWithChaptersByName(mangaName))
  const { data: manga } = useAsync<MangaWithChapter>(requestMangaWithChapter)
  const chapters = manga?.Chapter

  const actualChapter = chapters?.find(chapter => chapter.name.toLowerCase().split(' ').join('-') === chapterName)
  const actualChapterNum = actualChapter?.chapter_num ?? Number.MAX_SAFE_INTEGER
  const actualChapterName = actualChapter?.name

  const nextChapterName = chapters?.find(chapter => chapter.chapter_num === actualChapterNum + 1)?.name.toLowerCase().split(' ').join('-')
  const previousChapterName = chapters?.find(chapter => chapter.chapter_num === actualChapterNum - 1)?.name.toLowerCase().split(' ').join('-')

  return (
        <ChapterContext.Provider value={{ manga, mangaName, chapterName, previousChapterName, nextChapterName, actualChapterName }}>
            {children}
        </ChapterContext.Provider>
  )
}
