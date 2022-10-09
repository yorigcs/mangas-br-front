import styled from 'styled-components'
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io'
import { GenreClick } from '../../../models/genreModels'

export const Genre = ({ id, name, onClick, type }: GenreClick): JSX.Element => {
  const handleRenderGenre = (): JSX.Element => {
    switch (type) {
      case 'add':
        return (
          <GenreWrapperWithIcon id={id}>
            <Icon id={name} onClick={onClick} ><IoMdAddCircle size={12} /></Icon>
            {name}
          </GenreWrapperWithIcon>
        )
      case 'remove':
        return (
          <GenreWrapperWithIcon id={id}>
            <Icon id={name} onClick={onClick} ><IoMdRemoveCircle size={12} /></Icon>
            {name}
          </GenreWrapperWithIcon>
        )
      default:
        return (
        <GenreWrapperDefault id={id}>
          {name}
        </GenreWrapperDefault>)
    }
  }
  return (<>{handleRenderGenre()}</>)
}

const GenreWrapperDefault = styled.div`
    position: static;
    padding: 8px;
    color: ${props => props.theme.colors.Honeydew};
    background-color: ${props => props.theme.colors.spaceCadet};
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    border: solid 1px ${props => props.theme.colors.Honeydew};
  `

const GenreWrapperWithIcon = styled(GenreWrapperDefault)`
    position: relative;
    padding-right: 24px;
`

const Icon = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
  `
