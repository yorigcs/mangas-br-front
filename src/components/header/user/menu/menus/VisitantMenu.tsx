import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonForm } from '../../../../buttons/ButtonForm'
import { Welcome } from '../Welcome'

export const VisitantMenu = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <>
    <Welcome>Bem-Vindo, visitante!.</Welcome>
    <Risk />
    <ButtonForm onClick={() => navigate('/sign-in')} message='Fazer login' />
    </>
  )
}

const Risk = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.jellyBeanBlue};
`
