
import React from 'react'
import styled from 'styled-components'

interface Props {
  message: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ message, onClick }: Props): JSX.Element => {
  return (
        <ButtonDefault onClick={onClick}>
            {message}
        </ButtonDefault>
  )
}
const ButtonDefault = styled.button`
    cursor: pointer;
    height: 48px;
    width: 80%;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.Honeydew};
    font-size: 24px;
    &:hover {
        opacity: 0.9;
    }
`
