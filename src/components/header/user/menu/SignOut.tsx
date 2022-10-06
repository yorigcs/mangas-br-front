import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../../contexts/auth'

interface Props {
  children?: React.ReactNode
}
export const SignOut = ({ children }: Props): JSX.Element => {
  const { signOut } = useAuth()
  return (<SignOutWrapper onClick={signOut}>{children}</SignOutWrapper>)
}

const SignOutWrapper = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.desire};
  &:hover {
    opacity: 0.8;
  }
`
