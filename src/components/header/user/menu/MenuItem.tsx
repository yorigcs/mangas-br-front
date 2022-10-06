import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  to: string
}
export const MenuItem = ({ children, to }: Props): JSX.Element => {
  const navigate = useNavigate()
  return (<MenuItemWrapper onClick={() => navigate(to)}>• {children}</MenuItemWrapper>)
}

const MenuItemWrapper = styled.span`
cursor: pointer;
font-size: 16px;
color: ${props => props.theme.colors.crystal};
&:hover {
  opacity: 0.8;
}
`
