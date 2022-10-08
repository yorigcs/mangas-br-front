import React from 'react'
import { AiFillFileImage } from 'react-icons/ai'
import { BsChatSquareTextFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'

import { ButtonForm } from '../../../components/buttons/ButtonForm'
import { ContentBlock } from '../../../components/contents/ContentBlock'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { handleChange } from '../../../helpers'
import { newMangaData } from '../../../models/mangaModels'
import { createNewMangaRequest } from '../../../services/requests'
import { validateNewMangaInputs } from './validateNewMangaInputs'

export const CreateNewManga = (): JSX.Element => {
  const [mangaData, setMangaData] = React.useState<newMangaData>(
    {
      name: '',
      coverPicture: '',
      description: '',
      author: ''
    }
  )
  const [loading, setLoading] = React.useState<boolean>(false)

  const [nameError, setNameError] = React.useState<string | null>(null)
  const [coverPictureError, setCoverPictureError] = React.useState<string | null>(null)
  const [descriptionError, setDescriptionError] = React.useState<string | null>(null)
  const [authorError, setAuthorError] = React.useState<string | null>(null)

  const [requestMessage, setRequestMessage] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isFormValid = validateNewMangaInputs(mangaData, { setNameError, setCoverPictureError, setDescriptionError, setAuthorError })
    if (isFormValid) {
      setLoading(true)
      createNewMangaRequest(mangaData)
        .then(() => { setRequestMessage('Mangá criado com sucesso!') })
        .catch((err) => { console.log(err); setRequestMessage(err.response.data.error) })
        .finally(() => setLoading(false))
    }
  }
  return (
    <ContentBlock title='Criar novo manga' size={{ height: 'auto' }} >
      <Form onSubmit={handleSubmit} msg={requestMessage}>
        <Input icon={<BsChatSquareTextFill />} placeHolder='Digite o nome da obra...' name='name' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.name} err={nameError} loading={!!loading} />
        <Input icon={<AiFillFileImage />} placeHolder='Coloque uma imagem para a obra...' name='coverPicture' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.coverPicture} err={coverPictureError} loading={!!loading} />
        <Input icon={<BsChatSquareTextFill />} placeHolder='Digite uma descrição...' name='description' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.description} err={descriptionError} loading={!!loading} />
        <Input icon={<FaUser />} placeHolder='Digite o nome do autor' name='author' type='text' onChange={e => handleChange(e, setMangaData)} value={mangaData.author} err={authorError} loading={!!loading} />
        <ButtonForm message='Criar' />
      </Form>
    </ContentBlock>
  )
}
