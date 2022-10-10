import styled from 'styled-components'
import { Chapter } from '../../models/mangaModels'
import { convertToDateMessage } from '../../utils/dateFormater'

export const ChapterRenderPreview = (props: Chapter): JSX.Element => {
  return (
          <ChapterWrapper id={props.id}>
              <Title>Cápitulo {props.chapter_num}</Title>
              <Time> {convertToDateMessage(props.updated_at)}</Time>
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
    border: 1px solid ${props => props.theme.colors.crystal};;
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
