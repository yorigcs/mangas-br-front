import styled from 'styled-components'
import { useAuth } from '../../../../../contexts/auth'
import { SignOut } from '../SignOut'
import { Welcome } from '../Welcome'

export const UserMenu = (): JSX.Element => {
  const { user } = useAuth()
  return (
    <>
    <Welcome>Bem-Vindo, {user?.name.split(' ')[0]}.</Welcome>
    <Risk />
    <SignOut>Sair</SignOut>
    </>
  )
}

const Risk = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
`
