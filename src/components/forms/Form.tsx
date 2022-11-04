import styled from 'styled-components'
import { Status } from '../../models/status'

interface Props {
  children: React.ReactNode
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  msg?: string | null
  status?: Status
}
export const Form = ({ children, onSubmit, msg, status }: Props): JSX.Element => {
  const handleMsg = (): JSX.Element => {
    switch (status) {
      case 'sucess':
        return <FormMsgSucess>{msg}</FormMsgSucess>
      case 'error':
        return <FormMsgError>{msg}</FormMsgError>
      default:
        return <></>
    }
  }
  return (
        <FormWrapper onSubmit={onSubmit}>
            {children}
            {msg ? handleMsg() : null}
        </FormWrapper>
  )
}

const FormMsgError = styled.p`
  color: ${props => props.theme.colors.desire};
  margin-top: 4px;
  font-weight: 700;
  font-size: 14px;
`

const FormMsgSucess = styled(FormMsgError)`
  color: green

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
