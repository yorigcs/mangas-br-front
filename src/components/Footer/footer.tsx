
import styled from 'styled-components'

export const Footer = (): JSX.Element => {
  return (
      <FooterWrapper />
  )
}
const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  width:100%;
  height: 56px;
  background-color: ${props => props.theme.colors.spaceCadet};
`
