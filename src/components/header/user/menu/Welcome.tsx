import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}
export const Welcome = ({ children }: Props): JSX.Element => {
  return (<WelcomeWrapper>{children}</WelcomeWrapper>)
}
const WelcomeWrapper = styled.span`
color: ${props => props.theme.colors.Honeydew};
`
