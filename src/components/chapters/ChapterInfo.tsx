import React from 'react'
import styled from 'styled-components'
import { useChapter } from '../../hooks/useChapter'

import { ChapterSelector } from './ChapterSelector'

export const ChapterInfo = (): JSX.Element => {
  const { manga, actualChapterName } = useChapter()
  const mangaName = manga?.name
  const chapters = manga?.Chapter
  if (!chapters) return <></>
  return (
    <ChapterInfoWrapper>
      {mangaName}
      {actualChapterName}
      <ChapterSelector chapters={chapters} />
    </ChapterInfoWrapper>

  )
}

const ChapterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  
`
