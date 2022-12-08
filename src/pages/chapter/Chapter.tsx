import styled from 'styled-components'

import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { ChapterInfo } from '../../components/chapters/ChapterInfo'

import { ChapterProvider } from '../../contexts/ChapterProvider'

export const Chapter = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <ChapterProvider>
          <PrimaryContent>
            <ChapterInfo />
          </PrimaryContent>
        </ChapterProvider>
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
