import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ThreeCircles } from 'react-loader-spinner'

import { ContentBlock } from '../../../components/contents/ContentBlock'

import { loadAllGenres } from '../../../services/requests'
import { Genre } from './Genre'
import { IGenre } from '../../../models/genreModels'

export const AddGenresToManga = (): JSX.Element => {
  const [genres, setGenres] = React.useState<IGenre[] | null>(null)

  const [selectedGenres, setSelectedGenres] = React.useState<string[] | null>(null)

  const [loadingGenres, setLoadingGenres] = React.useState<boolean>(false)

  useEffect(() => {
    setLoadingGenres(true)
    loadAllGenres()
      .then((resp) => { setGenres(resp.data) })
      .catch((err) => { console.log(err.response.data.error) })
      .finally(() => setLoadingGenres(false))
  }, [])

  const addGenreOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const genre = e.currentTarget.id
    setSelectedGenres(gen => gen ? [...gen, genre] : [genre])
  }

  const removeGenreOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const genre = e.currentTarget.id

    setSelectedGenres(gen => gen ? gen?.filter(name => name !== genre) : null)
  }

  const handleRenderGenres = (): JSX.Element[] | JSX.Element | undefined => {
    if (loadingGenres) {
      return <ThreeCircles height="50" width="50" color="#1D3557" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="three-circles-rotating" />
    }
    return genres?.map(genre => {
      if (!selectedGenres?.includes(genre.name)) {
        return <Genre type='add' key={genre.id} id={genre.id} name={genre.name} onClick={(e) => addGenreOnClick(e)} />
      }
      return <></>
    })
  }

  return (
    <ContentBlock title='Adicionar gêneros' size={{ height: 'auto' }} >
      <GenresWrapper >

        <GenresListWrapper>
          <Title>Selecione um dos gêneros disponíveis:</Title>
          {handleRenderGenres()}
        </GenresListWrapper>

        {(selectedGenres && selectedGenres?.length !== 0)
          ? <GenresListWrapper>
            <Title>Você selecionou os seguintes genêros:</Title>
            {selectedGenres?.map(genre => <Genre type='remove' key={genre} name={genre} onClick={(e) => removeGenreOnClick(e)} />)}
          </GenresListWrapper>
          : null}

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
`
const GenresWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Title = styled.span`
  
`
