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
  display: flex;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
  padding: 150px 0 80px;
  background-color: ${props => props.theme.colors.lapisLazuli};
  @media only screen and (max-width: 480px) {
   width:100%;
   flex-direction: column;
   justify-content: flex-start;

  }
  @media only screen and (max-width: 480px) {
   width:100%;
   flex-direction: column;
   justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
   width:100%;
   flex-direction: column;
   justify-content: flex-start;
  }
`
