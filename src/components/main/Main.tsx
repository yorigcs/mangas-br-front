import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}
export const Main = ({ children }: Props): JSX.Element => {
  return (
        <MainWrapper>
            {children}
        </MainWrapper>
  )
}

const MainWrapper = styled.main`
  padding-top: 150px;
  height: 100vh;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
`
