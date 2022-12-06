import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Chapter } from '../../models/chapterModel'
import { convertToDateMessage } from '../../utils/dateFormater'

interface Props extends Chapter {
  mangaName: string
}
export const ChapterRenderPreview = ({ id, chapter_num, updated_at, mangaName, name }: Props): JSX.Element => {
  const navigate = useNavigate()
  const mangaNameChange = mangaName.toLowerCase().split(' ').join('-')
  const chapterName = name.toLowerCase().split(' ').join('-')
  return (
          <ChapterWrapper id={id} onClick={() => navigate(`/mangas/${mangaNameChange}/${chapterName}`)}>
              <Title>Capítulo {chapter_num}</Title>
              <Time> {convertToDateMessage(updated_at)}</Time>
          </ChapterWrapper>
  )
}

const ChapterWrapper = styled.div`
    cursor: pointer;
    padding: 8px;
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.crystal};
    background-color:${props => props.theme.colors.spaceCadet};
    width:100%;
    &:hover{
        opacity: 0.9;
    }
    
`

const Title = styled.h2`
  width:fit-content;
  color: ${props => props.theme.colors.crystal}
`
const Time = styled.span`
  width:fit-content;
  font-size: 12px;
  color: ${props => props.theme.colors.crystal}
`
