/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { createContext, useEffect, useState } from 'react'

import { MangaWithChapter } from '../models/mangaModels'
import { Page } from '../models/pagesModel'
import { Status } from '../models/status'

import { findMangaWithChaptersByName, findChapterPagesByChapterId } from '../services/requests'

interface Props {
  children: React.ReactNode
}

export interface ChapterContextData {
  manga: MangaWithChapter | null
  mangaName: string
  chapterName: string
  previousChapterName?: string
  nextChapterName?: string
  actualChapterName?: string
  setChapterParams: React.Dispatch<React.SetStateAction<ChapterParams>>
  pages: Page[] | null

}

interface ChapterRequest {
  data: MangaWithChapter | null
  status: Status
}
interface PageRequest {
  data: Page[] | null
  status: Status
}

interface ChapterParams {
  mangaNameParam: string
  chapterNameParam: string
}

export const ChapterContext = createContext<ChapterContextData>({} as ChapterContextData)

export const ChapterProvider = ({ children }: Props): JSX.Element => {
  const [chapterParams, setChapterParams] = useState<ChapterParams>({ mangaNameParam: '', chapterNameParam: '' })
  const [manga, setManga] = useState<ChapterRequest>({ data: null, status: null })
  const [pages, setPages] = useState<PageRequest>({ data: null, status: null })
  const { chapterNameParam, mangaNameParam } = chapterParams

  useEffect(() => {
    if (chapterNameParam !== '' && mangaNameParam !== '') {
      findMangaWithChaptersByName(mangaNameParam)
        .then((resp) => {
          const { data } = resp
          setManga(manga => ({ ...manga, data }))
        })
        .catch(error => { console.log(error) })
    }
  }, [chapterParams])

  const chapters = manga?.data?.Chapter

  const actualChapter = chapters?.find(chapter => chapter.name.toLowerCase().split(' ').join('-') === chapterNameParam)
  const actualChapterNum = actualChapter?.chapter_num ?? Number.MAX_SAFE_INTEGER
  const actualChapterName = actualChapter?.name
  const nextChapterName = chapters?.find(chapter => chapter.chapter_num === actualChapterNum + 1)?.name.toLowerCase().split(' ').join('-')
  const previousChapterName = chapters?.find(chapter => chapter.chapter_num === actualChapterNum - 1)?.name.toLowerCase().split(' ').join('-')
  const actualChapterId = actualChapter?.id

  useEffect(() => {
    if (actualChapterId) {
      findChapterPagesByChapterId(actualChapterId)
        .then((resp) => {
          const { data } = resp
          setPages(page => ({ ...page, data }))
        })
        .catch(error => {
          console.log(error)
          setPages(page => ({ ...page, data: null }))
        })
    }
  }, [actualChapterId])

  return (
        <ChapterContext.Provider value={
          {
            manga: manga.data,
            mangaName: mangaNameParam,
            chapterName: chapterNameParam,
            previousChapterName,
            nextChapterName,
            actualChapterName,
            setChapterParams,
            pages: pages.data
          }
          }>
            {children}
        </ChapterContext.Provider>
  )
}
