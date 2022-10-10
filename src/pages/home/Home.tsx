import styled from 'styled-components'
import { ContentBlock } from '../../components/contents/ContentBlock'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { LastUpdates } from './lastUpdates/LastUpdates'

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <PrimaryContent>

          <ContentBlock title='Últimos updates' size={{ height: '1500px' }} >
            <LastUpdates />
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

  
`
const SecundaryContent = styled.div`
  width: 400px;
  @media only screen and (max-width: 480px) {
   width:100%;
  }
`
