import styled from 'styled-components'

import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { ContentBlock } from '../../components/contents/ContentBlock'
import { MenuItem } from '../../components/header/user/menu/MenuItem'
import { useState } from 'react'
import { CreateNewManga } from './rendersOptions/CreateNewManga'
import { AddGenresToManga } from './rendersOptions/AddGenresToManga'

export const SystemManger = (): JSX.Element => {
  const [openOption, setOpenOption] = useState<string | null>(null)

  const handleRenderOption = (): JSX.Element => {
    switch (openOption) {
      case 'createNewManga':
        return <CreateNewManga />
      case 'addGenresToManga':
        return <AddGenresToManga />
      default:
        return <></>
    }
  }
  return (
    <>
      <Header />
      <Main>
        <PrimaryContent>
          <ContentBlock title='Painel de administração' size={{ height: '300px' }} >
            <MenuList>
              <MenuItem onClick={() => setOpenOption('createNewManga')}>Criar nova obra</MenuItem>
              <MenuItem onClick={() => setOpenOption('addGenresToManga')}>Add gêneros na obra</MenuItem>
            </MenuList>

          </ContentBlock>

        </PrimaryContent>

        <SecundaryContent>
          {handleRenderOption()}
        </SecundaryContent>

      </Main>

      <Footer />
    </>
  )
}

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PrimaryContent = styled.div`

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
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
