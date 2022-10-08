import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  to?: string
  onClick?: React.MouseEventHandler<HTMLSpanElement>
}
export const MenuItem = ({ children, to, onClick }: Props): JSX.Element => {
  const navigate = useNavigate()
  return (
    to
      ? <MenuItemWrapper onClick={() => navigate(to)}>• {children}</MenuItemWrapper>
      : <MenuItemWrapper onClick={onClick}>• {children}</MenuItemWrapper>)
}

const MenuItemWrapper = styled.span`
display: block;
cursor: pointer;
font-size: 16px;
color: ${props => props.theme.colors.crystal};
&:hover {
  opacity: 0.8;
}
`
