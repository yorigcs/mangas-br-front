import styled from 'styled-components'
import { Title } from './Title'

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Title>Manga Brasil</Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items:center;
  padding: 0 16px;
  width:100%;
  height: 56px;
  background-color: ${props => props.theme.colors.spaceCadet};

`
