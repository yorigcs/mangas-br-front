
import React from 'react'
import styled from 'styled-components'

interface Props {
  message: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  loading?: boolean
}
export const Button = ({ message, onClick, loading }: Props): JSX.Element => {
  return (
        <ButtonDefault disabled={loading} loading={loading} onClick={onClick}>
            {message}
        </ButtonDefault>
  )
}
const ButtonDefault = styled.button<{ loading?: boolean }>`
    cursor: ${props => (props.loading ? 'wait' : 'pointer')};
    height: 48px;
    width: 80%;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
    opacity: ${props => (props.loading ? 0.7 : 1)};
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.Honeydew};
    font-size: 24px;
    &:hover {
      opacity: ${props => (props.loading ? 0.7 : 0.9)};
    }
`
