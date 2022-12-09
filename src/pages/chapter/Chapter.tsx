import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { ChapterInfo } from '../../components/chapters/ChapterInfo'
import { useChapter } from '../../hooks/useChapter'
import { useEffect } from 'react'

export const Chapter = (): JSX.Element => {
  const mangaNameParam = useParams().mangaName
  const chapterNameParam = useParams().chapterName
  const { setChapterParams } = useChapter()
  useEffect(() => {
    if (mangaNameParam && chapterNameParam) {
      setChapterParams({ chapterNameParam, mangaNameParam })
    }
  }, [])
  return (
    <>
      <Header />
      <Main>
          <PrimaryContent>
            <ChapterInfo />
          </PrimaryContent>
      </Main>
      <Footer />
    </>
  )
}

const PrimaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 800px;
  @media only screen and (max-width: 480px) {
   width:100%;
  }
  @media only screen and (max-width: 768px) {
   width:100%;
  }

  
`
