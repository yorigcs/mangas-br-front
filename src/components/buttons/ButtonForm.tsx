
import React from 'react'
import styled from 'styled-components'
import { Status } from '../../models/status'

interface Props {
  message: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  status: Status
}
export const ButtonForm = ({ message, onClick, status }: Props): JSX.Element => {
  return (
        <ButtonDefault status={status} onClick={onClick}>
            {message}
        </ButtonDefault>
  )
}
const ButtonDefault = styled.button<{ status?: Status }>`
    cursor: ${props => ((props.status === 'loading') ? 'default' : 'pointer')};
    pointer-events: ${props => ((props.status === 'loading') ? 'none' : 'inherit')};
    height: 48px;
    width: 80%;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
    opacity: ${props => ((props.status === 'loading') ? 0.7 : 1)};
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.Honeydew};
    font-size: 24px;
    &:hover {
      opacity: ${props => ((props.status === 'loading') ? 0.7 : 0.9)};
    }
`
