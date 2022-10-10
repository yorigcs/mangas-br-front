import { useState } from 'react'
import styled from 'styled-components'
import { Chapter } from '../../models/mangaModels'

import { ChapterRenderPreview } from './ChapterRenderPreview'

interface Props {
  chapters: Chapter[]
}
export const ChapterRenderList = ({ chapters }: Props): JSX.Element => {
  let seasons = 0
  const chapterBySeason: Chapter[][] = []
  chapters.forEach(chapter => { if (chapter.season > seasons) seasons = chapter.season })

  for (let i = 1; i <= seasons; i++) {
    chapterBySeason.push(chapters.filter(chapter => chapter.season === i))
  }

  return (
        <>
            {chapters.length !== 0
              ? <>
                    <Title>Capítulos disponíveis: {chapters.length}</Title>
                    <ListWrapper>
                        { chapterBySeason.map((season, i, chaptersBySeason) => <SeasonRender season={season} i={i} chaptersBySeason={chaptersBySeason} />) }
                    </ListWrapper>
                </>
              : <Title>Ainda não há um capítulo disponível.</Title>}
        </>

  )
}

const SeasonRender = ({ season, i, chaptersBySeason }: { season: Chapter[], i: number, chaptersBySeason: Chapter[][] }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
        <SeasonWrapper onClick={() => setIsOpen(isOpen => !isOpen)} key={i}>
            <Temp>Temporada {chaptersBySeason.length - i}</Temp>
            {isOpen
              ? <ChaptersWrapper >
                    {season.map(chapter => <ChapterRenderPreview key={chapter.id} {...chapter} />)}
                </ChaptersWrapper>
              : null}

        </SeasonWrapper>
  )
}

const ChaptersWrapper = styled.div`
    cursor: pointer;
    padding: 8px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    width:100%;
    
`

const SeasonWrapper = styled.div`
    border: 1px solid ${props => props.theme.colors.crystal};
    cursor: pointer;
    padding: 8px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color:${props => props.theme.colors.spaceCadet};
    width:100%;
   
    
`

const ListWrapper = styled.div`
border: 1px solid ${props => props.theme.colors.crystal};
    cursor: pointer;
    padding: 8px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color:${props => props.theme.colors.jellyBeanBlue};
    width:100%;

    
`

const Title = styled.h2`
  width:100%;
  color: ${props => props.theme.colors.crystal}
`
const Temp = styled.span`
  text-align: center;
  font-weight: 700;
  display: block;
  width:100%;
  color: ${props => props.theme.colors.Honeydew}
`
