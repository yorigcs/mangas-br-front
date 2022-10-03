import styled from 'styled-components'

interface Props {
  message: string
}
export const Button = ({ message }: Props): JSX.Element => {
  return (
        <ButtonDefault>
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
