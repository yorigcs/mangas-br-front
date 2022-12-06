import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ChapterRenderList } from '../../components/chapters/ChapterList'
import { ContentBlock } from '../../components/contents/ContentBlock'
import { EmptyAnimationMessage } from '../../components/empty/EmptyAnimationMessage'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { MangaInfo } from '../../components/manga/MangaInfo'

import { useAsync } from '../../hooks/useAsync'
import { MangaWithChapter } from '../../models/mangaModels'
import { findMangaWithChaptersByName } from '../../services/requests'

export const Manga = (): JSX.Element => {
  const { mangaName } = useParams()
  if (!mangaName) return <></>
  const request = async (): Promise<MangaWithChapter> => (await findMangaWithChaptersByName(mangaName))
  const { data: manga, status } = useAsync<MangaWithChapter>(request)

  const handleRender = (): JSX.Element => {
    if (!manga && status === 'loading') {
      return (<>Carregando....</>)
    } else if (manga) {
      return (
        <ContentBlock gap='30px' title={manga.name} size={{ height: 'auto' }} >
          <MangaInfo {...manga} />
          <ChapterRenderList chapters={manga.Chapter} />
        </ContentBlock>
      )
    } else {
      return (
        <ContentBlock size={{ height: 'auto' }} >
          <EmptyAnimationMessage>Não encontramos esse manga</EmptyAnimationMessage>
        </ContentBlock>
      )
    }
  }
  return (
    <>
      <Header />
      <Main>
        <PrimaryContent>
          {handleRender()}
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
