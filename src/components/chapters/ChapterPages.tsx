
import styled from 'styled-components'

import { useChapter } from '../../hooks/useChapter'

export const ChapterPages = (): JSX.Element => {
  const { pages } = useChapter()

  return (
    <PagesWrapper>
      {pages?.map(page => <PageImg key={page.id} src={page.page_img}/>)}
    </PagesWrapper>)
}

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const PageImg = styled.img`
  width: 100%;
`
