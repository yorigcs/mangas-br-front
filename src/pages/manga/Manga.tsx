import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ChapterRenderList } from '../../components/chapters/ChapterList'
import { ContentBlock } from '../../components/contents/ContentBlock'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { MangaInfo } from '../../components/manga/MangaInfo'
import { MangaWithChapter } from '../../models/mangaModels'

export const Manga = (): JSX.Element => {
  const mangaWithChapter = useLocation().state as MangaWithChapter
  const { Chapter, ...manga } = mangaWithChapter
  return (
    <>
      <Header />
      <Main>
        <PrimaryContent>
          <ContentBlock gap='30px' title={manga.name} size={{ height: 'auto' }} >
            <MangaInfo {...manga} />
            <ChapterRenderList chapters={Chapter}/>
          </ContentBlock>

        </PrimaryContent>

        <SecundaryContent>
          <ContentBlock title='Bloco 4' size={{ height: '1500px' }} >
            oi
          </ContentBlock>

        </SecundaryContent>

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
const SecundaryContent = styled.div`
  width: 400px;
  @media only screen and (max-width: 480px) {
   width:100%;
  }
  @media only screen and (max-width: 768px) {
   width:100%;
  }
`
