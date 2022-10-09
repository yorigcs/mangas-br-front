import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ThreeCircles } from 'react-loader-spinner'

import { ContentBlock } from '../../../components/contents/ContentBlock'

import { addGenresToManga, loadAllGenres, loadAllMangas } from '../../../services/requests'
import { Genre } from '../../../components/genres/Genre'
import { IGenre } from '../../../models/genreModels'
import { Manga } from '../../../models/mangaModels'
import { MangaInfo } from '../../../components/manga/MangaInfo'
import { ButtonForm } from '../../../components/buttons/ButtonForm'

export const AddGenresToManga = (): JSX.Element => {
  const [genres, setGenres] = React.useState<IGenre[] | null>(null)

  const [mangas, setMangas] = React.useState<Manga[] | null>(null)
  const [manga, setManga] = React.useState<Manga | undefined>(undefined)

  const [selectedGenres, setSelectedGenres] = React.useState<string[] | null>(null)

  const [loadingGenres, setLoadingGenres] = React.useState<boolean>(false)
  const [loadingMangas, setLoadingMangas] = React.useState<boolean>(false)
  const [loadingSubmit, setLoadingSubmit] = React.useState<boolean>(false)

  useEffect(() => {
    setLoadingGenres(true)
    loadAllGenres()
      .then((resp) => { setGenres(resp.data) })
      .catch((err) => { console.log(err.response.data.error) })
      .finally(() => setLoadingGenres(false))

    setLoadingMangas(true)
    loadAllMangas()
      .then((resp) => { setMangas(resp.data) })
      .catch((err) => { console.log(err.response.data.error) })
      .finally(() => setLoadingMangas(false))
  }, [])

  const loadMangaInfo = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const mangaId = e.currentTarget.value
    const manga = mangas?.filter(manga => manga.id === mangaId)?.[0]
    setSelectedGenres(null)
    setManga(manga)
  }

  const addGenreOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const genre = e.currentTarget.id
    setSelectedGenres(gen => gen ? [...gen, genre] : [genre])
  }

  const removeGenreOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const genre = e.currentTarget.id

    setSelectedGenres(gen => gen ? gen?.filter(name => name !== genre) : null)
  }

  const handleRenderGenres = (): JSX.Element[] | JSX.Element | undefined => {
    if (loadingGenres || loadingMangas) {
      return <ThreeCircles height="50" width="50" color="#1D3557" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="three-circles-rotating" />
    }
    return genres?.map(genre => {
      if (!selectedGenres?.includes(genre.name) && !manga?.GenreManga.filter(gen => gen.genre.name === genre.name)?.[0] && manga) {
        return <Genre type='add' key={genre.id} id={genre.id} name={genre.name} onClick={(e) => addGenreOnClick(e)} />
      }
      return <></>
    })
  }

  const onSubmit = (): void => {
    setLoadingSubmit(true)
    addGenresToManga({ mangaId: manga?.id, genres: selectedGenres })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => { console.log(err.response.data.error) })
      .finally(() => setLoadingSubmit(false))
  }

  return (
    <ContentBlock gap='30px' title='Adicionar gêneros' size={{ height: 'auto' }} >
      <select name="mangas" onChange={(e) => loadMangaInfo(e)}>
        <option selected disabled>Selecione uma obra</option>
        {mangas?.map(manga => <option key={manga.id} value={manga.id}>{manga.name}</option>)}
      </select>
      {manga ? <MangaInfo {...manga} /> : null}
      <GenresWrapper >

        {manga
          ? <GenresListWrapper>
            <Title>Selecione um dos gêneros disponíveis:</Title>
            {handleRenderGenres()}
          </GenresListWrapper>
          : null}

        {(selectedGenres && selectedGenres?.length !== 0)
          ? <GenresListWrapper>
            <Title>Você selecionou os seguintes genêros:</Title>
            {selectedGenres?.map(genre => <Genre type='remove' key={genre} name={genre} onClick={(e) => removeGenreOnClick(e)} />)}
          </GenresListWrapper>
          : null}

        <ButtonField show={!!selectedGenres && selectedGenres?.length !== 0}>
          <ButtonForm message='Adicionar Categorias' onClick={onSubmit} loading={loadingSubmit} />
        </ButtonField>

      </GenresWrapper>

    </ContentBlock>
  )
}

const GenresListWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: scroll;
  margin-bottom: 8px;
  border-radius: 8px;

  width: 100%;
  max-height: 200px;
  background-color:${props => props.theme.colors.jellyBeanBlue};
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0;
  }
  > span {
    width: 100%;
    text-align: center;
  }
`
const GenresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Title = styled.span`
  
`

const ButtonField = styled.div < { show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 100%;
`
