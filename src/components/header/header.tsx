import styled from 'styled-components'

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper />
  )
}

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  width:100%;
  height: 56px;
  background-color: ${props => props.theme.colors.spaceCadet};

`
