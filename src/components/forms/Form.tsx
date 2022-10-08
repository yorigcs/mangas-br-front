import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  msg?: string | null
}
export const Form = ({ children, onSubmit, msg }: Props): JSX.Element => {
  return (
        <FormWrapper onSubmit={onSubmit}>
            {children}
            {msg ? <FormMsg>{msg}</FormMsg> : null}
        </FormWrapper>
  )
}

const FormMsg = styled.p`
  color: ${props => props.theme.colors.desire};
  margin-top: 4px;
  font-weight: 700;
  font-size: 14px;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  a {
    color: ${props => (props.theme.colors.crystal)}
  }
 
`
