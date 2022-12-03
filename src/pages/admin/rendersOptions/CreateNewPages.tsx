import React from 'react'
import { AiFillFileImage } from 'react-icons/ai'

import { ContentBlock } from '../../../components/contents/ContentBlock'

import { addNewPagesToChapterRequest, loadMangasWithChapter } from '../../../services/requests'
import { Manga, MangaWithChapter } from '../../../models/mangaModels'
import { MangaInfo } from '../../../components/manga/MangaInfo'
import { ButtonForm } from '../../../components/buttons/ButtonForm'
import { useAsync } from '../../../hooks/useAsync'
import { Select } from '../../../components/select/Select'
import { Form } from '../../../components/forms/Form'
import { Chapter } from '../../../models/chapterModel'
import { handleChangeFile } from '../../../helpers'
import { Input } from '../../../components/inputs/Input'
import { validateAddNewPagesToChapterInputs } from './validateAddNewPagesToChapterInputs'
import { AddPagesToChapter } from '../../../models/pagesModel'

export const CreateNewPages = (): JSX.Element => {
  const { data: mangas } = useAsync<MangaWithChapter[] | null>(loadMangasWithChapter)
  const { status: statusAddPage, act: addPagesToCapExec, errMsg, resetStates: resetRequestResponse } = useAsync<string>(addNewPagesToChapterRequest, false)

  const [manga, setManga] = React.useState<Manga | undefined>(undefined)
  const [chapters, setChapters] = React.useState<Chapter[] | undefined>(undefined)
  const [addPageData, setAddPageData] = React.useState<AddPagesToChapter>(
    {
      chapter_id: '',
      pagesImages: []
    }
  )
  const [pagesImagesError, setPagesImagesError] = React.useState<string | null>(null)

  const loadMangaInfo = (e: React.MouseEvent<HTMLElement>): void => {
    const mangaId = e.currentTarget.id
    const manga = mangas?.find(manga => manga.id === mangaId)
    setManga(mang => (mang = manga))
    setChapters(chapters => (chapters = manga?.Chapter))
  }

  const setChapterSelected = (e: React.MouseEvent<HTMLElement>): void => {
    const chapterId = e.currentTarget.id
    setAddPageData(chapter => ({ ...chapter, chapter_id: chapterId }))
  }

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    const isFormValid = validateAddNewPagesToChapterInputs(addPageData, { setPagesImagesError })
    if (!isFormValid) return

    const formData = new FormData()
    for (const file of addPageData.pagesImages) formData.append('images', file)
    formData.append('chapter_id', addPageData.chapter_id)

    addPagesToCapExec(formData)
      .then(() => { })
      .catch(() => { })
      .finally(() => { resetRequestResponse() })
  }

  return (
    <ContentBlock gap='30px' title='Adicionar páginas' size={{ height: 'auto' }} >
      <Select defaultTitle='Selecione um manga' onSelect={loadMangaInfo} list={mangas?.map(manga => ({ name: manga?.name, id: manga?.id }))} />
      {
        manga
          ? <>
            <MangaInfo key={manga.id} {...manga} />
            <Select defaultTitle='Selecione um capítulo' onSelect={setChapterSelected} list={chapters?.map(chapter => ({ name: `Capítulo ${chapter?.chapter_num}`, id: chapter?.id }))} />
            <Form onSubmit={onSubmit}>
           {addPageData.chapter_id.length !== 0
             ? <Input icon={<AiFillFileImage />} name='pagesImages' type='file' multiple onChange={e => handleChangeFile(e, setAddPageData)} err={pagesImagesError} loading={statusAddPage === 'loading'} />
             : null}
              <ButtonForm status={statusAddPage} message='Adicionar páginas' errMsg={errMsg} />
            </Form>
          </>
          : null
      }

    </ContentBlock>
  )
}
