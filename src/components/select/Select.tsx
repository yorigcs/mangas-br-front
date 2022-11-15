import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

interface IList {
  name: string
  id: string

}
interface Props {
  list?: IList[]
  onSelect: (select: React.MouseEvent<HTMLElement>) => void
  defaultTitle: string
}

export const Select = ({ list, onSelect, defaultTitle }: Props): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(defaultTitle)

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setTitle(e.currentTarget.innerHTML)
    setShowList(list => (list = false))
    onSelect(e)
  }
  const renderOptions = (): JSX.Element => {
    if (showList) {
      return (
                <List>
                    {list?.map((item) => <Item onClick={(e) => handleClick(e)} id={item.id} key={item.id}>{item.name}</Item>)}
                </List>
      )
    }
    return <></>
  }
  return (
        <Container >
            <SelectionBox onClick={() => setShowList(list => !list)}>
                {title}
                <Icon>
                    {showList ? <IoMdArrowDropup size={20} /> : <IoMdArrowDropdown size={20} />}
                </Icon>
            </SelectionBox>
            {renderOptions()}
        </Container>
  )
}

const Icon = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
`
const SelectionBox = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 16px;
    position: relative;
    cursor: pointer;
    background-color:${props => (props.theme.colors.Honeydew)};
    color:${props => (props.theme.colors.spaceCadet)};
    padding-left: 8px;
`
const Container = styled.div`
    position: relative;
    
`
const List = styled.ul`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color:${props => (props.theme.colors.spaceCadet)};
    padding: 8px;
    max-height: 200px;
    overflow-y: scroll;
    border:  1px solid ${props => (props.theme.colors.Honeydew)};;
    
`

const Item = styled.li`
    cursor: pointer;
    padding: 8px 0;
    color: ${props => (props.theme.colors.crystal)};
    &:hover {
        background-color:${props => (props.theme.colors.jellyBeanBlue)};
    }
    
`
