import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MdViewList } from 'react-icons/md'
import { useChapter } from '../../hooks/useChapter'

export const ChapterSelector = (): JSX.Element => {
  const { mangaName, previousChapterName, nextChapterName, setChapterParams } = useChapter()
  const navigate = useNavigate()

  const handleOnClick = (chapterNameParam: string): void => {
    setChapterParams(params => ({ ...params, chapterNameParam }))
    navigate(`/mangas/${mangaName}/${chapterNameParam}`)
  }
  const handleRenderButtons = (): JSX.Element => {
    if (previousChapterName && nextChapterName) {
      return (
        <>
          <Button onClick={() => handleOnClick(previousChapterName)}>Anterior</Button>
          <Back onClick={() => navigate(`/mangas/${mangaName}`)}>
            <MdViewList size={28} />
          </Back>
          <Button onClick={() => handleOnClick(nextChapterName)}>Próximo</Button>
        </>)
    } else if (previousChapterName && !nextChapterName) {
      return (
        <>
          <Button onClick={() => handleOnClick(previousChapterName)}>Anterior</Button>
          <Back onClick={() => navigate(`/mangas/${mangaName}`)}>
            <MdViewList size={28} />
          </Back>
          <Button disabled>Próximo</Button>
        </>)
    } else if (!previousChapterName && nextChapterName) {
      return (
        <>
          <Button disabled>Anterior</Button>
          <Back onClick={() => navigate(`/mangas/${mangaName}`)}>
            <MdViewList size={28} />
          </Back>
          <Button onClick={() => handleOnClick(nextChapterName)}>Próximo</Button>
        </>)
    } else {
      return (<></>)
    }
  }

  return (
    <ChapterSelectorWrapper>
      {handleRenderButtons()}
    </ChapterSelectorWrapper>)
}

const ChapterSelectorWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`

const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.crystal};
  pointer-events: ${props => props.disabled ? 'none' : 'inherit'};
  opacity: ${props => props.disabled ? '0.4' : 'inherit'};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background-color:${props => props.theme.colors.spaceCadet};  
  color:${props => props.theme.colors.crystal};  
  &:hover {
    opacity: 0.8;
  }
`

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.crystal};
  cursor: pointer;
  border-radius: 4px;
  padding: 2px;
  background-color:${props => props.theme.colors.spaceCadet};  
  color:${props => props.theme.colors.crystal};  
  &:hover {
    opacity: 0.8;
  }
`
