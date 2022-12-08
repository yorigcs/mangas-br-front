import { MangaWithChapter } from '../../models/mangaModels'
import { ChapterRenderPreview } from '../chapters/ChapterRenderPreview'

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const MangaWithChapterPreview = (props: MangaWithChapter): JSX.Element => {
  const navigate = useNavigate()
  const mangaName = props.name.toLowerCase().split(' ').join('-')
  const maxChapters = 2
  return (
          <MangaWithChapterContentWrapper>
              <Image id={props.id} onClick={() => navigate(`mangas/${mangaName}`)} src={props.cover_picture} alt={props.name} />
              <Infos>
                  <Title onClick={() => navigate(`mangas/${mangaName}`)}>{props.name}</Title>
                  <ChaptersWrapper>
                      {props.Chapter.map((chapter, i, chapters) => i < maxChapters ? <ChapterRenderPreview key={chapter.id} mangaName={mangaName} {...chapter} /> : null)}
                  </ChaptersWrapper>
              </Infos>

          </MangaWithChapterContentWrapper>
  )
}

const MangaWithChapterContentWrapper = styled.div`
    padding: 8px;
    gap: 8px;
    display: flex;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
    width:100%;
`

const ChaptersWrapper = styled.div`
    padding: 8px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    width:100%;
`

const Image = styled.img`
  cursor: pointer;
  width: 90px;
  height: 130px;  
`

const Title = styled.h2`
  cursor: pointer;
  width:100%;
  color: ${props => props.theme.colors.crystal}
`

const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
