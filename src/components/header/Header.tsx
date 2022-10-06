import styled from 'styled-components'
import { Title } from './Title'
import { User } from './user/User'

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Title>Manga Brasil</Title>
        <User />
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items:center;
  justify-content: center;
  width:100%;
  height: 56px;
  background-color: ${props => props.theme.colors.spaceCadet};
`

const HeaderContentWrapper = styled.header`
  position: relative;
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 700px;
  @media only screen and (max-width: 480px) {
    width:100%;
    padding: 0 8px;
  }
 
`
