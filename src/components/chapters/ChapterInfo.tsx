import React from 'react'
import styled from 'styled-components'
import { useChapter } from '../../hooks/useChapter'
import { ChapterPages } from './ChapterPages'

import { ChapterSelector } from './ChapterSelector'

export const ChapterInfo = (): JSX.Element => {
  const { manga, actualChapterName } = useChapter()
  const mangaName = manga?.name

  return (
    <ChapterInfoWrapper>
      {mangaName}
      {actualChapterName}
      <ChapterSelector />
      <ChapterPages />
    </ChapterInfoWrapper>

  )
}

const ChapterInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center
  
`
