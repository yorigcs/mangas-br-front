import styled from 'styled-components'
import { Chapter } from '../../models/chapterModel'

import { ChapterRenderPreview } from './ChapterRenderPreview'

interface Props {
  chapters: Chapter[]
  mangaName: string
}
export const ChapterRenderList = ({ chapters, mangaName }: Props): JSX.Element => {
  return (
        <>
            {chapters.length !== 0
              ? <>
                    <Title>Capítulos disponíveis: {chapters.length}</Title>
                    <ListWrapper>
                    {chapters.map(chapter => <ChapterRenderPreview mangaName={mangaName} key={chapter.id} {...chapter} />)}
                    </ListWrapper>
                </>
              : <Title>Ainda não há um capítulo disponível.</Title>}
        </>

  )
}

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
