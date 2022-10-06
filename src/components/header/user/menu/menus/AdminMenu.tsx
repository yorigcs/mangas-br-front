import styled from 'styled-components'
import { useAuth } from '../../../../../contexts/auth'
import { MenuItem } from '../MenuItem'
import { SignOut } from '../SignOut'
import { Welcome } from '../Welcome'

export const AdminMenu = (): JSX.Element => {
  const { user } = useAuth()
  return (
    <>
    <Welcome>Bem-Vindo admin, {user?.name.split(' ')[0]}.</Welcome>
    <Risk />
    <MenuItem to='/system-manager'>Administração</MenuItem>

    <SignOut>Sair</SignOut>
    </>
  )
}

const Risk = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
`
