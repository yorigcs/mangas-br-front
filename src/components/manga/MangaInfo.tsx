import styled from 'styled-components'
import { Manga } from '../../models/mangaModels'
import { Genre } from '../genres/Genre'
import { convertToDateDDMMYYYY } from '../../utils/dateFormater'

export const MangaInfo = (mangaInfo: Manga): JSX.Element => {
  return (
    <MangaInfoWrapper>

        <MangaInfoLeftSideWrapper>
          <img id={mangaInfo.id} src={mangaInfo.cover_picture}></img>
          <div>add favoritos</div>
          <div>seguidores: {mangaInfo.followed_by}</div>
          <div>status: {mangaInfo.status}</div>
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
          <GenresWrapper>
            {mangaInfo.GenreManga.map(gen => <Genre key={gen.genre_id} name={gen.genre.name}/>)}
          </GenresWrapper>
        </MangaInfoRightSideWrapper>
      </MangaInfoWrapper>
  )
}
const MangaInfoWrapper = styled.div`
  padding: 8px;
  display: flex;
  gap: 16px;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  background-color: red;
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
  -ms-overflow-style: none;  /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0;
  }
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

`
