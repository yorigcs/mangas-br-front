
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../../contexts/auth'
import { ButtonForm } from '../../buttons/ButtonForm'

interface Props {
  isOpen?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
export const UserOptions = ({ isOpen, onClick }: Props): JSX.Element => {
  const navigate = useNavigate()
  const { signed, user } = useAuth()
  return (
    <>
      <UserOptionsWrapper isOpen={isOpen} >
        {signed ? <Welcome>Bem-Vindo, {user?.name.split(' ')[0]}.</Welcome> : <ButtonForm onClick={() => navigate('/sign-in')} message='Fazer login' />}
        <Risk />
      </UserOptionsWrapper>
      <Overlay onClick={onClick} isOpen={isOpen} />
    </>
  )
}

const Risk = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
  
    
`
const Welcome = styled.span`
  color: ${props => props.theme.colors.Honeydew};
`

const UserOptionsWrapper = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
  position: absolute;
  bottom: -110px;
  right: 0px;
  width: 200px;
  background-color: ${props => props.theme.colors.spaceCadet};
  border: 1px solid ${props => props.theme.colors.jellyBeanBlue};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;
  z-index: 2;
  @media only screen and (max-width: 480px) {
    width:100%;
  }
    
`

const Overlay = styled.div<{ isOpen?: boolean }>`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => props.isOpen ? 'block' : 'none'};
  z-index: 1;
`
