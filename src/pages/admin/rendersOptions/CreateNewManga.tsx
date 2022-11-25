import React from 'react'
import { AiFillFileImage } from 'react-icons/ai'
import { BsChatSquareTextFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

import { ButtonForm } from '../../../components/buttons/ButtonForm'
import { ContentBlock } from '../../../components/contents/ContentBlock'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { handleChange, handleChangeFile } from '../../../helpers'
import { useAsync } from '../../../hooks/useAsync'
import { newMangaData } from '../../../models/mangaModels'
import { createNewMangaRequest } from '../../../services/requests'
import { validateNewMangaInputs } from './validateNewMangaInputs'

export const CreateNewManga = (): JSX.Element => {
  const { act: createMangaExec, errMsg, status, resetStates } = useAsync<string>(createNewMangaRequest, false)
  const [mangaData, setMangaData] = React.useState<newMangaData>(
    {
      name: '',
      coverPicture: [],
      description: '',
      author: ''
    }
  )

  const [nameError, setNameError] = React.useState<string | null>(null)
  const [coverPictureError, setCoverPictureError] = React.useState<string | null>(null)
  const [descriptionError, setDescriptionError] = React.useState<string | null>(null)
  const [authorError, setAuthorError] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    const isFormValid = validateNewMangaInputs(mangaData, { setNameError, setCoverPictureError, setDescriptionError, setAuthorError })
    if (!isFormValid) return

    const formData = new FormData()
    for (const file of mangaData.coverPicture) formData.append('images', file)
    formData.append('name', mangaData.name)
    formData.append('description', mangaData.description)
    formData.append('author', mangaData.author)

    createMangaExec(formData)
      .then(() => { setTimeout(() => { window.location.reload() }, 2000) })
      .catch(() => {})
      .finally(() => { resetStates() })
  }
  return (
    <ContentBlock title='Criar novo manga' size={{ height: 'auto' }} >
      <Form onSubmit={handleSubmit}>
        <Input icon={<BsChatSquareTextFill />} placeHolder='Digite o nome da obra...' name='name' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.name} err={nameError} loading={status === 'loading'} />
        <Input icon={<AiFillFileImage />} name='coverPicture' type='file' onChange={e => handleChangeFile(e, setMangaData)} err={coverPictureError} loading={status === 'loading'} />
        <Input icon={<BsChatSquareTextFill />} placeHolder='Digite uma descrição...' name='description' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.description} err={descriptionError} loading={status === 'loading'} />
        <Input icon={<FaUser />} placeHolder='Digite o nome do autor' name='author' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.author} err={authorError} loading={status === 'loading'} />
        <ButtonForm status={status} message='Criar Manga' errMsg={errMsg} />
      </Form>
    </ContentBlock>
  )
}
