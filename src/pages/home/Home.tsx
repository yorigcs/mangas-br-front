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
        <DisplayContent>
          <ContentBlock title='Últimas atualizações' size={{ height: 'fit-content' }} >
            <LastUpdates />
          </ContentBlock>
        </DisplayContent>
      </Main>
      <Footer />
    </>
  )
}

const DisplayContent = styled.div`
  display: grid;
  grid-template-columns: 1200px;
  @media only screen and (max-width: 480px) {
    grid-template-columns: auto;
  }
  
`
