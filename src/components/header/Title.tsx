import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
interface Props {
  children: React.ReactNode
}
export const Title = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()
  return (<TitleWrapper onClick={() => navigate('/')}>{children}</TitleWrapper>)
}

const TitleWrapper = styled.h1`
    cursor: pointer;
    color: ${props => props.theme.colors.crystal};
    font-size: 24px;
`
