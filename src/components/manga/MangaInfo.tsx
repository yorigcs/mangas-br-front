import styled from 'styled-components'
import { Manga } from '../../models/mangaModels'
import { Genre } from '../genres/Genre'
import { convertToDateDDMMYYYY } from '../../utils/dateFormater'

export const MangaInfo = (mangaInfo: Manga): JSX.Element => {
  const handleGenreRender = (): JSX.Element => {
    if (mangaInfo.GenreManga.length === 0) {
      return (
        <GenresMessage>A obra ainda não possui nenhum gênero</GenresMessage>
      )
    }
    return (
      <>
        <GenresMessage>Gêneros</GenresMessage>
        <GenresWrapper>
          {mangaInfo.GenreManga.map(gen => <Genre key={gen.genre_id} name={gen.genre.name} />)}
        </GenresWrapper>
      </>

    )
  }

  return (
    <MangaInfoWrapper>

      <MangaInfoLeftSideWrapper>
        <ImageCover id={mangaInfo.id} src={mangaInfo.cover_picture}></ImageCover>
        <div>adicionar aos favoritos</div>
        <div>seguidores: {mangaInfo.followed_by}</div>
        <div>status: {handleStatus(mangaInfo.status)}</div>
      </MangaInfoLeftSideWrapper>

      <MangaInfoRightSideWrapper>
        <TitleWrapper>{mangaInfo.name}</TitleWrapper>
        <DescriptionWrapper><span>Descrição:</span> {mangaInfo.description}</DescriptionWrapper>
        <InfoExtraWrapper>
          <InfoMessageWrapper><span>Autor</span> {mangaInfo.author}</InfoMessageWrapper>
          <InfoMessageWrapper><span>Postado por</span> {mangaInfo.posted_by}</InfoMessageWrapper>
          <InfoMessageWrapper><span>Postado em</span> {convertToDateDDMMYYYY(mangaInfo.created_at)}</InfoMessageWrapper>
          <InfoMessageWrapper><span>Atualizado em</span> {convertToDateDDMMYYYY(mangaInfo.updated_at)}</InfoMessageWrapper>
        </InfoExtraWrapper>
        {handleGenreRender()}

      </MangaInfoRightSideWrapper>
    </MangaInfoWrapper>
  )
}

const handleStatus = (status: string): string => {
  switch (status) {
    case 'paused':
      return 'Em pausa'
    case 'dropped':
      return 'dropped'
    default:
      return 'Em lançamento'
  }
}

const ImageCover = styled.img`
  width: 180px;
  height: 260px;
`
const MangaInfoWrapper = styled.div`
  padding: 8px;
  display: flex;
  gap: 16px;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;

  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  `

const MangaInfoLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const MangaInfoRightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

`
const DescriptionWrapper = styled.span`
  margin-bottom:24px;
  color: ${props => props.theme.colors.crystal};
  max-height: 200px;
  overflow-y: scroll;
  display: block;
  > span {
    color: ${props => props.theme.colors.Honeydew};
    font-weight: 700;
  }
`
const InfoMessageWrapper = styled.span`

  margin-bottom:24px;
  color: ${props => props.theme.colors.crystal};
  width: 50%;
  > span {
    margin-bottom: 10px;
    display: block;
    color: ${props => props.theme.colors.Honeydew};
    font-weight: 700;
  }
`

const TitleWrapper = styled.h1`
  color: ${props => props.theme.colors.Honeydew};
  font-weight: 700;
  font-size: 18px;
`
const InfoExtraWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.Honeydew};

`

const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: 60px;
  overflow-y: scroll;
`
const GenresMessage = styled.div`
 color: ${props => props.theme.colors.Honeydew};
  font-weight: 700;
  font-size: 18px;
`
