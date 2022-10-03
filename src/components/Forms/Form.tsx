import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  title: string
}
export const Form = ({ children, title }: Props): JSX.Element => {
  return (
        <FormWrapper>
            <Title>{title}</Title>
            {children}
        </FormWrapper>
  )
}

const FormWrapper = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  margin: 0 auto;
  width: 600px;
  min-height: 200px;
  background-color: ${props => props.theme.colors.spaceCadet};
  border-radius: 16px;
  @media only screen and (max-width: 480px) {
    width:100%;
  }
`
const Title = styled.span`
  font-weight: 700;
  font-size: 32px;
  color: ${props => props.theme.colors.Honeydew};
`
