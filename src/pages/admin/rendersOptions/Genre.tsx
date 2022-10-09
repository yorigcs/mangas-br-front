import styled from 'styled-components'
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io'
import { GenreClick } from '../../../models/genreModels'

export const Genre = ({ id, name, onClick, type }: GenreClick): JSX.Element => {
  return (
    <GenreWrapper id={id}>
      <Icon id={name} onClick={onClick} >{type === 'add' ? <IoMdAddCircle size={12} /> : <IoMdRemoveCircle size={12} />}</Icon>
      {name}
    </GenreWrapper>)
}
const GenreWrapper = styled.div`
    position: relative;
    padding: 8px 24px 8px 8px;
    color: ${props => props.theme.colors.Honeydew};
    background-color: ${props => props.theme.colors.spaceCadet};
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
  `

const Icon = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
  `
