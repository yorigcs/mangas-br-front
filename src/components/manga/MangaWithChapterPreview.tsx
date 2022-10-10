import { MangaWithChapter } from '../../models/mangaModels'
import { ChapterRenderPreview } from '../chapters/ChapterRenderPreview'

import styled from 'styled-components'

export const MangaWithChapterPreview = (props: MangaWithChapter): JSX.Element => {
  return (
          <MangaWithChapterContentWrapper>
              <Image id={props.id} src={props.cover_picture} alt={props.name} />
              <Infos>
                  <Title>{props.name}</Title>
                  <ChaptersWrapper>
                      {props.Chapter.map((chapter, i, chapters) => i > chapters.length - 3 ? <ChapterRenderPreview key={chapter.id} {...chapter} /> : null)}
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
  width:100%;
  color: ${props => props.theme.colors.crystal}
`

const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
